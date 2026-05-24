import MainPage from "~/components/Page/MainPage";
import { MLBMapContextProvider } from "~/context/MLBmapContext";
import MapMLB from "~/components/map/MLBmap";

const Map = () => {
  return (
    <MainPage
      title="MLB - Sports Mega World"
      description="MLB SportsMegaWorld"
      favicon="/mlbfavicon.ico"
      pageMode="MLB"
      underPageMode="MLB_Map"
    >
      <MLBMapContextProvider>
        <MapMLB />
      </MLBMapContextProvider>
    </MainPage>
  );
};

export default Map;
