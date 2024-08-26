import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

const SignIn: React.FC = () => {
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
        <SignUp />
      </TabsContent>
      <TabsContent value="logIn">
        <LogIn />
      </TabsContent>
    </Tabs>
  );
};

export default SignIn;
