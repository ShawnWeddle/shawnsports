import { type NextPage } from "next";
import Head from "next/head";
import NBApickTable from "~/components/NBApickTable";

const NBApicks: NextPage = () => {
  return (
    <>
      <Head>
        <title>NBA Future Draft Picks</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-blue-800">
        <div className="text-2xl text-white">NBA Future Draft Picks</div>
        <NBApickTable />
      </main>
    </>
  );
};

export default NBApicks;