import { type z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuthContext } from "~/hooks/useAuthContext";
import { logInUserSchema } from "~/server/api/auth/schema";
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

const LogIn: React.FC = () => {
  const logInForm = useForm<z.infer<typeof logInUserSchema>>({
    resolver: zodResolver(logInUserSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const logInUser = api.user.logInUser.useMutation();
  const { authDispatch } = useAuthContext();

  function onLogInSubmit(values: z.infer<typeof logInUserSchema>) {
    const { username, password } = values;
    logInUser.mutate(
      {
        username,
        password,
      },
      {
        onSuccess(data) {
          const { user, token } = data;
          const { userId, email, username } = user;
          authDispatch({
            type: "LOGIN",
            payload: {
              token,
              userId,
              email,
              username,
            },
          });
        },
      }
    );
  }

  return (
    <Form {...logInForm}>
      <form
        onSubmit={logInForm.handleSubmit(onLogInSubmit)}
        className="space-y-8"
      >
        <FormField
          control={logInForm.control}
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
          control={logInForm.control}
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
        <div className="flex justify-center">
          <Button type="submit" variant="home">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LogIn;
