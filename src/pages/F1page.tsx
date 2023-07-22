import { type NextPage } from "next";
import Head from "next/head";
import FormulaOneTable from "~/components/F1/FullTable";
import DriverStandings from "~/components/F1/DriverStandings";

const FormulaOne: NextPage = () => {
  return (
    <>
      <Head>
        <title>2023 F1 Race Results</title>
        <meta name="description" content="2023 F1 Race Results" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-blue-800">
        <div className="text-2xl text-white"></div>
        <FormulaOneTable />
      </main>
    </>
  );
};

export default FormulaOne;
