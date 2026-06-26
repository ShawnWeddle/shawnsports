import type { CFLTeamType, IFLTeamType, UFLTeamType } from "~/data/CFL/CFLdata"
import type { AAATeamType, AATeamType, HATeamType, MLBTeamType, SATeamType } from "~/data/MLB/MLBdata"
import type { MLSTeamType } from "~/data/MLS/MLSdata"
import type { NBATeamType, NGLTeamType } from "~/data/NBA/NBAdata"
import type { NFLTeamType } from "~/data/NFL/NFLdata"
import type { AHLTeamType, ECHLTeamType, NHLTeamType, PWHLTeamType } from "~/data/NHL/NHLdata"
import type { WNBATeamType } from "~/data/WNBA/WNBAdata"

export type MapDataInputType = {
  league: "NFL",
  team: NFLTeamType
} | {
  league: "CFL",
  team: CFLTeamType
} | {
  league: "IFL",
  team: IFLTeamType
} | {
  league: "UFL",
  team: UFLTeamType
} | {
  league: "NBA",
  team: NBATeamType
} | {
  league: "WNBA",
  team: WNBATeamType
} | {
  league: "NGL",
  team: NGLTeamType
} | {
  league: "MLB",
  team: MLBTeamType
} | {
  league: "AAA",
  team: AAATeamType
} | {
  league: "AA",
  team: AATeamType
} | {
  league: "HA",
  team: HATeamType
} | {
  league: "SA",
  team: SATeamType
} | {
  league: "NHL",
  team: NHLTeamType
} | {
  league: "AHL",
  team: AHLTeamType
} | {
  league: "ECHL",
  team: ECHLTeamType
} | {
  league: "PWHL",
  team: PWHLTeamType
} | {
  league: "MLS",
  team: MLSTeamType
};

export type TeamInfoType = {
  coordinates: {
    latitude: number,
    longitude: number,
  };
  location: string;
  name: string;
};