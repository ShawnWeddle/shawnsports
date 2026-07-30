import { useState } from "react";
import type { LeagueType } from "~/data/map/mapData";
import { LeagueTeamFullList } from "~/data/universal/listData";
import { markerData } from "~/data/map/allMapData";
import type { FavoriteTeamType } from "~/data/universal/listData";
import { FullLeagueList } from "~/data/map/mapData";
import { LeagueFullNames } from "~/data/universal/listData";
import { leagueBackgrounds } from "~/data/map/mapStyles";
import { cn } from "~/lib/utils";
import { convertLeagueToSport } from "~/data/map/mapData";
import Icon from "../map/MapIcon";
import { Button } from "../ui/button";

interface UserProfileProps {
  name: string;
}

interface InputProps {
  league: LeagueType;
}

const UserProfile: React.FC<UserProfileProps> = () => {
  const [favoriteTeams, setFavoriteTeams] = useState<FavoriteTeamType>({});

  const TeamInputs: React.FC<InputProps> = (props: InputProps) => {
    const { league } = props;
    const teams = LeagueTeamFullList()[league];
    const teamInputs = teams
      .sort((a, b) => {
        return markerData(a).location > markerData(b).location ? 1 : -1;
      })
      .map((team, index) => {
        const teamInfo = markerData({ ...team });
        return (
          <div key={index} className="flex justify-start px-1">
            <input
              type="radio"
              id={league + teamInfo.code}
              checked={favoriteTeams[league] === team.team}
              onChange={() => {
                setFavoriteTeams({
                  ...favoriteTeams,
                  [league]: team.team,
                });
              }}
            />
            <label htmlFor={league + teamInfo.code} className="pl-1">
              {teamInfo.text.long}
            </label>
          </div>
        );
      });

    return (
      <fieldset className="my-1 rounded-lg shadow">
        <h1
          className={cn(
            "flex items-center justify-center gap-2 rounded-t-lg text-center text-lg font-semibold text-white",
            {
              [leagueBackgrounds(league)]: true,
            }
          )}
        >
          {LeagueFullNames[league]}
          <Icon sport={convertLeagueToSport(league)} />
        </h1>
        <div className="grid-cols-3 rounded-b-lg border-2 border-t-0 sm:grid">
          <div key="NO" className="flex justify-start px-1">
            <input
              type="radio"
              id={league + "NO"}
              checked={favoriteTeams[league] === undefined}
              onChange={() => {
                setFavoriteTeams({
                  ...favoriteTeams,
                  [league]: undefined,
                });
              }}
            />
            <label htmlFor={league + "NO"} className="pl-1">
              No Selection
            </label>
          </div>
          {teamInputs}
        </div>
      </fieldset>
    );
  };

  return (
    <section className="">
      {FullLeagueList.map((league, index) => {
        return <TeamInputs key={index} league={league} />;
      })}
      <div className="flex justify-center">
        <Button
          variant="home"
          onClick={() => {
            console.log(favoriteTeams);
          }}
        >
          SAVE
        </Button>
      </div>
    </section>
  );
};

export default UserProfile;

/**
 * 
 * {
  "NFL": "IND",
  "IFL": "FSH",
  "NBA": "IND",
  "NGL": "NGL-IND",
  "WNBA": "IND",
  "NHL": "STL",
  "ECHL": "ECHL-CHI",
  "AHL": "AHL-CAR",
  "PWHL": "VAN",
  "MLB": "CIN",
  "AAA": "AAA-PIT",
  "HA": "HA-SDP",
  "AA": "AA-ARI",
  "SA": "SA-MIA",
  "MLV": "IND",
}
 */
