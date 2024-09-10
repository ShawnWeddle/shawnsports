import MainPage from "~/components/Page/MainPage";
import { RankContextProvider } from "~/context/RankContext";
import Ranker from "~/components/rank/Ranker";

const Rank = () => {
  return (
    <MainPage
      title="NBA - Sports Mega World"
      description="NBA SportsMegaWorld"
      favicon="/nbafavicon.ico"
      pageMode="NBA"
      underPageMode="NBA_Rank"
    >
      <RankContextProvider sport="NBA">
        <Ranker sport="NBA" />
      </RankContextProvider>
    </MainPage>
  );
};

export default Rank;
