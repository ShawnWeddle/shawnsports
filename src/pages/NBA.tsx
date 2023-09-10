import { type NextPage } from "next";
import Head from "next/head";
import { useNavContext } from "~/hooks/useNavContext";
import NavBar from "~/components/Nav/NavBar";
import Footer from "~/components/Footer";
import { NBARankContextProvider } from "~/context/NBArankContext";
import NBARanker from "~/components/NBA/NBARanker";
import NBApickTable from "~/components/NBA/NBApickTable";
import NBAFinalsList from "~/components/NBA/NBAFinalsList";

const NBA: NextPage = () => {
  const { navState } = useNavContext();
  const { underPageMode } = navState;
  return (
    <>
      <Head>
        <title>NBA - Sports Mega World</title>
        <meta name="description" content="NBA SportsMegaWorld" />
        <link rel="icon" href="/nbafavicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gradient-to-r from-nba/50 via-white to-nba/50 sm:items-center">
        <NavBar pageMode="NBA" underPageMode="Future Picks" />
        <div className="mx-auto flex w-full grow flex-col items-start justify-between bg-white sm:m-0 sm:max-w-screen-sm sm:items-center md:max-w-screen-md lg:max-w-screen-lg">
          {underPageMode === "Future Picks" && <NBApickTable />}
          {underPageMode === "Finals" && <NBAFinalsList />}
          {underPageMode === "Rank" && (
            <NBARankContextProvider>
              <NBARanker />
            </NBARankContextProvider>
          )}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default NBA;
