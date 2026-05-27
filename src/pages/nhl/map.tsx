import MainPage from "~/components/Page/MainPage";
import { NHLMapContextProvider } from "~/context/NHLmapContext";
import MapNHL from "~/components/map/NHL/NHLmap";

const Map = () => {
  return (
    <MainPage
      title="NHL - Sports Mega World"
      description="NHL SportsMegaWorld"
      favicon="/nhlfavicon.ico"
      pageMode="NHL"
      underPageMode="NHL_Map"
    >
      <NHLMapContextProvider>
        <MapNHL />
      </NHLMapContextProvider>
    </MainPage>
  );
};

export default Map;
