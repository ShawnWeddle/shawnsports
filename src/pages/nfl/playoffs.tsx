import { cn } from "~/lib/utils";
import { type NextPage } from "next";
import Head from "next/head";
import NFLPlayoffs from "~/components/NFL/NFLplayoffs";

const MainPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>NFL 2024-25 Playoffs</title>
        <meta name="description" content="" />
        <link rel="icon" href="/nflfavicon.ico" />
      </Head>
      <main className={cn("flex min-h-screen flex-col items-center bg-[#999]")}>
        <NFLPlayoffs />
      </main>
    </>
  );
};

export default MainPage;
