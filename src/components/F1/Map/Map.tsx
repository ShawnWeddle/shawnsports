import { useState } from "react";
import { useMapContext } from "~/hooks/useF1MapContext";
import { Button } from "~/components/ui/button";
import { Map, MapControls } from "~/components/ui/map";
import F1raceArcs from "./F1RaceArcs";
import F1RaceMarkers from "./F1RaceMarkers";
import {
  FormulaOneRaceResults,
  type F1RaceType,
} from "~/data/F1/2026/raceData";
import SingleRaceTable from "../Tables/DialogTable";
import { Dialog } from "~/components/ui/dialog";
import DialogModalContent from "~/components/Page/DialogModal";
import { TableHead } from "~/components/ui/table";
import { raceCoordinates } from "~/data/F1/2026/F1data";

const FormulaOneMap: React.FC = () => {
  const [showPath, setShowPath] = useState<boolean>(true);
  const { mapDispatch, mapState } = useMapContext();
  const { activeRaces, dialogOpen } = mapState;

  let raceDate = "";
  let sprintDate = "";

  if (activeRaces?.grandPrix) {
    const activeCircuitInfo = raceCoordinates[activeRaces.grandPrix.location];
    if (activeCircuitInfo) {
      raceDate = activeCircuitInfo.raceDate;
    }
  }

  if (activeRaces?.sprintRace) {
    const activeCircuitInfo = raceCoordinates[activeRaces.sprintRace.location];
    if (activeCircuitInfo && activeCircuitInfo.sprintDate) {
      sprintDate = activeCircuitInfo.sprintDate;
    }
  }

  const modalNamer = (inputRace: F1RaceType | undefined) => {
    if (inputRace) {
      const { location, sprint } = inputRace;
      const final = sprint ? " Sprint Race" : " Grand Prix";
      return "2026 " + location + final;
    } else {
      return "";
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
        2026 F1 Season Map
      </h1>
      <Dialog
        open={dialogOpen}
        onOpenChange={(isOpen) => {
          if (isOpen === true) return;
          mapDispatch({
            type: "CLOSE_DIALOG",
            payload: { activeRaces: undefined },
          });
        }}
      >
        <DialogModalContent
          title={modalNamer(activeRaces?.grandPrix)}
          description={raceDate + ", 2026"}
        >
          <div>
            {activeRaces?.grandPrix.completed ? (
              <SingleRaceTable race={activeRaces.grandPrix} />
            ) : (
              <div>This race has not yet taken place.</div>
            )}
            {activeRaces?.sprintRace && activeRaces.sprintRace.completed && (
              <>
                <div className="flex w-full justify-center">
                  <Button className="mt-4" variant="default" disabled>
                    Sprint Race - {sprintDate + ", 2026"}
                  </Button>
                </div>
                <SingleRaceTable race={activeRaces.sprintRace} />
              </>
            )}
          </div>
        </DialogModalContent>
      </Dialog>
      <div className="h-96 w-full">
        <Map center={[0, 0]} zoom={0.8}>
          <MapControls
            position="top-right"
            showZoom
            showLocate
            showFullscreen
          />
          <div className="absolute left-3 top-3 rounded bg-white p-1">
            {!showPath && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setShowPath(true);
                }}
              >
                Show Path
              </Button>
            )}
            {showPath && (
              <Button
                size="sm"
                variant="destructive"
                onClick={() => {
                  setShowPath(false);
                }}
              >
                Hide Path
              </Button>
            )}
          </div>
          {showPath && <F1raceArcs />}
          <F1RaceMarkers />
        </Map>
      </div>
    </div>
  );
};

export default FormulaOneMap;
