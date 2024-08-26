import { type z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createUserSchema } from "~/server/api/auth/schema";
import { api } from "~/utils/api";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

const SignUp: React.FC = () => {
  const signUpForm = useForm<z.infer<typeof createUserSchema>>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const registerUser = api.user.registerUser.useMutation();

  function onRegisterSubmit(values: z.infer<typeof createUserSchema>) {
    const { username, email, password, passwordConfirm } = values;
    registerUser.mutate(
      {
        username,
        email,
        password,
        passwordConfirm,
      },
      {
        onSuccess() {
          console.log("SIGNED IN");
        },
        onError(error) {
          console.log(error);
        },
      }
    );
  }

  return (
    <Form {...signUpForm}>
      <form
        onSubmit={signUpForm.handleSubmit(onRegisterSubmit)}
        className="space-y-8"
      >
        <FormField
          control={signUpForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-home">Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" type="email" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={signUpForm.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-home">Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" type="text" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={signUpForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-home">Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="text" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={signUpForm.control}
          name="passwordConfirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-home">Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder="Confirm Password" type="text" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button type="submit" variant="home">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignUp;
