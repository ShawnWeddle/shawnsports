import { type ReactNode } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import NavBar from "../Nav/NavBar";
import NewNavBar from "../Nav/NewNavBar";
import Footer from "../Footer";
import { cn } from "~/utils/cn";
import { type PageHeadsType, type UnderPageHeadsType } from "~/data/SiteData";

interface PageProps {
  title: string;
  description: string;
  favicon: string;
  pageMode: PageHeadsType;
  underPageMode: UnderPageHeadsType;
  children: ReactNode;
}

const MainPage: NextPage<PageProps> = (props: PageProps) => {
  const { title, description, favicon, pageMode, underPageMode, children } =
    props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={favicon} />
      </Head>
      <main
        className={cn(
          "flex min-h-screen flex-col items-center bg-gradient-to-r via-white",
          {
            "from-home/50 to-home/50": pageMode === "Home",
            "from-formulaOne/50 to-formulaOne/50": pageMode === "F1",
            "from-nfl/50 to-nfl/50": pageMode === "NFL",
            "from-nba/50 to-nba/50": pageMode === "NBA" || pageMode === "WNBA",
            "from-mlb/50 to-mlb/50": pageMode === "MLB",
            "from-nhl/50 to-nhl/50": pageMode === "NHL",
            "from-cfl/50 to-cfl/50": pageMode === "CFL",
          }
        )}
      >
        <NewNavBar pageMode={pageMode} underPageMode={underPageMode} />

        <div className="mx-auto flex w-full grow flex-col items-center justify-between bg-white sm:m-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
          {children}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default MainPage;
