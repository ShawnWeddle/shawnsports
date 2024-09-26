import { useState } from "react";
import { cn } from "~/lib/utils";
import { locationHeaders } from "~/data/F1/2024/convert";
import {
  FormulaOneRaceResults,
  type F1RaceType,
} from "~/data/F1/2024/raceData";
import { type RaceModeProps } from "~/data/F1/2024/F1data24";
import { ReactCountryFlag } from "react-country-flag";
import { raceCountryCodes } from "~/data/F1/2024/F1data24";
import { Dialog } from "~/components/ui/dialog";
import DialogModalContent from "~/components/Page/DialogModal";
import { TableHead } from "~/components/ui/table";
import SingleRaceTable from "./DialogTable";

const { headers } = locationHeaders(FormulaOneRaceResults);

const F1TableHeaders: React.FC<RaceModeProps> = (props: RaceModeProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeRace, setActiveRace] = useState<F1RaceType | null>(null);

  const tableHeaders = headers.map((location, index) => {
    const { locationName, sprint } = location;
    const { raceMode } = props;

    return (
      <TableHead
        key={index}
        className={cn(
          "px-0 pt-16",
          { hidden: sprint && raceMode === "Grands Prix Only" },
          { hidden: !sprint && raceMode === "Sprint Races Only" }
        )}
      >
        <p
          className={cn(
            "w-0 -rotate-[30deg] transform whitespace-nowrap px-4 font-semibold text-black"
          )}
        >
          {sprint ? locationName + " Sprint" : locationName}
        </p>
        <div
          className={cn("w-full pb-0.5", {
            "bg-gray-200": !sprint,
            "bg-teal-200": sprint,
          })}
        >
          <button
            onClick={() => {
              setDialogOpen(true);
              setActiveRace(
                FormulaOneRaceResults.find(
                  (race) =>
                    race.location === locationName && race.sprint === sprint
                ) ?? null
              );
            }}
          >
            <ReactCountryFlag
              style={{
                width: "1.5em",
                height: "1.5em",
              }}
              countryCode={raceCountryCodes[locationName]}
              svg
            />
          </button>
        </div>
      </TableHead>
    );
  });

  const modalNamer = (inputRace: F1RaceType | null) => {
    if (inputRace) {
      const { location, sprint } = inputRace;
      const final = sprint ? " Sprint Race" : " Grand Prix";
      return "2024 " + location + final;
    } else {
      return "";
    }
  };

  return (
    <>
      <TableHead>
        <Dialog
          open={dialogOpen}
          onOpenChange={(isOpen) => {
            if (isOpen === true) return;
            setDialogOpen(false);
          }}
        >
          <DialogModalContent title={modalNamer(activeRace)} description={""}>
            {activeRace?.completed ? (
              <SingleRaceTable race={activeRace} />
            ) : (
              <div>This race has not yet taken place.</div>
            )}
          </DialogModalContent>
        </Dialog>
      </TableHead>
      {tableHeaders}
      <TableHead className="w-16"></TableHead>
    </>
  );
};

export default F1TableHeaders;
