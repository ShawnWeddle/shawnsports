import { type NextPage } from "next";
import Head from "next/head";
import { useNavContext } from "~/hooks/useNavContext";
import NavBar from "~/components/Nav/NavBar";
import FormulaOneTable from "~/components/F1/FullTable";
import DriverStandings from "~/components/F1/DriverStandings";
import LineChart from "~/components/F1/LineChart";

const FormulaOne: NextPage = () => {
  const { navState, navDispatch } = useNavContext();
  const { pageMode, underPageMode } = navState;

  return (
    <>
      <Head>
        <title>2023 F1 Race Results</title>
        <meta name="description" content="2023 F1 Race Results" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gradient-to-r from-formulaOne/50 via-white to-formulaOne/50 sm:items-center">
        <NavBar />
        <div className="m-auto flex min-h-max w-full flex-col items-start overflow-auto bg-white sm:m-0 sm:max-w-screen-sm sm:items-center md:max-w-screen-md lg:max-w-screen-lg">
          {underPageMode === "Tables" && <FormulaOneTable />}
          {underPageMode === "Standings" && <DriverStandings />}
          {underPageMode === "Charts" && <LineChart />}
        </div>
      </main>
    </>
  );
};

export default FormulaOne;
