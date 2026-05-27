import MainPage from "~/components/Page/MainPage";
import { NBAMapContextProvider } from "~/context/NBAmapContext";
import MapNBA from "~/components/map/NBA/NBAmap";

const Map = () => {
  return (
    <MainPage
      title="NBA - Sports Mega World"
      description="NBA SportsMegaWorld"
      favicon="/nbafavicon.ico"
      pageMode="NBA"
      underPageMode="NBA_Map"
    >
      <NBAMapContextProvider>
        <MapNBA />
      </NBAMapContextProvider>
    </MainPage>
  );
};

export default Map;
