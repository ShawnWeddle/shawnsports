import MainPage from "~/components/Page/MainPage";
import FormulaOneMap from "~/components/F1/Map/Map";
import { MapContextProvider } from "~/context/F1MapContext";

const Map = () => {
  return (
    <MainPage
      title="Formula One - Sports Mega World"
      description="Formula One SportsMegaWorld"
      favicon="/f1favicon.ico"
      pageMode="F1"
      underPageMode="F1_Map"
    >
      <MapContextProvider>
        <FormulaOneMap />
      </MapContextProvider>
    </MainPage>
  );
};

export default Map;
