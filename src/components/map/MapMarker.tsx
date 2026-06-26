import { cn } from "~/lib/utils";
import { MapMarker, MarkerContent, MarkerPopup } from "~/components/ui/map";
import type { SportType, LeagueType } from "~/data/map/mapData";
import {
  SportList,
  FullLeagueList,
  convertLeagueToSport,
} from "~/data/map/mapData";
import { leagueStyles } from "~/data/map/mapStyles";
import {
  FaBaseball,
  FaBasketball,
  FaFootball,
  FaTrophy,
  FaHockeyPuck,
  FaFutbol,
} from "react-icons/fa6";

type MarkerProps = {
  team: string;
  league: LeagueType;
};

type IconProps = {
  className: string;
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
  }
};

const Marker: React.FC<MarkerProps> = (props: MarkerProps) => {
  const { team, league } = props;
  const { coordinates, style, text } = markerData(team, sport);
  return (
    <MapMarker
      latitude={coordinates.latitude}
      longitude={coordinates.longitude}
    >
      <MarkerContent>
        <div
          className={cn(
            "flex size-6 flex-row items-center justify-center rounded-full border-2 bg-white shadow-lg",
            leagueStyles(league, "B")
          )}
        >
          <Icon
            className={cn("size-4", leagueStyles(league, "T"))}
            sport={convertLeagueToSport(league)}
          />
        </div>
      </MarkerContent>
    </MapMarker>
  );
};

export default Marker;

/*

*/
