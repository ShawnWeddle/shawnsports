import MainPage from "~/components/Page/MainPage";
import SuperLoserList from "~/components/NFL/SuperLoserList";
import Canvas from "~/components/NFL/SuperLoserChart";

const SuperLosers = () => {
  return (
    <MainPage
      title="NFL - Sports Mega World"
      description="NFL SportsMegaWorld"
      favicon="/nflfavicon.ico"
      pageMode="NFL"
      underPageMode="NFL_Super_Losers"
    >
      <Canvas />
      <SuperLoserList />
    </MainPage>
  );
};

export default SuperLosers;
