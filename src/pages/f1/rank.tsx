import MainPage from "~/components/Page/MainPage";
import { RankContextProvider } from "~/context/RankContext";
import F1Ranker from "~/components/F1/Ranker/F1Ranker";

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
        <F1Ranker />
      </RankContextProvider>
    </MainPage>
  );
};

export default Rank;
