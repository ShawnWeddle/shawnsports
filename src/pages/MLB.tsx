import { type NextPage } from "next";
import Head from "next/head";
import { useNavContext } from "~/hooks/useNavContext";
import NavBar from "~/components/Nav/NavBar";
import Footer from "~/components/Footer";
import { MLBRankContextProvider } from "~/context/MLBrankContext";
import MLBRanker from "~/components/MLB/MLBRanker";
import WorldSeriesList from "~/components/MLB/WorldSeriesList";

const MLB: NextPage = () => {
  const { navState } = useNavContext();
  const { underPageMode } = navState;
  return (
    <>
      <Head>
        <title>MLB - Sports Mega World</title>
        <meta name="description" content="MLB SportsMegaWorld" />
        <link rel="icon" href="/f1favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gradient-to-r from-mlb/50 via-white to-mlb/50 sm:items-center">
        <NavBar pageMode="MLB" underPageMode="World Series" />
        <div className="mx-auto flex w-full grow flex-col items-start justify-between bg-white sm:m-0 sm:max-w-screen-sm sm:items-center md:max-w-screen-md lg:max-w-screen-lg">
          {underPageMode === "Rank" && (
            <MLBRankContextProvider>
              <MLBRanker />
            </MLBRankContextProvider>
          )}
          {underPageMode === "World Series" && <WorldSeriesList />}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default MLB;
