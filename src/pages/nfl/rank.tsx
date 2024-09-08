import MainPage from "~/components/Page/MainPage";
import { RankContextProvider } from "~/context/RankContext";
import NFLRanker from "~/components/NFL/NFLRanker";

const Rank = () => {
  return (
    <MainPage
      title="NFL - Sports Mega World"
      description="NFL SportsMegaWorld"
      favicon="/nflfavicon.ico"
      pageMode="NFL"
      underPageMode="NFL_Rank"
    >
      <RankContextProvider sport="NFL">
        <NFLRanker />
      </RankContextProvider>
    </MainPage>
  );
};

export default Rank;
