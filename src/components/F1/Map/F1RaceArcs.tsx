import { MapArc } from "~/components/ui/map";
import { raceCoordinates, raceLocations2026 } from "~/data/F1/2026/F1data";

type ArcData = {
  id: string;
  from: [number, number];
  to: [number, number];
};

const F1raceArcs = () => {
  const output: ArcData[] = [];
  for (let i = 0; i < raceLocations2026.length - 1; i++) {
    const locationA = raceLocations2026[i];
    const locationB = raceLocations2026[i + 1];

    if (!locationA) break;
    if (!locationB) break;

    const LA = raceCoordinates[locationA];
    const LB = raceCoordinates[locationB];

    if (!LA) break;
    if (!LB) break;

    const teamPair: ArcData = {
      id: locationA + "-" + locationB,
      from: [LA.coordinates.longitude, LA.coordinates.latitude],
      to: [LB.coordinates.longitude, LB.coordinates.latitude],
    };
    output.push(teamPair);
  }
  return (
    <MapArc
      data={output}
      paint={{
        "line-color": "#E10600",
        "line-width": 3,
      }}
    />
  );
};

export default F1raceArcs;
