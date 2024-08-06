import MainPage from "~/components/Page/MainPage";
import { CFLRankContextProvider } from "~/context/CFLrankContext";
import CFLRanker from "~/components/CFL/CFLRanker";

const Rank = () => {
  return (
    <MainPage
      title="CFL - Sports Mega World"
      description="CFL SportsMegaWorld"
      favicon="/cflfavicon.ico"
      pageMode="CFL"
      underPageMode="CFL_Rank"
    >
      <CFLRankContextProvider>
        <CFLRanker />
      </CFLRankContextProvider>
    </MainPage>
  );
};

export default Rank;
