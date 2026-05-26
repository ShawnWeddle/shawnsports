import { useNBAMapContext } from "~/hooks/useNBAmap";
import { cn } from "~/lib/utils";
import { Card } from "~/components/ui/card";
import { Field } from "../ui/field";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Map, MapControls } from "~/components/ui/map";
import { type TierType } from "~/data/NBA/NBAstadiums";
import { NBAmarkers } from "./NBAMarkers";
import NBAarc from "./NBAArc";

export const tierMapList: Set<TierType> = new Set(["NBA", "NGL"]);

const MapNBA: React.FC = () => {
  const { nbaMapState, nbaMapDispatch } = useNBAMapContext();
  const { activeTeam, activeTiers, mapMode } = nbaMapState;

  const checkList = [...tierMapList].map((tier, index) => {
    return (
      <Field
        key={index}
        orientation="horizontal"
        className={cn("rounded p-1", {
          "hover:bg-nba/50": tier === "NBA",
          "hover:bg-aaa/50": tier === "NGL",
        })}
      >
        <Checkbox
          id={tier}
          name={tier}
          checked={nbaMapState.activeTiers.has(tier)}
          onCheckedChange={() => {
            nbaMapDispatch({ type: "CHANGE_TIERS", payload: { tier: tier } });
          }}
        ></Checkbox>
        <Label htmlFor={tier}>{tier}</Label>
      </Field>
    );
  });

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">NBA Map</h1>
      <Card className="relative flex h-128 w-full p-0">
        <Map center={[-98.579, 39.828]} zoom={3}>
          <div className="absolute left-3 top-3 rounded bg-white p-1">
            {mapMode === "Tiers" && checkList}
            {mapMode === "Paths" && (
              <Button
                variant="destructive"
                size="sm"
                onClick={() => {
                  nbaMapDispatch({
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
          <NBAmarkers
            activeTiers={activeTiers}
            activeTeam={activeTeam}
            mapMode={mapMode}
            teamColors={false}
          />
          {mapMode === "Paths" && <NBAarc team={activeTeam} />}
        </Map>
      </Card>
    </div>
  );
};

export default MapNBA;
