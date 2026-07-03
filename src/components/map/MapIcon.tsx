import type { SportType } from "~/data/map/mapData";
import {
  FaBaseball,
  FaBasketball,
  FaFootball,
  FaHockeyPuck,
  FaFutbol,
  FaVolleyball,
} from "react-icons/fa6";

type IconProps = {
  sport: SportType;
};

const Icon: React.FC<IconProps> = (props: IconProps) => {
  const { sport } = props;
  switch (sport) {
    case "Baseball":
      return <FaBaseball />;
    case "Basketball":
      return <FaBasketball />;
    case "Football":
      return <FaFootball />;
    case "Hockey":
      return <FaHockeyPuck />;
    case "Soccer":
      return <FaFutbol />;
    case "Volleyball":
      return <FaVolleyball />;
  }
};

export default Icon;
