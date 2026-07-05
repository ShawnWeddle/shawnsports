import { useMapContext } from "~/hooks/useMap";
import { getMLBParentTeam } from "~/utils/getBaseballArc";
import { getNBAParentTeam } from "~/utils/getBasketballArc";
import { getNHLParentTeam } from "~/utils/getHockeyArc";
import BaseballArc from "./BaseballArc";
import BasketballArc from "./BasketballArc";
import HockeyArc from "./HockeyArc";

const MapArc = () => {
  const { mapState } = useMapContext();
  const { sport, activeTeam } = mapState;
  if (!activeTeam) {
    return <></>;
  }
  switch (sport) {
    case "Baseball":
      return <BaseballArc team={getMLBParentTeam(activeTeam).parentTeam} />;
    case "Basketball":
      return <BasketballArc team={getNBAParentTeam(activeTeam).parentTeam} />;
    case "Hockey":
      return <HockeyArc team={getNHLParentTeam(activeTeam).parentTeam} />;
    case "Football":
    case "Soccer":
    case "Volleyball":
    case "All":
    default:
      return <></>;
  }
};

export default MapArc;
