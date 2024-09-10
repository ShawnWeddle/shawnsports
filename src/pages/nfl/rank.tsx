import MainPage from "~/components/Page/MainPage";
import { RankContextProvider } from "~/context/RankContext";
import Ranker from "~/components/rank/Ranker";

const Rank = () => {
  return (
    <MainPage
      title="NFL - Sports Mega World"
      description="NFL SportsMegaWorld"
      favicon="/nflfavicon.ico"
      pageMode="NFL"
      underPageMode="NFL_Rank"
    >
      <RankContextProvider sport="NFL">
        <Ranker sport="NFL" />
      </RankContextProvider>
    </MainPage>
  );
};

export default Rank;
