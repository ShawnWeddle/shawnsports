import MainPage from "~/components/Page/MainPage";
import { WNBARankContextProvider } from "~/context/WNBArankContext";
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
      <WNBARankContextProvider>
        <WNBARanker />
      </WNBARankContextProvider>
    </MainPage>
  );
};

export default Rank;
