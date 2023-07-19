import { type NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/Nav/NavBar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-emerald-600 to-emerald-700">
        <NavBar position="s" />
        <div>G</div>
      </main>
    </>
  );
};

export default Home;
