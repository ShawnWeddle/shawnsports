import MainPage from "~/components/Page/MainPage";
import { MapContextProvider } from "~/context/MapContext";
import FullMap from "~/components/map/FullMap";

const Map = () => {
  return (
    <MainPage
      title="NBA - Sports Mega World"
      description="NBA SportsMegaWorld"
      favicon="/nbafavicon.ico"
      pageMode="NBA"
      underPageMode="NBA_Map"
    >
      <MapContextProvider sport="Basketball">
        <FullMap />
      </MapContextProvider>
    </MainPage>
  );
};

export default Map;
