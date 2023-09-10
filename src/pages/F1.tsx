import { type NextPage } from "next";
import Head from "next/head";
import { useNavContext } from "~/hooks/useNavContext";
import NavBar from "~/components/Nav/NavBar";
import Footer from "~/components/Footer";
import FormulaOneTable from "~/components/F1/Tables/FullTable";
import Standings from "~/components/F1/Standings/Standings";
import LineChart from "~/components/F1/Charts/LineChart";
import { F1RankContextProvider } from "~/context/F1rankContext";
import F1Ranker from "~/components/F1/Ranker/F1Ranker";

const FormulaOne: NextPage = () => {
  const { navState } = useNavContext();
  const { underPageMode } = navState;

  return (
    <>
      <Head>
        <title>Formula One - Sports Mega World</title>
        <meta name="description" content="Formula One SportsMegaWorld" />
        <link rel="icon" href="/f1favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gradient-to-r from-formulaOne/50 via-white to-formulaOne/50 sm:items-center">
        <NavBar pageMode="F1" underPageMode="Tables" />
        <div className="mx-auto flex w-full grow flex-col items-start justify-between bg-white sm:m-0 sm:max-w-screen-sm sm:items-center md:max-w-screen-md lg:max-w-screen-lg">
          {underPageMode === "Tables" && <FormulaOneTable />}
          {underPageMode === "Standings" && <Standings />}
          {underPageMode === "Compare" && <LineChart />}
          {underPageMode === "Rank" && (
            <F1RankContextProvider>
              <F1Ranker />
            </F1RankContextProvider>
          )}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default FormulaOne;
