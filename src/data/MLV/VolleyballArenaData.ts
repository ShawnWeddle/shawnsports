import type { MLVTeamType } from "./MLVdata";
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
  LAC: {
    coordinates: {
      latitude: 33.808,
      longitude: -117.877,
    },
    location: "Los Angeles",
    name: "MLV",
  },
  MIN: {
    coordinates: {
      latitude: 44.945,
      longitude: -93.101
    },
    location: "Minnesota",
    name: "Forge",
  },
  NCR: {
    coordinates: {
      latitude: 37.319,
      longitude: -121.864,
    },
    location: "NorCal",
    name: "Rumble",
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
  VEG: {
    coordinates: {
      latitude: 36.019,
      longitude: -115.081
    },
    location: "Vegas",
    name: "Thrill",
  },
  WAS: {
    coordinates: {
      latitude: 38.847,
      longitude: -76.991
    },
    location: "D.C.",
    name: "MLV",
  },
}