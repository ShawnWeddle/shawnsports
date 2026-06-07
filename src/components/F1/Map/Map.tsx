import { Map, MapControls } from "~/components/ui/map";
import F1raceArcs from "./F1RaceArcs";

const MyMap: React.FC = () => {
  return (
    <div className="h-96 w-full">
      <Map center={[-80.238, 25.959]} zoom={2} projection={{ type: "globe" }}>
        <MapControls position="top-right" showZoom showLocate showFullscreen />
        <F1raceArcs />
      </Map>
    </div>
  );
};

export default MyMap;
