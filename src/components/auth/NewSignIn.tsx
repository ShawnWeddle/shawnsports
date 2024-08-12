import { type z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createUserSchema, logInUserSchema } from "~/server/api/auth/schema";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Button } from "~/components/ui/button";

export function ProfileForm() {
  const signUpForm = useForm<z.infer<typeof createUserSchema>>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });
  const logInForm = useForm<z.infer<typeof logInUserSchema>>({
    resolver: zodResolver(logInUserSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onCreateSubmit(values: z.infer<typeof createUserSchema>) {
    console.log(values);
  }

  function onLogInSubmit(values: z.infer<typeof logInUserSchema>) {
    console.log(values);
  }

  const handleRegister = () => {
    // const validation = createUserSchema.safeParse({
    //   username: username,
    //   email: email,
    //   password: password,
    //   passwordConfirm: passwordConfirmation,
    // });
    // console.log(validation);
    // if (validation.success) {
    //   registerUser.mutate(
    //     {
    //       username: username,
    //       email: email,
    //       password: password,
    //       passwordConfirm: passwordConfirmation,
    //     },
    //     {
    //       onSuccess() {
    //         setSignUpErrors([]);
    //         setIsSignedUp(true);
    //       },
    //       onError(error) {
    //         console.log(error);
    //       },
    //     }
    //   );
    // }
  };

  const handleLogin = () => {
    // const validation = logInUserSchema.safeParse({
    //   username: username,
    //   password: password,
    // });
    // console.log(validation);
    // if (validation.success) {
    //   logInUser.mutate(
    //     {
    //       username: username,
    //       password: password,
    //     },
    //     {
    //       onSuccess(data) {
    //         const { token, user } = data;
    //         authDispatch({
    //           type: "LOGIN",
    //           payload: {
    //             token: token,
    //             userId: user.userId,
    //             username: user.username,
    //             email: user.email,
    //           },
    //         });
    //         setLogInErrors([]);
    //         setIsLoggedIn(true);
    //       },
    //       onError(error) {
    //         console.log(error);
    //       },
    //     }
    //   );
    // }
  };

  return (
    <Tabs defaultValue="logIn">
      <div className="flex justify-center">
        <TabsList className="bg-home">
          <TabsTrigger
            value="logIn"
            className="text-white data-[state=active]:text-home"
          >
            Log In
          </TabsTrigger>
          <TabsTrigger
            value="signUp"
            className="text-white data-[state=active]:text-home"
          >
            Sign Up
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="signUp">
        <Form {...signUpForm}>
          <form
            onSubmit={void signUpForm.handleSubmit(onCreateSubmit)}
            className="space-y-8"
          >
            <FormField
              control={signUpForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-home">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
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
                    <Input placeholder="Username" {...field} />
                  </FormControl>
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
                    <Input placeholder="Password" {...field} />
                  </FormControl>
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
                    <Input placeholder="Confirm Password" {...field} />
                  </FormControl>
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
      </TabsContent>
      <TabsContent value="logIn">
        <Form {...logInForm}>
          <form
            onSubmit={void logInForm.handleSubmit(onLogInSubmit)}
            className="space-y-8"
          >
            <FormField
              control={logInForm.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-home">Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
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
                    <Input placeholder="Password" {...field} />
                  </FormControl>
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
      </TabsContent>
    </Tabs>
  );
}
