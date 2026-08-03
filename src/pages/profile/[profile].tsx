import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "~/hooks/useAuthContext";
import MainPage from "~/components/Page/MainPage";
import NoteFromDev from "~/components/Home/NoteFromDev";
import UserProfile from "~/components/profile/TeamInputs";
import MainProfile from "~/components/profile/MainProfile";

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
      <MainProfile name={pageUsername ?? ""} />
    </MainPage>
  );
};

export default ProfilePage;
