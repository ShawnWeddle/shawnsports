import Link from "next/link";
import HomeNav from "./HomeNav";
import NoteFromDev from "./NoteFromDev";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "../ui/button";

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
      <NoteFromDev />
      <div className="flex justify-center">
        <Button variant="ghost" className="text-home hover:bg-home/30">
          <Link href="/map">Map of all leagues</Link>
        </Button>
      </div>
    </>
  );
};

export default HomeComp;
