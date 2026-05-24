import { useMLBMapContext } from "~/hooks/useMLBmap";
import { cn } from "~/lib/utils";
import { Card } from "~/components/ui/card";
import { Field } from "../ui/field";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Map, MapControls } from "~/components/ui/map";
import { MiLBmarkers } from "./MiLBMarkers";
import MiLBarc from "./MiLBArc";
import { type TierType } from "~/data/MLB/ballparks";
import {
  MLBdivisionData,
  type MLBTeamType,
  MLBteamData,
} from "~/data/MLB/MLBdata";
import { MLBstyleData } from "~/data/MLB/MLBstyleData";

export const tierMapList: Set<TierType> = new Set([
  "MLB",
  "AAA",
  "AA",
  "High-A",
  "Single-A",
]);

const MapMLB: React.FC = () => {
  const { mlbMapState, mlbMapDispatch } = useMLBMapContext();
  const { activeTeam, activeTiers, mapMode } = mlbMapState;

  const checkList = [...tierMapList].map((tier, index) => {
    return (
      <Field
        key={index}
        orientation="horizontal"
        className={cn("rounded p-1", {
          "hover:bg-mlb/50": tier === "MLB",
          "hover:bg-aaa/50": tier === "AAA",
          "hover:bg-aa/50": tier === "AA",
          "hover:bg-higha/50": tier === "High-A",
          "hover:bg-singlea/50": tier === "Single-A",
        })}
      >
        <Checkbox
          id={tier}
          name={tier}
          checked={mlbMapState.activeTiers.has(tier)}
          onCheckedChange={() => {
            mlbMapDispatch({ type: "CHANGE_TIERS", payload: { tier: tier } });
          }}
        ></Checkbox>
        <Label htmlFor={tier}>{tier}</Label>
      </Field>
    );
  });

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">MLB Map</h1>
      <Card className="relative flex h-128 w-full p-0">
        <Map center={[-98.579, 39.828]} zoom={3}>
          <div className="absolute left-3 top-3 rounded bg-white p-1">
            {mapMode === "Tiers" && checkList}
            {mapMode === "Paths" && (
              <Button
                variant="destructive"
                size="sm"
                onClick={() => {
                  mlbMapDispatch({
                    type: "CHANGE_MAP_MODE",
                    payload: { mode: "Tiers" },
                  });
                }}
              >
                Hide Path
              </Button>
            )}
          </div>
          <MapControls
            position="top-right"
            showZoom
            showLocate
            showFullscreen
          />
          <MiLBmarkers
            activeTiers={activeTiers}
            activeTeam={activeTeam}
            mapMode={mapMode}
            teamColors={false}
          />
          {mapMode === "Paths" && <MiLBarc team={activeTeam} />}
        </Map>
      </Card>
    </div>
  );
};

export default MapMLB;
