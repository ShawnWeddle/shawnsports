import HomeNav from "./HomeNav";
import NoteFromDev from "./NoteFromDev";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

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
    </>
  );
};

export default HomeComp;
