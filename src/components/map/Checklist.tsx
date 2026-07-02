import { useMapContext } from "~/hooks/useMap";
import { cn } from "~/lib/utils";
import { initialLeagueList, lengthenLeagueName } from "~/data/map/mapData";
import { Field } from "../ui/field";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

const CheckList: React.FC = () => {
  const { mapState, mapDispatch } = useMapContext();
  const { sport } = mapState;
  const checkList: JSX.Element[] = [...initialLeagueList(sport)].map(
    (league, index) => {
      return (
        <Field
          key={index}
          orientation="horizontal"
          className={cn("rounded p-1")}
        >
          <Checkbox
            id={league}
            name={league}
            checked={mapState.activeLeagues.has(league)}
            onCheckedChange={() => {
              mapDispatch({
                type: "CHANGE_LEAGUES",
                payload: { league: league },
              });
            }}
          ></Checkbox>
          <Label htmlFor={league}>{lengthenLeagueName(league)}</Label>
        </Field>
      );
    }
  );
  return (
    <div className="absolute left-3 top-3 rounded bg-white p-1">
      {checkList}
    </div>
  );
};

export default CheckList;
