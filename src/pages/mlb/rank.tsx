import MainPage from "~/components/Page/MainPage";
import { MLBRankContextProvider } from "~/context/MLBrankContext";
import MLBRanker from "~/components/MLB/MLBRanker";

const Rank = () => {
  return (
    <MainPage
      title="MLB - Sports Mega World"
      description="MLB SportsMegaWorld"
      favicon="/mlbfavicon.ico"
      pageMode="MLB"
      underPageMode="MLB_Rank"
    >
      <MLBRankContextProvider>
        <MLBRanker />
      </MLBRankContextProvider>
    </MainPage>
  );
};

export default Rank;
