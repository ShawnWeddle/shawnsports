import { CFLTeamType } from "~/data/CFL/CFLdata";
import { DriverCode26Type } from "~/data/F1/2026/F1data";
import { MLBTeamType } from "~/data/MLB/MLBdata";
import { MLSTeamType } from "~/data/MLS/MLSdata";
import { NBATeamType } from "~/data/NBA/NBAdata";
import { NFLTeamType } from "~/data/NFL/NFLdata";
import { NHLTeamType } from "~/data/NHL/NHLdata";
import { SportType } from "~/data/SiteData";
import { CFLenum, F1enum, MLBenum, MLSenum, NBAenum, NFLenum, NHLenum, WNBAenum } from "~/data/universal/rankData";
import { WNBATeamType } from "~/data/WNBA/WNBAdata";

type CleanRankType = | 
((input: string[], sport: "F1") => DriverCode26Type[]) | 
((input: string[], sport: "NFL") => NFLTeamType[]) |
((input: string[], sport: "NBA") => NBATeamType[]) |
((input: string[], sport: "MLB") => MLBTeamType[]) |
((input: string[], sport: "NHL") => NHLTeamType[]) |
((input: string[], sport: "MLS") => MLSTeamType[]) |
((input: string[], sport: "WNBA") => WNBATeamType[]) |
((input: string[], sport: "CFL") => CFLTeamType[]);

export const cleanRank = (input: string[], sport: SportType) => {
  switch (sport){
    case "CFL": {
      const newCFLRank: CFLTeamType[] = [];
      input.forEach((team) => {
        const newTeam = CFLenum.safeParse(team);
        if(newTeam.data){
          newCFLRank.push(newTeam.data);
        }
      })
      return newCFLRank;
    }
    case "F1": {
      const newF1Rank: DriverCode26Type[] = [];
      input.forEach((team) => {
        const newTeam = F1enum.safeParse(team);
        if(newTeam.data){
          newF1Rank.push(newTeam.data);
        }
      })
      return newF1Rank;
    }
    case "MLB": {
      const newMLBRank: MLBTeamType[] = [];
      input.forEach((team) => {
        const newTeam = MLBenum.safeParse(team);
        if(newTeam.data){
          newMLBRank.push(newTeam.data);
        }
      })
      return newMLBRank;
    }
    case "MLS": {
      const newMLSRank: MLSTeamType[] = [];
      input.forEach((team) => {
        const newTeam = MLSenum.safeParse(team);
        if(newTeam.data){
          newMLSRank.push(newTeam.data);
        }
      })
      return newMLSRank;
    }
    case "NBA": {
      const newNBARank: NBATeamType[] = [];
      input.forEach((team) => {
        const newTeam = NBAenum.safeParse(team);
        if(newTeam.data){
          newNBARank.push(newTeam.data);
        }
      })
      return newNBARank;
    }
    case "NFL": {
      const newNFLRank: NFLTeamType[] = [];
      input.forEach((team) => {
        const newTeam = NFLenum.safeParse(team);
        if(newTeam.data){
          newNFLRank.push(newTeam.data);
        }
      })
      return newNFLRank;
    }
    case "NHL": {
      const newNHLRank: NHLTeamType[] = [];
      input.forEach((team) => {
        const newTeam = NHLenum.safeParse(team);
        if(newTeam.data){
          newNHLRank.push(newTeam.data);
        }
      })
      return newNHLRank;
    }
    case "WNBA": {
      const newWNBARank: WNBATeamType[] = [];
      input.forEach((team) => {
        const newTeam = WNBAenum.safeParse(team);
        if(newTeam.data){
          newWNBARank.push(newTeam.data);
        }
      })
      return newWNBARank;
    }
  }
}