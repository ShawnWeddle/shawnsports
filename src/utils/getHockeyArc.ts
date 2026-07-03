import { z } from "zod";
import type { TeamInfoType, LeagueTeamType } from "~/types/MapTypes";
import { nhlTeamsRanked, type NHLTeamType } from "~/data/NHL/NHLdata";
import { NHLArenaData, AHLArenaData, ECHLArenaData } from "~/data/NHL/HockeyArenaData";

export type NHLTeamLeagueParent = LeagueTeamType & { parentTeam: NHLTeamType | undefined};

export const getNHLParentTeam = (props: LeagueTeamType): NHLTeamLeagueParent => {
  const { league, team } = props;
  let parentTeam: NHLTeamType | undefined;
  const NHLenum = z.enum(nhlTeamsRanked);
  switch(league){
    case "NFL":
    case "CFL":
    case "IFL":
    case "UFL":
    case "NBA":
    case "WNBA":
    case "NGL":
    case "MLB":
    case "AAA":
    case "AA":
    case "HA":
    case "SA":
    case "PWHL":
    case "MLS":
      break;
    case "NHL":
      parentTeam = team;
      break;
    case "AHL":
    case "ECHL":
      parentTeam = NHLenum.parse(team.split("-")[1]);
      break;
  }
  return { ...props, parentTeam };
}

type ArcData = {
  id: string;
  from: [number, number];
  to: [number, number];
};

export const getHockeyArcData = (parentTeam: NHLTeamType): ArcData[] => {
  let teamsInfo: TeamInfoType[] = [];
  let numOfAffs = 0;
  if(parentTeam === "CBJ" || parentTeam === "UTA"){
    numOfAffs = 1;
    teamsInfo = [
      NHLArenaData[parentTeam],
      AHLArenaData[`AHL-${parentTeam}`],
    ];
  } else {
    numOfAffs = 2;
    teamsInfo = [
      NHLArenaData[parentTeam],
      AHLArenaData[`AHL-${parentTeam}`],
      ECHLArenaData[`ECHL-${parentTeam}`],
    ];
  }

  const arcData: ArcData[] = [];

  for (let i = 0; i < numOfAffs; i++) {
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