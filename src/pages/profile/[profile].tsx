import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainPage from "~/components/Page/MainPage";
import NoteFromDev from "~/components/Home/NoteFromDev";
import UserProfile from "~/components/profile/TeamInputs";
import MainProfile from "~/components/profile/MainProfile";

const ProfilePage = () => {
  const router = useRouter();
  const [pageUsername, setPageUsername] = useState<string>();

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
      {/* <MainProfile name={pageUsername ?? ""} /> */}
      <NoteFromDev />
    </MainPage>
  );
};

export default ProfilePage;
