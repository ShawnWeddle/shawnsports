import MainPage from "~/components/Page/MainPage";
import { RankContextProvider } from "~/context/RankContext";
import Ranker from "~/components/rank/Ranker";

const Rank = () => {
  return (
    <MainPage
      title="MLB - Sports Mega World"
      description="MLB SportsMegaWorld"
      favicon="/mlbfavicon.ico"
      pageMode="MLB"
      underPageMode="MLB_Rank"
    >
      <RankContextProvider sport="MLB">
        <Ranker sport="MLB" />
      </RankContextProvider>
    </MainPage>
  );
};

export default Rank;
