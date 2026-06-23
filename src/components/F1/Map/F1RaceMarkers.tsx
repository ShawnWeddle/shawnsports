import { MapMarker, MarkerContent, MarkerPopup } from "~/components/ui/map";
import { ReactCountryFlag } from "react-country-flag";
import {
  raceCoordinates,
  raceCountryCodes,
  raceLocations2026,
} from "~/data/F1/2026/F1data";

const F1RaceMarkers = () => {
  return raceLocations2026.map((location, index) => {
    const RC = raceCoordinates[location];
    if (RC) {
      const { coordinates } = RC;
      return (
        <MapMarker
          key={index}
          latitude={coordinates.latitude}
          longitude={coordinates.longitude}
        >
          <MarkerContent>
            <ReactCountryFlag
              style={{
                width: "2em",
                height: "2em",
              }}
              countryCode={raceCountryCodes[location]}
              svg
            />
          </MarkerContent>
        </MapMarker>
      );
    }
  });
};

export default F1RaceMarkers;
