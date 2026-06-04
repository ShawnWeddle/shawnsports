import { type SportType } from "~/data/SiteData";
import { Map, MapControls } from "~/components/ui/map";
import { MapMarkers } from "./MapMarkers";
// import CityMarkers from "./CityMarkers";

type MapProps = {
  activeSports: SportType[];
  showTeamColors: boolean;
};

export const MyMap: React.FC<MapProps> = (props: MapProps) => {
  const { activeSports, showTeamColors } = props;
  return (
    <Map center={[-100, 40]} zoom={4}>
      <MapControls position="top-right" showZoom showLocate showFullscreen />
      {activeSports.map((sport, index) => {
        return (
          <MapMarkers key={index} teamColors={showTeamColors} sport={sport} />
        );
      })}
    </Map>
  );
};

/*
{CityMarkers}
*/
