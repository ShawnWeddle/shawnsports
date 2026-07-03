import MainPage from "~/components/Page/MainPage";
import { MapContextProvider } from "~/context/MapContext";
import FullMap from "~/components/map/Map";

const Map = () => {
  return (
    <MainPage
      title="MLB - Sports Mega World"
      description="MLB SportsMegaWorld"
      favicon="/mlbfavicon.ico"
      pageMode="MLB"
      underPageMode="MLB_Map"
    >
      <MapContextProvider sport="Baseball">
        <FullMap />
      </MapContextProvider>
    </MainPage>
  );
};

export default Map;
