import type {  MLVTeamType } from "./MLVdata";
import type { TeamInfoType } from "~/types/MapTypes";

export const MLVArenaData: {[Key in MLVTeamType] : TeamInfoType} = {
  ATL: {
    coordinates: {
      latitude: 33.991,
      longitude: -84.094,
    },
    location: "Atlanta",
    name: "Vibe",
  },
  CLF: {
    coordinates: {
      latitude: 39.969,
      longitude: -83.006,
    },
    location: "Columbus",
    name: "Fury",
  },
  DAL: {
    coordinates: {
      latitude: 33.1,
      longitude: -96.819,
    },
    location: "Dallas",
    name: "Pulse",
  },
  GRR: {
    coordinates: {
      latitude: 42.962,
      longitude: -85.672,
    },
    location: "Grand Rapids",
    name: "Rise",
  },
  IND: {
    coordinates: {
      latitude: 39.948,
      longitude: -86.004,
    },
    location: "Indy",
    name: "Ignite",
  },
  OMA: {
    coordinates: {
      latitude: 41.263,
      longitude: -95.928,
    },
    location: "Omaha",
    name: "Supernovas",
  },
  ORL: {
    coordinates: {
      latitude: 28.607,
      longitude: -81.197,
    },
    location: "Orlando",
    name: "Valkyries",
  },
}