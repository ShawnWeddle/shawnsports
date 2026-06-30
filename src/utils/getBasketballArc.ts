import { z } from "zod";
import type { MapDataInputType } from "~/types/MapTypes";
import { nbaTeamsRanked, type NBATeamType } from "~/data/NBA/NBAdata";
import { NBAArenaData, NGLArenaData } from "~/data/NBA/BasketballArenaData";

export type NBATeamLeagueParent = MapDataInputType & { parentTeam: NBATeamType | undefined};

export const getNBAParentTeam = (props: MapDataInputType): NBATeamLeagueParent => {
  const { league, team } = props;
  let parentTeam: NBATeamType | undefined;
  const NBAenum = z.enum(nbaTeamsRanked);
  switch(league){
    case "NFL":
    case "CFL":
    case "IFL":
    case "UFL":
    case "WNBA":
    case "MLB":
    case "AAA":
    case "AA":
    case "HA":
    case "SA":
    case "NHL":
    case "AHL":
    case "ECHL":
    case "PWHL":
    case "MLS":
      break;
    case "NBA":
      parentTeam = team;
      break;
    case "NGL":
      if(team !== "MEX") {
      parentTeam = NBAenum.parse(team.split("-")[1]);
      }
      break;
  }
  return { ...props, parentTeam };
}

type ArcData = {
  id: string;
  from: [number, number];
  to: [number, number];
};

export const getBasketballArcData = (parentTeam: NBATeamType): ArcData[] => {
  const teamsInfo = [
      NBAArenaData[parentTeam],
      NGLArenaData[`NGL-${parentTeam}`],
    ];

  const arcData: ArcData[] = [];

  for (let i = 0; i < 1; i++) {
    const higherTeam = teamsInfo[i];
    const lowerTeam = teamsInfo[i + 1];
    if (higherTeam && lowerTeam) {
      const teamPair: ArcData = {
        id: higherTeam.name + lowerTeam.name,
        from: [
          higherTeam.coordinates.longitude,
          higherTeam.coordinates.latitude,
        ],
        to: [lowerTeam.coordinates.longitude, lowerTeam.coordinates.latitude],
      };
      arcData.push(teamPair);
    }
  }

  return arcData;
}