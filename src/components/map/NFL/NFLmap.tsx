import { useNFLMapContext } from "~/hooks/useNFLmap";
import { leagueList } from "~/context/NFLmapContext";
import { cn } from "~/lib/utils";
import { Card } from "~/components/ui/card";
import { Field } from "../../ui/field";
import { Label } from "../../ui/label";
import { Checkbox } from "../../ui/checkbox";
import { Map, MapControls } from "~/components/ui/map";

const MapNFL: React.FC = () => {
  const { nflMapState, nflMapDispatch } = useNFLMapContext();

  const nflCheckList = [...leagueList].map((league, index) => {
    return (
      <Field
        key={index}
        orientation="horizontal"
        className={cn("rounded p-1", {
          "hover:bg-nfl/50": league === "NFL",
          "hover:bg-cfl/50": league === "CFL",
          "hover:bg-black/50": league === "UFL",
          "hover:bg-home/50": league === "IFL",
        })}
      >
        <Checkbox
          id={league}
          name={league}
          checked={nflMapState.activeLeagues.has(league)}
          onCheckedChange={() => {
            nflMapDispatch({
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
      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">NFL Map</h1>
      <Card className="relative flex h-128 w-full p-0">
        <Map center={[-98.579, 39.828]} zoom={3}>
          <div className="absolute left-3 top-3 rounded bg-white p-1">
            {nflCheckList}
          </div>
          <MapControls
            position="top-right"
            showZoom
            showLocate
            showFullscreen
          />
        </Map>
      </Card>
    </div>
  );
};

export default MapNFL;
