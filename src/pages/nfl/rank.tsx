import MainPage from "~/components/Page/MainPage";
import { NFLRankContextProvider } from "~/context/NFLrankContext";
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
      <NFLRankContextProvider>
        <NFLRanker />
      </NFLRankContextProvider>
    </MainPage>
  );
};

export default Rank;
