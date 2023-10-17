import MainPage from "~/components/Page/MainPage";
import SuperBowlList from "~/components/NFL/SuperBowlList";

const SuperBowls = () => {
  return (
    <MainPage
      title="NFL - Sports Mega World"
      description="NFL SportsMegaWorld"
      favicon="/nflfavicon.ico"
      pageMode="NFL"
      underPageMode="NFL_Super_Bowls"
    >
      <SuperBowlList />
    </MainPage>
  );
};

export default SuperBowls;
