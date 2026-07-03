import { useMapContext } from "~/hooks/useMap";
import { cn } from "~/lib/utils";
import {
  initialLeagueList,
  lengthenLeagueName,
  sportLeagueList,
  sportList,
} from "~/data/map/mapData";
import { Button } from "../ui/button";
import { Field } from "../ui/field";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import Icon from "./MapIcon";

const FullCheckList: React.FC = () => {
  const { mapState, mapDispatch } = useMapContext();
  const { sport: littleSport, activeLeagues } = mapState;

  const checkListAll = sportList.map((sport, index) => {
    const checks = sportLeagueList[sport].map((league, index) => {
      return (
        <Field
          key={league + index.toString()}
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
    });

    return (
      <AccordionItem key={sport + index.toString()} value={sport}>
        <AccordionTrigger className="text-md min-w-28 p-1 hover:no-underline">
          <div className="flex items-center gap-2">
            {sport}
            <Icon sport={sport} />
          </div>
        </AccordionTrigger>
        <AccordionContent>{checks}</AccordionContent>
      </AccordionItem>
    );
  });

  const checkList: JSX.Element[] = [
    ...initialLeagueList(littleSport).options,
  ].map((league, index) => {
    return (
      <Field key={index} orientation="horizontal" className={cn("rounded p-1")}>
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
  });

  switch (littleSport) {
    case "Football":
    case "Basketball":
    case "Baseball":
    case "Hockey":
    case "Soccer":
    case "Volleyball":
      return (
        <div className="absolute left-3 top-3 rounded bg-white p-1">
          {checkList}
        </div>
      );
    case "All":
      return (
        <div className="absolute left-3 top-3 rounded bg-white p-1">
          <Accordion type="multiple">{checkListAll}</Accordion>
          <div className="flex flex-col">
            <Button
              className="text-xs"
              variant="ghost"
              size="xs"
              onClick={() => {
                mapDispatch({
                  type: "ALL_LEAGUES",
                  payload: { league: "MLV" },
                });
              }}
              disabled={activeLeagues.size === 18}
            >
              Select All
            </Button>
            <Button
              className="text-xs"
              variant="ghost"
              size="xs"
              onClick={() => {
                mapDispatch({ type: "NO_LEAGUES", payload: { league: "MLV" } });
              }}
              disabled={activeLeagues.size === 0}
            >
              Deselect All
            </Button>
          </div>
        </div>
      );
  }
};

export default FullCheckList;
