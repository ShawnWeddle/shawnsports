import MainPage from "~/components/Page/MainPage";
import { NHLRankContextProvider } from "~/context/NHLrankContext";
import NHLRanker from "~/components/NHL/NHLRanker";

const Rank = () => {
  return (
    <MainPage
      title="NHL - Sports Mega World"
      description="NHL SportsMegaWorld"
      favicon="/nhlfavicon.ico"
      pageMode="NHL"
      underPageMode="NHL_Rank"
    >
      <NHLRankContextProvider>
        <NHLRanker />
      </NHLRankContextProvider>
    </MainPage>
  );
};

export default Rank;
