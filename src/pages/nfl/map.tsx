import MainPage from "~/components/Page/MainPage";
import { MapContextProvider } from "~/context/MapContext";
import FullMap from "~/components/map/Map";

const Map = () => {
  return (
    <MainPage
      title="NFL - Sports Mega World"
      description="NFL SportsMegaWorld"
      favicon="/nflfavicon.ico"
      pageMode="NFL"
      underPageMode="NFL_Map"
    >
      <MapContextProvider sport="Football">
        <FullMap />
      </MapContextProvider>
    </MainPage>
  );
};

export default Map;
