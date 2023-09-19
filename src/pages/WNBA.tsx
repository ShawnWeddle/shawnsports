import { type NextPage } from "next";
import Head from "next/head";
import { useNavContext } from "~/hooks/useNavContext";
import NavBar from "~/components/Nav/NavBar";
import Footer from "~/components/Footer";
import { WNBARankContextProvider } from "~/context/WNBArankContext";
import WNBARanker from "~/components/WNBA/WNBARanker";

const WNBA: NextPage = () => {
  const { navState } = useNavContext();
  const { underPageMode } = navState;
  return (
    <>
      <Head>
        <title>WNBA - Sports Mega World</title>
        <meta name="description" content="WNBA SportsMegaWorld" />
        <link rel="icon" href="/nbafavicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gradient-to-r from-nba/50 via-white to-nba/50 sm:items-center">
        <NavBar pageMode="WNBA" underPageMode="Rank" />
        <div className="mx-auto flex w-full grow flex-col items-start justify-between bg-white sm:m-0 sm:max-w-screen-sm sm:items-center md:max-w-screen-md lg:max-w-screen-lg">
          {underPageMode === "Rank" && (
            <WNBARankContextProvider>
              <WNBARanker />
            </WNBARankContextProvider>
          )}

          <Footer />
        </div>
      </main>
    </>
  );
};

export default WNBA;
