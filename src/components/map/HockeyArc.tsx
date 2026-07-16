import { MapArc } from "~/components/ui/map";
import { type NHLTeamType } from "~/data/NHL/NHLdata";
import { NHLstyleData } from "~/styles/NHLstyleData";
import { getHockeyArcData } from "~/utils/getHockeyArc";

type ArcProps = {
  team: NHLTeamType | undefined;
};

const HockeyArc = (props: ArcProps) => {
  const { team } = props;
  if (team) {
    const data = getHockeyArcData(team);
    return (
      <>
        <MapArc
          data={data}
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

export default HockeyArc;
