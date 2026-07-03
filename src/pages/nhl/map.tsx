import MainPage from "~/components/Page/MainPage";
import { MapContextProvider } from "~/context/MapContext";
import FullMap from "~/components/map/Map";
const Map = () => {
  return (
    <MainPage
      title="NHL - Sports Mega World"
      description="NHL SportsMegaWorld"
      favicon="/nhlfavicon.ico"
      pageMode="NHL"
      underPageMode="NHL_Map"
    >
      <MapContextProvider sport="Hockey">
        <FullMap />
      </MapContextProvider>
    </MainPage>
  );
};

export default Map;
