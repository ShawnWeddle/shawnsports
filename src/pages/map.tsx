import MainPage from "~/components/Page/MainPage";
import { MapContextProvider } from "~/context/MapContext";
import FullMap from "~/components/map/FullMap";

const Home = () => {
  return (
    <MainPage
      title="Sports Mega World"
      description="Home SportsMegaWorld"
      favicon="/homefavicon.ico"
      pageMode="Home"
      underPageMode="Home_Map"
    >
      <MapContextProvider sport="All">
        <FullMap />
      </MapContextProvider>
    </MainPage>
  );
};

export default Home;
