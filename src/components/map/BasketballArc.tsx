import { MapArc } from "~/components/ui/map";
import { type NBATeamType } from "~/data/NBA/NBAdata";
import { NBAstyleData } from "~/data/NBA/NBAstyleData";
import { getBasketballArcData } from "~/utils/getBasketballArc";

type ArcProps = {
  team: NBATeamType | undefined;
};

const BasketballArc = (props: ArcProps) => {
  const { team } = props;
  if (team) {
    const data = getBasketballArcData(team);
    return (
      <>
        <MapArc
          data={data}
          paint={{
            "line-color": NBAstyleData[team].primary,
            "line-width": 2,
          }}
        />
      </>
    );
  } else {
    return <></>;
  }
};

export default BasketballArc;
