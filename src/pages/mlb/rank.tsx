import MainPage from "~/components/Page/MainPage";
import { RankContextProvider } from "~/context/RankContext";
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
      <RankContextProvider sport="MLB">
        <MLBRanker />
      </RankContextProvider>
    </MainPage>
  );
};

export default Rank;
