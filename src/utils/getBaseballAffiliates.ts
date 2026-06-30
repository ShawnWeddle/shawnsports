import { z } from "zod";
import type { TeamInfoType, MapDataInputType } from "~/types/MapTypes";
import type { LeagueType } from "~/data/map/mapData";
import { mlbTeamsRanked } from "~/data/MLB/MLBdata";
import type { MLBTeamType, AAATeamType, AATeamType, HATeamType, SATeamType } from "~/data/MLB/MLBdata";
import { MLBFieldData, AAAFieldData, AAFieldData, HAFieldData, SAFieldData } from "~/data/MLB/BaseballStadiumData";

export type MLBidType = {
  MLB: MLBTeamType;
  AAA: AAATeamType;
  AA: AATeamType;
  HA: HATeamType;
  SA: SATeamType;
}

export const getBaseballAffiliates = (props: MapDataInputType): MLBidType => {
  const { league, team } = props;
  if(league === "MLB" || league === "AAA" || league === "AA" || league === "HA" || league === "SA" ){
      switch(team){
        case "ARI":
        case "AAA-ARI":
        case "AA-ARI":
        case "HA-ARI":
        case "SA-ARI":
          return {
            MLB: "ARI",
            AAA: "AAA-ARI",
            AA: "AA-ARI",
            HA: "HA-ARI",
            SA: "SA-ARI",
          };
        case "ATL":
        case "AAA-ATL":
        case "AA-ATL":
        case "HA-ATL":
        case "SA-ATL":
          return {
            MLB: "ATL",
            AAA: "AAA-ATL",
            AA: "AA-ATL",
            HA: "HA-ATL",
            SA: "SA-ATL",
          };
        case "BAL":
        case "AAA-BAL":
        case "AA-BAL":
        case "HA-BAL":
        case "SA-BAL":
          return {
            MLB: "BAL",
            AAA: "AAA-BAL",
            AA: "AA-BAL",
            HA: "HA-BAL",
            SA: "SA-BAL",
          };
        case "BOS":
        case "AAA-BOS":
        case "AA-BOS":
        case "HA-BOS":
        case "SA-BOS":
          return {
            MLB: "BOS",
            AAA: "AAA-BOS",
            AA: "AA-BOS",
            HA: "HA-BOS",
            SA: "SA-BOS",
          };
        case "CHC":
        case "AAA-CHC":
        case "AA-CHC":
        case "HA-CHC":
        case "SA-CHC":
          return {
            MLB: "CHC",
            AAA: "AAA-CHC",
            AA: "AA-CHC",
            HA: "HA-CHC",
            SA: "SA-CHC",
          };
        case "CHW":
        case "AAA-CHW":
        case "AA-CHW":
        case "HA-CHW":
        case "SA-CHW":
          return {
            MLB: "CHW",
            AAA: "AAA-CHW",
            AA: "AA-CHW",
            HA: "HA-CHW",
            SA: "SA-CHW",
          };
        case "CIN":
        case "AAA-CIN":
        case "AA-CIN":
        case "HA-CIN":
        case "SA-CIN":
          return {
            MLB: "CIN",
            AAA: "AAA-CIN",
            AA: "AA-CIN",
            HA: "HA-CIN",
            SA: "SA-CIN",
          };
        case "CLE":
        case "AAA-CLE":
        case "AA-CLE":
        case "HA-CLE":
        case "SA-CLE":
          return {
            MLB: "CLE",
            AAA: "AAA-CLE",
            AA: "AA-CLE",
            HA: "HA-CLE",
            SA: "SA-CLE",
          };
        case "COL":
        case "AAA-COL":
        case "AA-COL":
        case "HA-COL":
        case "SA-COL":
          return {
            MLB: "COL",
            AAA: "AAA-COL",
            AA: "AA-COL",
            HA: "HA-COL",
            SA: "SA-COL",
          };
        case "DET":
        case "AAA-DET":
        case "AA-DET":
        case "HA-DET":
        case "SA-DET":
          return {
            MLB: "DET",
            AAA: "AAA-DET",
            AA: "AA-DET",
            HA: "HA-DET",
            SA: "SA-DET",
          };
        case "HOU":
        case "AAA-HOU":
        case "AA-HOU":
        case "HA-HOU":
        case "SA-HOU":
          return {
            MLB: "HOU",
            AAA: "AAA-HOU",
            AA: "AA-HOU",
            HA: "HA-HOU",
            SA: "SA-HOU",
          };
        case "KCR":
        case "AAA-KCR":
        case "AA-KCR":
        case "HA-KCR":
        case "SA-KCR":
          return {
            MLB: "KCR",
            AAA: "AAA-KCR",
            AA: "AA-KCR",
            HA: "HA-KCR",
            SA: "SA-KCR",
          };
        case "LAA":
        case "AAA-LAA":
        case "AA-LAA":
        case "HA-LAA":
        case "SA-LAA":
          return {
            MLB: "LAA",
            AAA: "AAA-LAA",
            AA: "AA-LAA",
            HA: "HA-LAA",
            SA: "SA-LAA",
          };
        case "LAD":
        case "AAA-LAD":
        case "AA-LAD":
        case "HA-LAD":
        case "SA-LAD":
          return {
            MLB: "LAD",
            AAA: "AAA-LAD",
            AA: "AA-LAD",
            HA: "HA-LAD",
            SA: "SA-LAD",
          };
        case "MIA":
        case "AAA-MIA":
        case "AA-MIA":
        case "HA-MIA":
        case "SA-MIA":
          return {
            MLB: "MIA",
            AAA: "AAA-MIA",
            AA: "AA-MIA",
            HA: "HA-MIA",
            SA: "SA-MIA",
          };
        case "MIL":
        case "AAA-MIL":
        case "AA-MIL":
        case "HA-MIL":
        case "SA-MIL":
          return {
            MLB: "MIL",
            AAA: "AAA-MIL",
            AA: "AA-MIL",
            HA: "HA-MIL",
            SA: "SA-MIL",
          };
        case "MIN":
        case "AAA-MIN":
        case "AA-MIN":
        case "HA-MIN":
        case "SA-MIN":
          return {
            MLB: "MIN",
            AAA: "AAA-MIN",
            AA: "AA-MIN",
            HA: "HA-MIN",
            SA: "SA-MIN",
          };
        case "NYM":
        case "AAA-NYM":
        case "AA-NYM":
        case "HA-NYM":
        case "SA-NYM":
          return {
            MLB: "NYM",
            AAA: "AAA-NYM",
            AA: "AA-NYM",
            HA: "HA-NYM",
            SA: "SA-NYM",
          };
        case "NYY":
        case "AAA-NYY":
        case "AA-NYY":
        case "HA-NYY":
        case "SA-NYY":
          return {
            MLB: "NYY",
            AAA: "AAA-NYY",
            AA: "AA-NYY",
            HA: "HA-NYY",
            SA: "SA-NYY",
          };
        case "OAK":
        case "AAA-OAK":
        case "AA-OAK":
        case "HA-OAK":
        case "SA-OAK":
          return {
            MLB: "OAK",
            AAA: "AAA-OAK",
            AA: "AA-OAK",
            HA: "HA-OAK",
            SA: "SA-OAK",
          };
        case "PHI":
        case "AAA-PHI":
        case "AA-PHI":
        case "HA-PHI":
        case "SA-PHI":
          return {
            MLB: "PHI",
            AAA: "AAA-PHI",
            AA: "AA-PHI",
            HA: "HA-PHI",
            SA: "SA-PHI",
          };
        case "PIT":
        case "AAA-PIT":
        case "AA-PIT":
        case "HA-PIT":
        case "SA-PIT":
          return {
            MLB: "PIT",
            AAA: "AAA-PIT",
            AA: "AA-PIT",
            HA: "HA-PIT",
            SA: "SA-PIT",
          };
        case "SDP":
        case "AAA-SDP":
        case "AA-SDP":
        case "HA-SDP":
        case "SA-SDP":
          return {
            MLB: "SDP",
            AAA: "AAA-SDP",
            AA: "AA-SDP",
            HA: "HA-SDP",
            SA: "SA-SDP",
          };
        case "SEA":
        case "AAA-SEA":
        case "AA-SEA":
        case "HA-SEA":
        case "SA-SEA":
          return {
            MLB: "SEA",
            AAA: "AAA-SEA",
            AA: "AA-SEA",
            HA: "HA-SEA",
            SA: "SA-SEA",
          };
        case "SFG":
        case "AAA-SFG":
        case "AA-SFG":
        case "HA-SFG":
        case "SA-SFG":
          return {
            MLB: "SFG",
            AAA: "AAA-SFG",
            AA: "AA-SFG",
            HA: "HA-SFG",
            SA: "SA-SFG",
          };
        case "STL":
        case "AAA-STL":
        case "AA-STL":
        case "HA-STL":
        case "SA-STL":
          return {
            MLB: "STL",
            AAA: "AAA-STL",
            AA: "AA-STL",
            HA: "HA-STL",
            SA: "SA-STL",
          };
        case "TBR":
        case "AAA-TBR":
        case "AA-TBR":
        case "HA-TBR":
        case "SA-TBR":
          return {
            MLB: "TBR",
            AAA: "AAA-TBR",
            AA: "AA-TBR",
            HA: "HA-TBR",
            SA: "SA-TBR",
          };
        case "TEX":
        case "AAA-TEX":
        case "AA-TEX":
        case "HA-TEX":
        case "SA-TEX":
          return {
            MLB: "TEX",
            AAA: "AAA-TEX",
            AA: "AA-TEX",
            HA: "HA-TEX",
            SA: "SA-TEX",
          };
        case "TOR":
        case "AAA-TOR":
        case "AA-TOR":
        case "HA-TOR":
        case "SA-TOR":
          return {
            MLB: "TOR",
            AAA: "AAA-TOR",
            AA: "AA-TOR",
            HA: "HA-TOR",
            SA: "SA-TOR",
          };
        case "WSN":
        case "AAA-WSN":
        case "AA-WSN":
        case "HA-WSN":
        case "SA-WSN":
          return {
            MLB: "WSN",
            AAA: "AAA-WSN",
            AA: "AA-WSN",
            HA: "HA-WSN",
            SA: "SA-WSN",
          };
      }
    } else {
      return {
            MLB: "CHC",
            AAA: "AAA-KCR",
            AA: "AA-ARI",
            HA: "HA-TOR",
            SA: "SA-MIA",
          };
    }
};

