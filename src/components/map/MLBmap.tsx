import { useState } from "react";
import { Card } from "~/components/ui/card";
import { Checkbox } from "../ui/checkbox";
import { Map, MapControls } from "~/components/ui/map";
import { MiLBmarkers } from "./MiLBMarkers";
import { type TierType } from "~/data/MLB/BP2";

export const tierMapList: Set<TierType> = new Set([
  "MLB",
  "AAA",
  "AA",
  "High-A",
  "Single-A",
]);

type MapProps = {
  activeTiers: Set<TierType>;
};

const MapWrapper: React.FC = () => {
  const [activeTiers, setActiveTiers] = useState<Set<TierType>>(tierMapList);

  const setActiveTiersHandler = (tier: TierType) => {
    const newTiers = new Set<TierType>([...activeTiers]);
    if (activeTiers.has(tier)) {
      newTiers.delete(tier);
    } else {
      newTiers.add(tier);
    }
    setActiveTiers(newTiers);
  };

  const checkList = [...tierMapList].map((tier, index) => {
    return (
      <div className="flex h-max items-center p-1" key={index}>
        <Checkbox
          checked={activeTiers.has(tier)}
          onCheckedChange={() => {
            setActiveTiersHandler(tier);
          }}
        ></Checkbox>
        <span className="pl-2 text-lg"> {tier} </span>
      </div>
    );
  });

  return (
    <Card className="flex h-128 w-full overflow-hidden p-0">
      <div className="h-full p-1">{checkList}</div>
      <MLBMap activeTiers={activeTiers} />
    </Card>
  );
};

export const MLBMap: React.FC<MapProps> = (props: MapProps) => {
  const { activeTiers } = props;
  return (
    <Map center={[-98.579, 39.828]} zoom={3}>
      <MapControls position="top-right" showZoom showLocate showFullscreen />
      <MiLBmarkers activeTiers={activeTiers} />
    </Map>
  );
};

export default MapWrapper;
