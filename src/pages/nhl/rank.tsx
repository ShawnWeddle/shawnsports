import MainPage from "~/components/Page/MainPage";
import { RankContextProvider } from "~/context/RankContext";
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
      <RankContextProvider sport="NHL">
        <NHLRanker />
      </RankContextProvider>
    </MainPage>
  );
};

export default Rank;
