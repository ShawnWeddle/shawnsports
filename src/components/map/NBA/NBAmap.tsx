import { useNBAMapContext } from "~/hooks/useNBAmap";
import { cn } from "~/lib/utils";
import { Card } from "~/components/ui/card";
import { Field } from "../../ui/field";
import { Label } from "../../ui/label";
import { Checkbox } from "../../ui/checkbox";
import { Button } from "../../ui/button";
import { Map, MapControls } from "~/components/ui/map";
import { tierMapList } from "~/data/NBA/NBAdata";
import { NBAmarkers } from "~/components/map/NBA/NBAMarkers";
import NBAarc from "./NBAArc";
import { WNBAmarkers } from "./WNBAMarkers";

const MapNBA: React.FC = () => {
  const { nbaMapState, nbaMapDispatch } = useNBAMapContext();
  const { activeTeam, activeTiers, mapMode } = nbaMapState;

  const nbaCheckList = [...tierMapList].map((tier, index) => {
    return (
      <Field
        key={index}
        orientation="horizontal"
        className={cn("rounded p-1", {
          "hover:bg-nba/50": tier === "NBA",
          "hover:bg-aaa/50": tier === "NGL",
          "hover:bg-wnba/50": tier === "WNBA",
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
            {mapMode === "Tiers" && nbaCheckList}
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
          <WNBAmarkers
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
