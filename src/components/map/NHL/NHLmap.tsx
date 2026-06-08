import { useNHLMapContext } from "~/hooks/useNHLmap";
import { cn } from "~/lib/utils";
import { Card } from "~/components/ui/card";
import { Field } from "~/components/ui/field";
import { Label } from "~/components/ui/label";
import { Checkbox } from "~/components/ui/checkbox";
import { Button } from "~/components/ui/button";
import { Map, MapControls } from "~/components/ui/map";
import { leagueMapList } from "~/data/NHL/NHLdata";
import { NHLmarkers } from "./NHLMarkers";
import { PWHLMarkers } from "./PWHLMarkers";
import NHLarc from "./NHLArc";

const MapNHL: React.FC = () => {
  const { nhlMapState, nhlMapDispatch } = useNHLMapContext();
  const { activeTeam, activeLeagues, mapMode } = nhlMapState;

  const checkList = [...leagueMapList].map((league, index) => {
    return (
      <Field
        key={index}
        orientation="horizontal"
        className={cn("rounded p-1", {
          "hover:bg-nhl/50": league === "NHL",
          "hover:bg-aaa/50": league === "AHL",
          "hover:bg-echl/50": league === "ECHL",
          "hover:bg-cfl/50": league === "PWHL",
        })}
      >
        <Checkbox
          id={league}
          name={league}
          checked={nhlMapState.activeLeagues.has(league)}
          onCheckedChange={() => {
            nhlMapDispatch({
              type: "CHANGE_LEAGUES",
              payload: { league: league },
            });
          }}
        ></Checkbox>
        <Label htmlFor={league}>{league}</Label>
      </Field>
    );
  });

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">NHL Map</h1>
      <Card className="relative flex h-128 w-full p-0">
        <Map center={[-98.579, 39.828]} zoom={3}>
          <div className="absolute left-3 top-3 rounded bg-white p-1">
            {mapMode === "Leagues" && checkList}
            {mapMode === "Paths" && (
              <Button
                variant="destructive"
                size="sm"
                onClick={() => {
                  nhlMapDispatch({
                    type: "CHANGE_MAP_MODE",
                    payload: { mode: "Leagues" },
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
          <NHLmarkers
            activeLeagues={activeLeagues}
            activeTeam={activeTeam}
            mapMode={mapMode}
            teamColors={false}
          />
          {mapMode === "Paths" && <NHLarc team={activeTeam} />}
        </Map>
      </Card>
    </div>
  );
};

export default MapNHL;
