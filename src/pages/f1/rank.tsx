import MainPage from "~/components/Page/MainPage";
import { RankContextProvider } from "~/context/RankContext";
import Ranker from "~/components/rank/Ranker";

const Rank = () => {
  return (
    <MainPage
      title="Formula One - Sports Mega World"
      description="Formula One SportsMegaWorld"
      favicon="/f1favicon.ico"
      pageMode="F1"
      underPageMode="F1_Rank"
    >
      <RankContextProvider sport="F1">
        <Ranker sport="F1" />
      </RankContextProvider>
    </MainPage>
  );
};

export default Rank;
