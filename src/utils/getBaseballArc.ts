import { z } from "zod";
import type { TeamInfoType, LeagueTeamType } from "~/types/MapTypes";
import { mlbTeamsRanked, type MLBTeamType } from "~/data/MLB/MLBdata";
import { MLBFieldData, AAAFieldData, AAFieldData, HAFieldData, SAFieldData } from "~/data/MLB/BaseballStadiumData";

export type MLBTeamLeagueParent = { 
  team: LeagueTeamType;
  parentTeam: MLBTeamType | undefined;
  affiliates: LeagueTeamType[];
};

export const getMLBParentTeam = (input: LeagueTeamType): MLBTeamLeagueParent => {
  const { league, team } = input;
  let parentTeam: MLBTeamType | undefined;
  const MLBenum = z.enum(mlbTeamsRanked);
  const affiliates: LeagueTeamType[] = [];
  switch(league){
    case "NFL":
    case "CFL":
    case "IFL":
    case "UFL":
    case "NBA":
    case "WNBA":
    case "NGL":
    case "NHL":
    case "AHL":
    case "ECHL":
    case "PWHL":
    case "MLS":
      break;
    case "MLB":
      parentTeam = team;
      break;
    case "AAA":
    case "AA":
    case "HA":
    case "SA":
      parentTeam = MLBenum.parse(team.split("-")[1]);
      break;
  }
  if(parentTeam){
    affiliates.push({league: "MLB", team: parentTeam});
    affiliates.push({league: "AAA", team: `AAA-${parentTeam}`});
    affiliates.push({league: "AA", team: `AA-${parentTeam}`});
    affiliates.push({league: "HA", team: `HA-${parentTeam}`});
    affiliates.push({league: "SA", team: `SA-${parentTeam}`});
  }
  return { team: input, parentTeam, affiliates };
}

type ArcData = {
  id: string;
  from: [number, number];
  to: [number, number];
};

export const getBaseballArcData = (parentTeam: MLBTeamType): ArcData[] => {
  const teamsInfo: TeamInfoType[] = [
    MLBFieldData[parentTeam],
    AAAFieldData[`AAA-${parentTeam}`],
    AAFieldData[`AA-${parentTeam}`],
    HAFieldData[`HA-${parentTeam}`],
    SAFieldData[`SA-${parentTeam}`],
  ];

  const arcData: ArcData[] = [];

  for (let i = 0; i < 4; i++) {
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