import MainPage from "~/components/Page/MainPage";
import { RankContextProvider } from "~/context/RankContext";
import Ranker from "~/components/rank/Ranker";

const Rank = () => {
  return (
    <MainPage
      title="MLS - Sports Mega World"
      description="MLS SportsMegaWorld"
      favicon="/mlbfavicon.ico"
      pageMode="MLS"
      underPageMode="MLS_Rank"
    >
      <RankContextProvider sport="MLS">
        <Ranker sport="MLS" />
      </RankContextProvider>
    </MainPage>
  );
};

export default Rank;
