import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "~/hooks/useAuthContext";
import MainPage from "~/components/Page/MainPage";

import SignOut from "~/components/SignOut";

const ProfilePage = () => {
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
    <MainPage
      title="Sports Mega World"
      description="Profile SportsMegaWorld"
      favicon="/homefavicon.ico"
      pageMode="Home"
      underPageMode="Home"
    >
      <SignOut />
    </MainPage>
  );
};

export default ProfilePage;
