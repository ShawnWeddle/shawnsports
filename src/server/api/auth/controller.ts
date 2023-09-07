import bcrypt from "bcrypt";
import { createUser, findUser, findUniqueUser, signJwt} from "./service";
import type { CreateUserInput, LoginUserInput } from "./schema";
import { TRPCError } from "@trpc/server";

export const registerHandler = async ({
  input,
}: {
  input: CreateUserInput;
}) => {
  try {
    const emailAlreadyInUse = await findUniqueUser({ email: input.email.toLowerCase() });

    if(emailAlreadyInUse){
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: 'This email is already in use',
      });
    }

    const usernameAlreadyInUse = await findUniqueUser({ username: input.username.toLowerCase() });

    if(usernameAlreadyInUse){
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: 'This username is already in use',
      });
    }

    const hashedPassword = await bcrypt.hash(input.password, 10);
    const user = await createUser({
      username: input.username.toLocaleLowerCase(),
      email: input.email.toLocaleLowerCase(),
      password: hashedPassword
    });

    return {
      status: 'success',
      data: {
        user
      },
    };
  } catch (error) {
    throw error;
  }
};

export const loginHandler = async ({
  input
}: {
  input: LoginUserInput
}) => {
  try {
    const user = await findUser({ email: input.email.toLowerCase() });

    if (!user || !(await bcrypt.compare(input.password, user.password))) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'Invalid email or password',
      });
    }

    const token = signJwt({...user});

    return {
      status: 'success',
      token,
      user: { username: user.username, email: user.email, userId: user.id}
    };
  } catch (error) {
    throw error;
  }
};