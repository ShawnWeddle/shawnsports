import type { LeagueTeamType } from "~/types/MapTypes";
import { BasicTag } from "../map/BasicTag";

interface FavoriteTeamsListProps {
  teams: LeagueTeamType[];
}

const FavoriteTeamsList: React.FC<FavoriteTeamsListProps> = (
  props: FavoriteTeamsListProps
) => {
  const { teams } = props;
  return teams.map((team, index) => {
    return <BasicTag key={index} {...team} />;
  });
};

export default FavoriteTeamsList;
