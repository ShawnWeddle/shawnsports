import MainPage from "~/components/Page/MainPage";
import { NFLMapContextProvider } from "~/context/NFLmapContext";
import MapNFL from "~/components/map/NFL/NFLmap";

const Map = () => {
  return (
    <MainPage
      title="NFL - Sports Mega World"
      description="NFL SportsMegaWorld"
      favicon="/nflfavicon.ico"
      pageMode="NFL"
      underPageMode="NFL_Map"
    >
      <NFLMapContextProvider>
        <MapNFL />
      </NFLMapContextProvider>
    </MainPage>
  );
};

export default Map;
