import MainPage from "~/components/Page/MainPage";
import SuperLoserList from "~/components/NFL/SuperLoserList";

const SuperLosers = () => {
  return (
    <MainPage
      title="NFL - Sports Mega World"
      description="NFL SportsMegaWorld"
      favicon="/nflfavicon.ico"
      pageMode="NFL"
      underPageMode="NFL_Super_Losers"
    >
      <SuperLoserList />
    </MainPage>
  );
};

export default SuperLosers;
