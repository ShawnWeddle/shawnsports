import { MapArc } from "~/components/ui/map";
import { MiLBobject } from "~/data/MLB/ballparks";
import { type MLBTeamType } from "~/data/MLB/MLBdata";
import { MLBstyleData } from "~/data/MLB/MLBstyleData";

type ArcProps = {
  team: MLBTeamType | undefined;
};

type ArcData = {
  id: string;
  from: [number, number];
  to: [number, number];
};

const MiLBarc = (props: ArcProps) => {
  const { team } = props;
  if (team) {
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
  } else {
    return <></>;
  }
};

export default MiLBarc;
