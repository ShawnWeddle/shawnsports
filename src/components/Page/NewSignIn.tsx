import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

const SignIn: React.FC = () => {
  return (
    <div>
      <Tabs defaultValue="logIn" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="logIn">Log In</TabsTrigger>
          <TabsTrigger value="signUp">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="logIn">Log In</TabsContent>
        <TabsContent value="signUp">Sign Up</TabsContent>
      </Tabs>
    </div>
  );
};

export default SignIn;
