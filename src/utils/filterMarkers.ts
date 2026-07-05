import type { LeagueTeamType } from "~/types/MapTypes";
import { getMLBParentTeam } from "./getBaseballArc";
import { getNBAParentTeam } from "./getBasketballArc";
import { getNHLParentTeam } from "./getHockeyArc";

const filterMarkers = (input: {
  leagueAndTeam: LeagueTeamType,
  removedLocations: LeagueTeamType[],
  activeTeam: LeagueTeamType | undefined,
}): boolean => {
  const { removedLocations, leagueAndTeam, activeTeam } = input;
  const { league, team } = leagueAndTeam;
  if(activeTeam){
    switch(league){
    case "NFL":
    case "CFL":
    case "IFL":
    case "UFL":
    case "WNBA":
    case "PWHL":
    case "MLS":
    case "MLV":
      return false;
    case "MLB":
    case "AAA":
    case "AA":
    case "HA":
    case "SA":
      const { affiliates: baseballAffiliates } = getMLBParentTeam(leagueAndTeam);
      return (
        baseballAffiliates.find((affiliate) => {
          return affiliate.team === activeTeam.team && affiliate.league === activeTeam.league;
        }) !== undefined
      );
    case "NBA":
    case "NGL":
      const { affiliates: basketballAffiliates } = getNBAParentTeam(leagueAndTeam);
      return (
        basketballAffiliates.find((affiliate) => {
          return affiliate.team === activeTeam.team && affiliate.league === activeTeam.league;
        }) !== undefined
      );
    case "NHL":
    case "AHL":
    case "ECHL":
      const { affiliates: hockeyAffiliates } = getNHLParentTeam(leagueAndTeam);
      return (
        hockeyAffiliates.find((affiliate) => {
          return affiliate.team === activeTeam.team && affiliate.league === activeTeam.league;
        }) !== undefined
      );
    }
  } else {
    //This expression checks if the list of multi league locations contains this team
    //If it is found, the find function does not return undefined, therefore the expression is false 
    return (
      removedLocations.find((removedLocation) => {
        return removedLocation.team === team && removedLocation.league === league;
      }) === undefined
    );
  }
}

export default filterMarkers;