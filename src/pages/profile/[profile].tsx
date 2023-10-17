import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "~/hooks/useAuthContext";
import { type NextPage } from "next";
import Head from "next/head";
import NavBar from "~/components/Nav/NavBar";
import Footer from "~/components/Footer";
import SignOut from "~/components/SignOut";

const ProfilePage: NextPage = () => {
  const router = useRouter();
  const [pageUsername, setPageUsername] = useState<string>();
  const { authState, authDispatch } = useAuthContext();
  const user = authState.user;

  useEffect(() => {
    const routerQueryUsername = router.query.profile;
    console.log(routerQueryUsername);
    if (typeof routerQueryUsername === "string") {
      setPageUsername(routerQueryUsername);
      console.log(pageUsername);
    }
  }, [pageUsername, router.isReady, router.query.profile]);

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
          <SignOut />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default ProfilePage;
