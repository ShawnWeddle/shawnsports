import { MapArc } from "~/components/ui/map";
import { nhlMinorList } from "~/data/NHL/NHLstadiums";
import { type NHLTeamType } from "~/data/NHL/NHLdata";
import { NHLstyleData } from "~/data/NHL/NHLstyleData";

type ArcProps = {
  team: NHLTeamType | undefined;
};

type ArcData = {
  id: string;
  from: [number, number];
  to: [number, number];
};

const NHLarc = (props: ArcProps) => {
  const { team } = props;
  if (team) {
    const allTiers = nhlMinorList.filter((t) => {
      const { parentTeam } = t;
      return parentTeam === team;
    });
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
            "line-color": NHLstyleData[team].primary,
            "line-width": 2,
          }}
        />
      </>
    );
  } else {
    return <></>;
  }
};

export default NHLarc;
