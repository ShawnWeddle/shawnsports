import { SportType } from "~/data/SiteData";
import { Map, MapControls } from "~/components/ui/map";
import { Card } from "~/components/ui/card";
import { NFLmarkers } from "./NFLmarkers";
import { NBAmarkers } from "./NBAmarkers";
import { WNBAmarkers } from "./WNBAmarkers";
import { NHLmarkers } from "./NHLmarkers";
import { MLBmarkers } from "./MLBmarkers";
import { MLSmarkers } from "./MLSmarkers";

type MapProps = {
  activeSports: SportType[];
};

export const MyMap: React.FC<MapProps> = (props: MapProps) => {
  const { activeSports } = props;
  return (
    <Map center={[-98.579, 39.828]} zoom={3}>
      <MapControls
        position="top-right"
        showZoom
        showCompass
        showLocate
        showFullscreen
      />
      <MLBmarkers teamColorsOn={false} />
      <NBAmarkers teamColorsOn={false} />
      {activeSports.includes("NFL") && <NFLmarkers teamColorsOn={false} />}
      {/* <MLSmarkers teamColorsOn={false} /> */}
      {/* <NHLmarkers teamColorsOn={false} /> */}
      {/* <WNBAmarkers teamColorsOn={false} /> */}
    </Map>
  );
};
