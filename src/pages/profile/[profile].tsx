import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "~/hooks/useAuthContext";
import MainPage from "~/components/Page/MainPage";
import NoteFromDev from "~/components/Home/NoteFromDev";
import UserProfile from "~/components/profile/TeamInputs";

const ProfilePage = () => {
  const router = useRouter();
  const [pageUsername, setPageUsername] = useState<string>();
  const { authState, authDispatch } = useAuthContext();
  const user = authState.user;

  useEffect(() => {
    const routerQueryUsername = router.query.profile;
    if (typeof routerQueryUsername === "string") {
      setPageUsername(routerQueryUsername);
    }
  }, [pageUsername, router.isReady, router.query.profile]);

  return (
    <MainPage
      title="Sports Mega World"
      description="Profile SportsMegaWorld"
      favicon="/homefavicon.ico"
      pageMode="Home"
      underPageMode="Home"
    >
      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
        {pageUsername}
      </h1>
    </MainPage>
  );
};

export default ProfilePage;
