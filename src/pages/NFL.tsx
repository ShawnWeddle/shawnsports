import { type NextPage } from "next";
import Head from "next/head";
import { useNavContext } from "~/hooks/useNavContext";
import NavBar from "~/components/Nav/NavBar";
import Footer from "~/components/Footer";
import { NFLRankContextProvider } from "~/context/NFLrankContext";
import NFLRanker from "~/components/NFL/NFLRanker";
import { NFLScheduleContextProvider } from "~/context/NFLscheduleContext";
import NFLSchedule from "~/components/NFL/Schedule";
import SuperBowlList from "~/components/NFL/SuperBowlList";

const NFL: NextPage = () => {
  const { navState } = useNavContext();
  const { underPageMode } = navState;
  return (
    <>
      <Head>
        <title>NFL - Sports Mega World</title>
        <meta name="description" content="NFL SportsMegaWorld" />
        <link rel="icon" href="/nflfavicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gradient-to-r from-nfl/50 via-white to-nfl/50 sm:items-center">
        <NavBar pageMode="NFL" underPageMode="Schedule" />
        <div className="mx-auto flex w-full grow flex-col items-start justify-between bg-white sm:m-0 sm:max-w-screen-sm sm:items-center md:max-w-screen-md lg:max-w-screen-lg">
          {underPageMode === "Schedule" && (
            <NFLScheduleContextProvider>
              <NFLSchedule />
            </NFLScheduleContextProvider>
          )}
          {underPageMode === "Super Bowls" && <SuperBowlList />}
          {underPageMode === "Rank" && (
            <NFLRankContextProvider>
              <NFLRanker />
            </NFLRankContextProvider>
          )}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default NFL;
