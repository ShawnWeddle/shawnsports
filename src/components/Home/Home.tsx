import HomeNav from "./HomeNav";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import Link from "next/link";

const HomeComp: React.FC = () => {
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
          <Link
            className="text-lg text-home hover:underline"
            href="https://www.shawnweddle.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Shawn Marlin Weddle
          </Link>
          . I&apos;m a lifelong sports fan, and I created this website to put
          together these sports resources I couldn&apos;t find anywhere else.
          Thanks for checking out{" "}
          <span className="text-lg text-home"> SportsMegaWorld</span>.
        </CardContent>
      </Card>
    </>
  );
};

export default HomeComp;
