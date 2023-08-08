import { type NextPage } from "next";
import Head from "next/head";
import { useNavContext } from "~/hooks/useNavContext";
import NavBar from "~/components/Nav/NavBar";
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
        <title>Formula One</title>
        <meta name="description" content="2023 F1 Race Results" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gradient-to-r from-formulaOne/50 via-white to-formulaOne/50 sm:items-center">
        <NavBar pageMode="F1" underPageMode="Tables" />
        <div className="mx-auto flex w-full grow flex-col items-start bg-white sm:m-0 sm:max-w-screen-sm sm:items-center md:max-w-screen-md lg:max-w-screen-lg">
          {underPageMode === "Tables" && <FormulaOneTable />}
          {underPageMode === "Standings" && <Standings />}
          {underPageMode === "Charts" && <LineChart />}
          {underPageMode === "Rank" && (
            <F1RankContextProvider>
              <F1Ranker />
            </F1RankContextProvider>
          )}
        </div>
        <div className="w-full bg-formulaOne p-2 text-center text-white">
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

export default FormulaOne;
