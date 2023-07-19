import { type NextPage } from "next";
import Head from "next/head";
import { RaceResultTable } from "~/components/F1/RaceResultTable";

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
        <RaceResultTable />
      </main>
    </>
  );
};

export default FormulaOne;
