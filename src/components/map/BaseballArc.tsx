import { MapArc } from "~/components/ui/map";
import { type MLBTeamType } from "~/data/MLB/MLBdata";
import { MLBstyleData } from "~/styles/MLBstyleData";
import { getBaseballArcData } from "~/utils/getBaseballArc";

type ArcProps = {
  team: MLBTeamType | undefined;
};

const BaseballArc = (props: ArcProps) => {
  const { team } = props;
  if (team) {
    const data = getBaseballArcData(team);
    return (
      <>
        <MapArc
          data={data}
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

export default BaseballArc;
