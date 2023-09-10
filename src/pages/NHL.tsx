import { type NextPage } from "next";
import Head from "next/head";
import { useNavContext } from "~/hooks/useNavContext";
import NavBar from "~/components/Nav/NavBar";
import Footer from "~/components/Footer";
import { NHLRankContextProvider } from "~/context/NHLrankContext";
import NHLRanker from "~/components/NHL/NHLRanker";
import StanleyCupSeriesList from "~/components/NHL/StanleyCupSeriesList";

const NHL: NextPage = () => {
  const { navState } = useNavContext();
  const { underPageMode } = navState;
  return (
    <>
      <Head>
        <title>NHL - Sports Mega World</title>
        <meta name="description" content="NHL SportsMegaWorld" />
        <link rel="icon" href="/nhlfavicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gradient-to-r from-nhl/50 via-white to-nhl/50 sm:items-center">
        <NavBar pageMode="NHL" underPageMode="Stanley Cups" />
        <div className="mx-auto flex w-full grow flex-col items-start justify-between bg-white sm:m-0 sm:max-w-screen-sm sm:items-center md:max-w-screen-md lg:max-w-screen-lg">
          {underPageMode === "Rank" && (
            <NHLRankContextProvider>
              <NHLRanker />
            </NHLRankContextProvider>
          )}
          {underPageMode === "Stanley Cups" && <StanleyCupSeriesList />}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default NHL;
