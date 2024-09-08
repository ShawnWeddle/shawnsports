import MainPage from "~/components/Page/MainPage";
import { RankContextProvider } from "~/context/RankContext";
import WNBARanker from "~/components/WNBA/WNBARanker";

const Rank = () => {
  return (
    <MainPage
      title="WNBA - Sports Mega World"
      description="WNBA SportsMegaWorld"
      favicon="/nbafavicon.ico"
      pageMode="WNBA"
      underPageMode="WNBA_Rank"
    >
      <RankContextProvider sport="WNBA">
        <WNBARanker />
      </RankContextProvider>
    </MainPage>
  );
};

export default Rank;
