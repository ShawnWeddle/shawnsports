import { useState } from "react";
import { cn } from "~/lib/utils";
import type { LeagueType } from "~/data/map/mapData";
import type { LeagueTeamType } from "~/types/MapTypes";
import type { FavoriteTeamType } from "~/data/universal/listData";
import { LeagueTeamFullList } from "~/data/universal/listData";
import { markerData } from "~/data/map/allMapData";
import { FavoriteLeagueOrder, convertLeagueToSport } from "~/data/map/mapData";
import { LeagueFullNames } from "~/data/universal/listData";
import { leagueBackgrounds } from "~/data/map/mapStyles";
import { favoriteCleanup, favoriteCleanPost } from "~/utils/favTeamCleanup";
import Icon from "../map/MapIcon";
import { Button } from "../ui/button";
import { api } from "~/utils/api";
import { useAuthContext } from "~/hooks/useAuthContext";

interface FavoriteTeamInputsProps {
  name: string;
}

interface InputProps {
  league: LeagueType;
}

const FavoriteTeamInputs: React.FC<FavoriteTeamInputsProps> = () => {
  const [favoriteTeams, setFavoriteTeams] = useState<FavoriteTeamType>({});
  const { authState, authDispatch } = useAuthContext();

  const postFavorite = api.favorite.createFavorite.useMutation();

  const TeamInputs: React.FC<InputProps> = (props: InputProps) => {
    const { league } = props;
    const teams = LeagueTeamFullList()[league];
    const teamInputs = teams
      .sort((a, b) => {
        return league === "F1"
          ? 1
          : markerData(a).location > markerData(b).location
          ? 1
          : -1;
      })
      .map((team, index) => {
        const teamInfo = markerData({ ...team });
        return (
          <div key={index} className="flex justify-start px-1">
            <input
              type="radio"
              id={league + teamInfo.code}
              checked={favoriteTeams[league]?.team === team.team}
              onChange={() => {
                setFavoriteTeams(
                  favoriteCleanup({
                    ...favoriteTeams,
                    [league]: team,
                  })
                );
              }}
            />
            <label
              htmlFor={league + teamInfo.code}
              className={cn("rounded px-1", {
                [teamInfo.style.primaryBackground]:
                  favoriteTeams[league]?.team === team.team,
                [teamInfo.style.simpleText]:
                  favoriteTeams[league]?.team === team.team,
              })}
            >
              {teamInfo.text.long}
            </label>
          </div>
        );
      });

    return (
      <fieldset className="m-1 rounded-lg shadow">
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
        <div className="flex flex-col items-center rounded-b-lg border-2 border-t-0 sm:grid sm:grid-cols-2 md:grid-cols-3">
          <div key="NO" className="flex justify-start px-1">
            <input
              type="radio"
              id={league + "NO"}
              checked={favoriteTeams[league]?.team === undefined}
              onChange={() => {
                setFavoriteTeams(
                  favoriteCleanup({
                    ...favoriteTeams,
                    [league]: undefined,
                  })
                );
              }}
            />
            <label htmlFor={league + "NO"} className="pl-1">
              No Favorite
            </label>
          </div>
          {teamInputs}
        </div>
      </fieldset>
    );
  };

  return (
    <div>
      {FavoriteLeagueOrder.map((league, index) => {
        return <TeamInputs key={index} league={league} />;
      })}
      <div className="flex justify-center">
        <Button
          variant="home"
          onClick={() => {
            console.log(favoriteTeams);
            const newFavorite = favoriteCleanPost(
              favoriteCleanup(favoriteTeams)
            );
            postFavorite.mutate({
              favorite: newFavorite,
            });
          }}
        >
          SAVE
        </Button>
      </div>
    </div>
  );
};

export default FavoriteTeamInputs;

export const exampleTeams: { [Key in LeagueType]?: LeagueTeamType } = {
  F1: {
    league: "F1",
    team: "VER",
  },
  NFL: {
    league: "NFL",
    team: "IND",
  },
  NBA: {
    league: "NBA",
    team: "IND",
  },
  MLB: {
    league: "MLB",
    team: "CIN",
  },
  NHL: {
    league: "NHL",
    team: "STL",
  },
  WNBA: {
    league: "WNBA",
    team: "IND",
  },
  AHL: {
    league: "AHL",
    team: "AHL-CAR",
  },
  UFL: {
    league: "UFL",
    team: "BHM",
  },
  IFL: {
    league: "IFL",
    team: "FSH",
  },
  NGL: {
    league: "NGL",
    team: "MEX",
  },
  ECHL: {
    league: "ECHL",
    team: "ECHL-CHI",
  },
  AAA: {
    league: "AAA",
    team: "AAA-PIT",
  },
  AA: {
    league: "AA",
    team: "AA-ARI",
  },
  HA: {
    league: "HA",
    team: "HA-SDP",
  },
  MLV: {
    league: "MLV",
    team: "IND",
  },
};

/**
 *
 *
 */
