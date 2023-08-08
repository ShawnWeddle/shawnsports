import { type NextPage } from "next";
import Head from "next/head";
import { useNavContext } from "~/hooks/useNavContext";
import NavBar from "~/components/Nav/NavBar";
import { NBARankContextProvider } from "~/context/NBArankContext";
import NBARanker from "~/components/NBA/NBARanker";
import NBApickTable from "~/components/NBA/NBApickTable";

const NBA: NextPage = () => {
  const { navState } = useNavContext();
  const { underPageMode } = navState;
  return (
    <>
      <Head>
        <title>NBA</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gradient-to-r from-nba/50 via-white to-nba/50 sm:items-center">
        <NavBar pageMode="NBA" underPageMode="Future Picks" />
        <div className="mx-auto flex w-full grow flex-col items-start bg-white sm:m-0 sm:max-w-screen-sm sm:items-center md:max-w-screen-md lg:max-w-screen-lg">
          {underPageMode === "Future Picks" && <NBApickTable />}
          {underPageMode === "Rank" && (
            <NBARankContextProvider>
              <NBARanker />
            </NBARankContextProvider>
          )}
        </div>
        <div className="w-full bg-nba p-2 text-center text-white">
          Developed by{" "}
          <a
            className="hover:underline"
            href="https://shawnweddle.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shawn Weddle
          </a>
        </div>
      </main>
    </>
  );
};

export default NBA;
