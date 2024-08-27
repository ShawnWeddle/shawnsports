// import { createContext, useReducer } from "react";
// import { type SportType } from "~/data/SiteData";
// import {
//   type DriverCode24Type,
//   driverCodes2024,
// } from "~/data/F1/2024/F1data24";
// import { type CFLTeamType, cflTeamsRanked } from "~/data/CFL/CFLdata";
// import { type MLBTeamType, mlbTeamsRanked } from "~/data/MLB/MLBdata";
// import { type NBATeamType, nbaTeamsRanked } from "~/data/NBA/NBAdata";
// import { type NFLTeamType, nflTeamsRanked } from "~/data/NFL/NFLdata";
// import { type NHLTeamType, nhlTeamsRanked } from "~/data/NHL/NHLdata";
// import { type WNBATeamType, wnbaTeamsRanked } from "~/data/WNBA/WNBAdata";
// import { nullArray } from "~/utils/nullArrays";

// export const rankContext = createContext<ContextType | null>(null);

// type ContextType = {
//   rankState: RankReducerState;
//   rankDispatch: React.Dispatch<RankReducerAction>;
// };

// type RankContextProviderProps = {
//   children: React.ReactNode;
// };

// type RankReducerState =
//   | {
//       sport: "F1";
//       unRankedEntries: (DriverCode24Type | null)[];
//       rankedEntries: (DriverCode24Type | null)[];
//     }
//   | {
//       sport: "CFL";
//       unRankedEntries: (CFLTeamType | null)[];
//       rankedEntries: (CFLTeamType | null)[];
//     }
//   | {
//       sport: "MLB";
//       unRankedEntries: (MLBTeamType | null)[];
//       rankedEntries: (MLBTeamType | null)[];
//     }
//   | {
//       sport: "NBA";
//       unRankedEntries: (NBATeamType | null)[];
//       rankedEntries: (NBATeamType | null)[];
//     }
//   | {
//       sport: "NHL";
//       unRankedEntries: (NHLTeamType | null)[];
//       rankedEntries: (NHLTeamType | null)[];
//     }
//   | {
//       sport: "NFL";
//       unRankedEntries: (NHLTeamType | null)[];
//       rankedEntries: (NHLTeamType | null)[];
//     }
//   | {
//       sport: "WNBA";
//       unRankedEntries: (WNBATeamType | null)[];
//       rankedEntries: (WNBATeamType | null)[];
//     };

// type RankPayloadType =
//   | {
//       sport: "F1";
//       entry: DriverCode24Type | null;
//       rank: number;
//       prevRank?: number;
//     }
//   | {
//       sport: "CFL";
//       entry: CFLTeamType | null;
//       rank: number;
//       prevRank?: number;
//     }
//   | {
//       sport: "MLB";
//       entry: MLBTeamType | null;
//       rank: number;
//       prevRank?: number;
//     }
//   | {
//       sport: "NBA";
//       entry: NBATeamType | null;
//       rank: number;
//       prevRank?: number;
//     }
//   | {
//       sport: "NHL";
//       entry: NHLTeamType | null;
//       rank: number;
//       prevRank?: number;
//     }
//   | {
//       sport: "NFL";
//       entry: NFLTeamType | null;
//       rank: number;
//       prevRank?: number;
//     }
//   | {
//       sport: "WNBA";
//       entry: WNBATeamType | null;
//       rank: number;
//       prevRank?: number;
//     };

// type RankReducerAction = {
//   type:
//     | "RANK_ENTRY"
//     | "UNRANK_ENTRY"
//     | "RERANK_ENTRY"
//     | "MOVE_UP"
//     | "MOVE_DOWN";
//   payload: RankPayloadType;
// };

// const fullRank = (sport: SportType) => {
//   switch (sport) {
//     case "CFL":
//       const CFLmap = new Map<CFLTeamType, number>();
//       cflTeamsRanked.forEach((entry, index) => {
//         CFLmap.set(entry, index);
//       });
//       return CFLmap;
//     case "F1":
//       const F1map = new Map<DriverCode24Type, number>();
//       driverCodes2024.forEach((entry, index) => {
//         F1map.set(entry, index);
//       });
//       return F1map;
//     case "MLB":
//       const MLBmap = new Map<MLBTeamType, number>();
//       mlbTeamsRanked.forEach((entry, index) => {
//         MLBmap.set(entry, index);
//       });
//       return MLBmap;
//     case "NBA":
//       const NBAmap = new Map<NBATeamType, number>();
//       nbaTeamsRanked.forEach((entry, index) => {
//         NBAmap.set(entry, index);
//       });
//       return NBAmap;
//     case "NFL":
//       const NFLmap = new Map<NFLTeamType, number>();
//       nflTeamsRanked.forEach((entry, index) => {
//         NFLmap.set(entry, index);
//       });
//       return NFLmap;
//     case "NHL":
//       const NHLmap = new Map<NHLTeamType, number>();
//       nhlTeamsRanked.forEach((entry, index) => {
//         NHLmap.set(entry, index);
//       });
//       return NHLmap;
//     case "WNBA":
//       const WNBAmap = new Map<WNBATeamType, number>();
//       wnbaTeamsRanked.forEach((entry, index) => {
//         WNBAmap.set(entry, index);
//       });
//       return WNBAmap;
//   }
// };

// export const RankReducer = (
//   state: RankReducerState,
//   action: RankReducerAction,
//   sport: SportType
// ) => {
//   switch (action.type) {
//     case "RANK_ENTRY": {
//       const { unRankedEntries, rankedEntries } = state;
//       const { entry, rank } = action.payload;
//       const newRank = rank - 1;
//       if (newRank > -1 && newRank < 32 && entry !== null) {
//         // Remove from Unranked
//         const newUnRankedEntries = [...unRankedEntries];
//         const eRank = fullRank(sport).get(entry) ?? 100;
//         newUnRankedEntries[eRank] = null;

