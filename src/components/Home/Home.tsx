import HomeNav from "./HomeNav";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { useNavContext } from "~/hooks/useNavContext";

import NewNavBar from "../Nav/NavBar";

const HomeComp: React.FC = () => {
  const { navState, navDispatch } = useNavContext();
  const { pageMode, underPageMode } = navState;

  return (
    <>
      <Card className="m-1 w-fit">
        <CardHeader>
          <CardTitle>
            Welcome to <span className="text-home">SportsMegaWorld</span>
          </CardTitle>
          <CardDescription>
            A collection of resources for different sports leagues
          </CardDescription>
        </CardHeader>
      </Card>
      <HomeNav />
      <Card className="m-4 border border-home">
        <CardHeader>
          <CardTitle>Note from the developer</CardTitle>
        </CardHeader>
        <CardContent>
          Hello, I&apos;m
          <span className="text-lg text-home"> Shawn Marlin Weddle</span>.
          I&apos;m a lifelong sports fan, and I created this website to put
          together these sports resources I couldn&apos;t find anywhere else.
          Thanks for checking out{" "}
          <span className="text-lg text-home"> SportsMegaWorld </span>.
        </CardContent>
      </Card>
    </>
  );
};

export default HomeComp;
