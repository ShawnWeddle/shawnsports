import MainPage from "~/components/Page/MainPage";
import { MapContextProvider } from "~/context/MapContext";
import FullMap from "~/components/map/Map";

const Map = () => {
  return (
    <MainPage
      title="MLS - Sports Mega World"
      description="MLS SportsMegaWorld"
      favicon="/mlsfavicon.ico"
      pageMode="MLS"
      underPageMode="MLS_Map"
    >
      <MapContextProvider sport="Soccer">
        <FullMap />
      </MapContextProvider>
    </MainPage>
  );
};

export default Map;
