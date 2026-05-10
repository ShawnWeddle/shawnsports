import { Map, MapControls } from "~/components/ui/map";
import { Card } from "~/components/ui/card";
import { NFLmarkers } from "./NFLmarkers";
import { NBAmarkers } from "./NBAmarkers";
import { WNBAmarkers } from "./WNBAmarkers";
import { NHLmarkers } from "./NHLmarkers";
import { MLBmarkers } from "./MLBmarkers";
import { MLSmarkers } from "./MLSmarkers";

export function MyMap() {
  return (
    <Card className="h-96 w-full overflow-hidden p-0">
      <Map center={[-98.579, 39.828]} zoom={3}>
        <MapControls
          position="top-right"
          showZoom
          showCompass
          showLocate
          showFullscreen
        />
        {/* <MLSmarkers teamColorsOn={false} /> */}
        {/* <MLBmarkers teamColorsOn={false} /> */}
        {/* <NHLmarkers teamColorsOn={false} /> */}
        {/* <NFLmarkers teamColorsOn={false} /> */}
        <NBAmarkers teamColorsOn />
        <WNBAmarkers teamColorsOn />
      </Map>
    </Card>
  );
}
