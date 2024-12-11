import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

import Link from "next/link";

const NoteFromDev: React.FC = () => {
  return (
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
  );
};

export default NoteFromDev;
