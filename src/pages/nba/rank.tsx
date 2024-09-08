import MainPage from "~/components/Page/MainPage";
import { RankContextProvider } from "~/context/RankContext";
import NBARanker from "~/components/NBA/NBARanker";

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
        <NBARanker />
      </RankContextProvider>
    </MainPage>
  );
};

export default Rank;