//         // Add to Ranked
//         const newRankedEntries = [...rankedEntries];
//         if (newRankedEntries[newRank] !== null) {
//           let endIndex = newRank;
//           for (true; endIndex < newRankedEntries.length; endIndex++) {
//             if (newRankedEntries[endIndex] === null) {
//               break;
//             }
//           }
//           if (endIndex === 32) {
//             let startIndex = newRank;
//             for (true; startIndex > 0; startIndex--) {
//               if (newRankedEntries[startIndex] === null) {
//                 break;
//               }
//             }
//             newRankedEntries.splice(startIndex, 1);
//             newRankedEntries.splice(newRank, 0, null);
//           } else {
//             newRankedEntries.splice(endIndex, 1);
//             newRankedEntries.splice(newRank, 0, null);
//           }
//         }
//         newRankedEntries[newRank] = entry;

//         const newState = {
//           unRankedEntries: newUnRankedEntries,
//           rankedEntries: newRankedEntries,
//         };
//         return newState;
//       } else {
//         return {
//           unRankedEntries: [...unRankedEntries],
//           rankedEntries: [...rankedEntries],
//         };
//       }
//     }
//     case "UNRANK_ENTRY": {
//       const { unRankedEntries, rankedEntries } = state;
//       const { entry, rank } = action.payload;
//       if (rank > -1 && rank < 32 && entry !== null) {
//         // Remove from Ranked
//         const newRankedEntries = [...rankedEntries];
//         newRankedEntries[rank] = null;

//         // Add to Unranked
//         const newUnRankedEntries = [...unRankedEntries];
//         const eRank = fullRank.get(entry) ?? 100;
//         newUnRankedEntries[eRank] = entry;

//         const newState = {
//           unRankedEntries: newUnRankedEntries,
//           rankedEntries: newRankedEntries,
//         };
//         return newState;
//       } else {
//         return {
//           unRankedEntries: [...unRankedEntries],
//           rankedEntries: [...rankedEntries],
//         };
//       }
//     }
//     case "RERANK_ENTRY": {
//       const { unRankedEntries, rankedEntries } = state;
//       const { entry, rank, prevRank } = action.payload;
//       const newRank = rank - 1;
//       if (
//         newRank > -1 &&
//         newRank < 32 &&
//         entry !== null &&
//         prevRank !== undefined
//       ) {
//         // Remove from Ranked
//         const newRankedEntries = [...rankedEntries];
//         newRankedEntries[prevRank] = null;

//         // Add to Ranked
//         if (newRankedEntries[newRank] !== null) {
//           let endIndex = newRank;
//           for (true; endIndex < newRankedEntries.length; endIndex++) {
//             if (newRankedEntries[endIndex] === null) {
//               break;
//             }
//           }
//           if (endIndex === 32) {
//             let startIndex = newRank;
//             for (true; startIndex > 0; startIndex--) {
//               if (newRankedEntries[startIndex] === null) {
//                 break;
//               }
//             }
//             newRankedEntries.splice(startIndex, 1);
//             newRankedEntries.splice(newRank, 0, null);
//           } else {
//             newRankedEntries.splice(endIndex, 1);
//             newRankedEntries.splice(newRank, 0, null);
//           }
//         }
//         newRankedEntries[newRank] = entry;
//         const newState = {
//           unRankedEntries: [...unRankedEntries],
//           rankedEntries: newRankedEntries,
//         };
//         return newState;
//       } else {
//         return {
//           unRankedEntries: [...unRankedEntries],
//           rankedEntries: [...rankedEntries],
//         };
//       }
//     }
//     case "MOVE_UP": {
//       const { unRankedEntries, rankedEntries } = state;
//       const { entry, rank } = action.payload;
//       if (rank > -1 && rank < 32 && entry !== null) {
//         const newRankedEntries = [...rankedEntries];
//         const entry1 = newRankedEntries[rank];
//         const entry2 = newRankedEntries[rank - 1];
//         newRankedEntries[rank] = entry2 ?? null;
//         newRankedEntries[rank - 1] = entry1 ?? null;

//         const newState = {
//           unRankedEntries: [...unRankedEntries],
//           rankedEntries: newRankedEntries,
//         };
//         return newState;
//       } else {
//         return {
//           unRankedEntries: [...unRankedEntries],
//           rankedEntries: [...rankedEntries],
//         };
//       }
//     }
//     case "MOVE_DOWN": {
//       const { unRankedEntries, rankedEntries } = state;
//       const { entry, rank } = action.payload;
//       if (rank > -1 && rank < 32 && entry !== null) {
//         const newRankedEntries = [...rankedEntries];
//         const entry1 = newRankedEntries[rank];
//         const entry2 = newRankedEntries[rank + 1];
//         newRankedEntries[rank] = entry2 ?? null;
//         newRankedEntries[rank + 1] = entry1 ?? null;

//         const newState = {
//           unRankedEntries: [...unRankedEntries],
//           rankedEntries: newRankedEntries,
//         };
//         return newState;
//       } else {
//         return {
//           unRankedEntries: [...unRankedEntries],
//           rankedEntries: [...rankedEntries],
//         };
//       }
//     }
//     default:
//       return state;
//   }
// };

// export const RankContextProvider = ({ children }: RankContextProviderProps) => {
//   const [rankState, rankDispatch] = useReducer(RankReducer, {
//     unRankedEntries: [...entriesRanked],
//     rankedEntries: [...nullArray32],
//   });

//   return (
//     <RankContext.Provider value={{ rankState, rankDispatch }}>
//       {children}
//     </RankContext.Provider>
//   );
// };
