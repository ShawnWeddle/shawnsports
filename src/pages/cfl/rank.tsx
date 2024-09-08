import MainPage from "~/components/Page/MainPage";
import { RankContextProvider } from "~/context/RankContext";
import CFLRanker from "~/components/CFL/CFLRanker";

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
        <CFLRanker />
      </RankContextProvider>
    </MainPage>
  );
};

export default Rank;
