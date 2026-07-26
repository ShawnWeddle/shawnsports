import { useMapContext } from "~/hooks/useF1MapContext";
import {
  MapMarker,
  MarkerContent,
  MarkerLabel,
  MarkerPopup,
} from "~/components/ui/map";
import { ReactCountryFlag } from "react-country-flag";
import {
  raceCoordinates,
  raceCountryCodes,
  raceLocations2026,
} from "~/data/F1/2026/F1data";
import {
  FormulaOneRaceResults,
  type F1RaceType,
} from "~/data/F1/2026/raceData";

const F1RaceMarkers = () => {
  const { mapDispatch, mapState } = useMapContext();

  return raceLocations2026.map((location, index) => {
    if (raceCoordinates[location]) {
      const { coordinates } = raceCoordinates[location];
      const activeGrandPrix = FormulaOneRaceResults.find((race) => {
        return race.location === location && !race.sprint;
      });
      const activeSprintRace = FormulaOneRaceResults.find((race) => {
        return race.location === location && race.sprint;
      });
      return (
        <MapMarker
          key={index}
          latitude={coordinates.latitude}
          longitude={coordinates.longitude}
        >
          <MarkerContent>
            <button
              onClick={() => {
                mapDispatch({
                  type: "SET_ACTIVE_RACE",
                  payload: activeGrandPrix
                    ? {
                        activeRaces: {
                          grandPrix: activeGrandPrix,
                          sprintRace: activeSprintRace,
                        },
                      }
                    : { activeRaces: undefined },
                });
              }}
            >
              <ReactCountryFlag
                style={{
                  width: "2em",
                  height: "2em",
                }}
                countryCode={raceCountryCodes[location]}
                svg
              />
            </button>
            <MarkerLabel position="bottom" className="rounded bg-white/20 px-1">
              {location}
            </MarkerLabel>
          </MarkerContent>
        </MapMarker>
      );
    }
  });
};

export default F1RaceMarkers;

/**
 *
 *
 */
