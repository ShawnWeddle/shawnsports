import MainPage from "~/components/Page/MainPage";
// import { RankContextProvider } from "~/context/RankContext";
// import Ranker from "~/components/rank/Ranker";
import RankF1 from "~/components/F1/Rank/rank";

const Rank = () => {
  return (
    <MainPage
      title="Formula One - Sports Mega World"
      description="Formula One SportsMegaWorld"
      favicon="/f1favicon.ico"
      pageMode="F1"
      underPageMode="F1_Rank"
    >
      <RankF1 />
    </MainPage>
  );
};

export default Rank;
