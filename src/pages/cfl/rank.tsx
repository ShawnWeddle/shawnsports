import MainPage from "~/components/Page/MainPage";
import { RankContextProvider } from "~/context/RankContext";
import Ranker from "~/components/rank/Ranker";

const Rank = () => {
  return (
    <MainPage
      title="CFL - Sports Mega World"
      description="CFL SportsMegaWorld"
      favicon="/nflfavicon.ico"
      pageMode="CFL"
      underPageMode="CFL_Rank"
    >
      <RankContextProvider sport="CFL">
        <Ranker sport="CFL" />
      </RankContextProvider>
    </MainPage>
  );
};

export default Rank;
