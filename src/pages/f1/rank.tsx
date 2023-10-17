import MainPage from "~/components/Page/MainPage";
import { F1RankContextProvider } from "~/context/F1rankContext";
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
      <F1RankContextProvider>
        <F1Ranker />
      </F1RankContextProvider>
    </MainPage>
  );
};

export default Rank;
