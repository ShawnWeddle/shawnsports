import { Card } from "~/components/ui/card";
import { Map, MapControls } from "~/components/ui/map";
import { useMapContext } from "~/hooks/useMap";
import CityMarkers from "./CityMarkers";

const FullMap: React.FC = () => {
  const { mapState } = useMapContext();
  const { sport, activeTeam } = mapState;
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
        {sport} Map
      </h1>
      <Card className="relative flex h-128 w-full p-0">
        <Map center={[-98.579, 39.828]} zoom={3}>
          <MapControls
            position="top-right"
            showZoom
            showLocate
            showFullscreen
          />
          {CityMarkers}
        </Map>
      </Card>
    </div>
  );
};

export default FullMap;
