import MainPage from "~/components/Page/MainPage";
import { RankContextProvider } from "~/context/RankContext";
import Ranker from "~/components/rank/Ranker";

const Rank = () => {
  return (
    <MainPage
      title="NHL - Sports Mega World"
      description="NHL SportsMegaWorld"
      favicon="/nhlfavicon.ico"
      pageMode="NHL"
      underPageMode="NHL_Rank"
    >
      <RankContextProvider sport="NHL">
        <Ranker sport="NHL" />
      </RankContextProvider>
    </MainPage>
  );
};

export default Rank;
