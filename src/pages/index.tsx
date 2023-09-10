import { type NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/Nav/NavBar";
import Footer from "~/components/Footer";
import HomeComp from "~/components/Home/Home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sports Mega World</title>
        <meta name="description" content="Home Page SportsMegaWorld" />
        <link rel="icon" href="/homefavicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gradient-to-r from-home/50 via-white to-home/50 sm:items-center">
        <NavBar pageMode="Home" underPageMode="Home" />
        <div className="mx-auto flex w-full grow flex-col items-start justify-between bg-white sm:m-0 sm:max-w-screen-sm sm:items-center md:max-w-screen-md lg:max-w-screen-lg">
          <HomeComp />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;

/*
<div className="w-full bg-home p-2 text-center text-white">
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
*/
