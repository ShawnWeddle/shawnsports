import MainPage from "~/components/Page/MainPage";
import { NBARankContextProvider } from "~/context/NBArankContext";
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
      <NBARankContextProvider>
        <NBARanker />
      </NBARankContextProvider>
    </MainPage>
  );
};

export default Rank;
