import MainPage from "~/components/Page/MainPage";
import { RankContextProvider } from "~/context/RankContext";
import Ranker from "~/components/rank/Ranker";

const Rank = () => {
  return (
    <MainPage
      title="WNBA - Sports Mega World"
      description="WNBA SportsMegaWorld"
      favicon="/nbafavicon.ico"
      pageMode="WNBA"
      underPageMode="WNBA_Rank"
    >
      <RankContextProvider sport="WNBA">
        <Ranker sport="WNBA" />
      </RankContextProvider>
    </MainPage>
  );
};

export default Rank;
