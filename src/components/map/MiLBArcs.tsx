import { cn } from "~/lib/utils";
import { MapArc } from "~/components/ui/map";
import { MiLBobject } from "~/data/MLB/ballparks";
import { type MLBTeamType } from "~/data/MLB/MLBdata";
import { MLBstyleData } from "~/data/MLB/MLBstyleData";

type ArcProps = {
  team: MLBTeamType;
};

type ArcsProps = {
  activeTeams: Set<MLBTeamType>;
};

type ArcData = {
  id: string;
  from: [number, number];
  to: [number, number];
};

const Arc = (props: ArcProps) => {
  const { team } = props;
  const allTiers = Object.values(MiLBobject[team]);
  const output: ArcData[] = [];
  for (let i = 0; i < 4; i++) {
    const higherTeam = allTiers[i];
    const lowerTeam = allTiers[i + 1];
    if (higherTeam && lowerTeam) {
      const teamPair: ArcData = {
        id: team + i.toString(),
        from: [
          higherTeam.coordinates.longitude,
          higherTeam.coordinates.latitude,
        ],
        to: [lowerTeam.coordinates.longitude, lowerTeam.coordinates.latitude],
      };
      output.push(teamPair);
    }
  }
  return (
    <>
      <MapArc
        data={output}
        paint={{
          "line-color": MLBstyleData[team].primary,
          "line-width": 2,
        }}
      />
    </>
  );
};

export const MiLBarcs = (props: ArcsProps) => {
  const { activeTeams } = props;

  const arcs = [...activeTeams].map((team, index) => {
    return <Arc key={index} team={team} />;
  });

  return arcs;
};

//const arcs = destinations.map((dest) => ({
//   id: dest.name,
//   from: [hub.lng, hub.lat] as [number, number],
//   to: [dest.lng, dest.lat] as [number, number],
// }));
