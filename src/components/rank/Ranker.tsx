import { useState } from "react";
import { api } from "~/utils/api";
import { cn } from "~/utils/cn";
import { z } from "zod";
import { useRankContext } from "~/hooks/useRanker";
import { useAuthContext } from "~/hooks/useAuthContext";
import { MoveRight, MoveLeft, MoveUp, MoveDown } from "lucide-react";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";
import { Button } from "../ui/button";
import { type SportType } from "~/data/SiteData";
import { NullBook } from "~/types/StyleBook";
import {
  createRankSchema,
  type CreateRankInput,
} from "~/server/api/rank/schema";
import { CFLstyleData } from "~/data/CFL/CFLstyleData";
import { F1styleData } from "~/data/F1/2024/F1styleData24";
import { MLBstyleData } from "~/data/MLB/MLBstyleData";
import { NBAstyleData } from "~/data/NBA/NBAstyleData";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import { NHLstyleData } from "~/data/NHL/NHLstyleData";
import { WNBAstyleData } from "~/data/WNBA/WNBAstyleData";
import { CFLteamData, cflTeamsRanked } from "~/data/CFL/CFLdata";
import {
  driverCodes2024,
  driverNames2024,
  driverToConstructor2024,
} from "~/data/F1/2024/F1data24";
import { MLBteamData, mlbTeamsRanked } from "~/data/MLB/MLBdata";
import { NBAteamData, nbaTeamsRanked } from "~/data/NBA/NBAdata";
import { NFLteamData, nflTeamsRanked } from "~/data/NFL/NFLdata";
import { NHLteamData, nhlTeamsRanked } from "~/data/NHL/NHLdata";
import { WNBAteamData, wnbaTeamsRanked } from "~/data/WNBA/WNBAdata";

interface RankerRowProps {
  unRankedEntry: string | null;
  rankedEntry: string | null;
  index: number;
  sport: SportType;
}

const CFLenum = z.enum(cflTeamsRanked);
const F1enum = z.enum(driverCodes2024);
const MLBenum = z.enum(mlbTeamsRanked);
const NBAenum = z.enum(nbaTeamsRanked);
const NFLenum = z.enum(nflTeamsRanked);
const NHLenum = z.enum(nhlTeamsRanked);
const WNBAenum = z.enum(wnbaTeamsRanked);

const RankerRow: React.FC<RankerRowProps> = (props: RankerRowProps) => {
  const { unRankedEntry, rankedEntry, index, sport } = props;
  const [newRank, setNewRank] = useState<string>("");
  const [reRank, setReRank] = useState<string>("");
  const { rankDispatch } = useRankContext();
  let nue;
  let nre;
  let auStyle = NullBook;
  let arStyle = NullBook;
  const auText = { short: "", long: "" };
  const arText = { short: "", long: "" };

  switch (sport) {
    case "F1":
      const midUnrankedEntry = unRankedEntry
        ? F1enum.parse(unRankedEntry)
        : null;
      nue = midUnrankedEntry ? driverToConstructor2024(midUnrankedEntry) : null;
      auStyle = nue ? F1styleData[nue] : NullBook;
      break;
    case "CFL":
      nue = unRankedEntry ? CFLenum.parse(unRankedEntry) : null;
      auStyle = nue ? CFLstyleData[nue] : NullBook;
      auText.long = nue
        ? CFLteamData[nue].location + " " + CFLteamData[nue].name
        : "";
      auText.short = nue ? CFLteamData[nue].name : "";
      nre = rankedEntry ? CFLenum.parse(rankedEntry) : null;
      arStyle = nre ? CFLstyleData[nre] : NullBook;
      arText.long = nre
        ? CFLteamData[nre].location + " " + CFLteamData[nre].name
        : "";
      arText.short = nre ? CFLteamData[nre].name : "";
      break;
    case "MLB":
      nue = unRankedEntry ? MLBenum.parse(unRankedEntry) : null;
      auStyle = nue ? MLBstyleData[nue] : NullBook;
      auText.long = nue
        ? MLBteamData[nue].location + " " + MLBteamData[nue].name
        : "";
      auText.short = nue ? MLBteamData[nue].name : "";
      nre = rankedEntry ? MLBenum.parse(rankedEntry) : null;
      arStyle = nre ? MLBstyleData[nre] : NullBook;
      arText.long = nre
        ? MLBteamData[nre].location + " " + MLBteamData[nre].name
        : "";
      arText.short = nre ? MLBteamData[nre].name : "";
      break;
    case "NBA":
      nue = unRankedEntry ? NBAenum.parse(unRankedEntry) : null;
      auStyle = nue ? NBAstyleData[nue] : NullBook;
      auText.long = nue
        ? NBAteamData[nue].location + " " + NBAteamData[nue].name
        : "";
      auText.short = nue ? NBAteamData[nue].name : "";
      nre = rankedEntry ? NBAenum.parse(rankedEntry) : null;
      arStyle = nre ? NBAstyleData[nre] : NullBook;
      arText.long = nre
        ? NBAteamData[nre].location + " " + NBAteamData[nre].name
        : "";
      arText.short = nre ? NBAteamData[nre].name : "";
      break;
    case "NFL":
      nue = unRankedEntry ? NFLenum.parse(unRankedEntry) : null;
      auStyle = nue ? NFLstyleData[nue] : NullBook;
      auText.long = nue
        ? NFLteamData[nue].location + " " + NFLteamData[nue].name
        : "";
      auText.short = nue ? NFLteamData[nue].name : "";
      nre = rankedEntry ? NFLenum.parse(rankedEntry) : null;
      arStyle = nre ? NFLstyleData[nre] : NullBook;
      arText.long = nre
        ? NFLteamData[nre].location + " " + NFLteamData[nre].name
        : "";
      arText.short = nre ? NFLteamData[nre].name : "";
      break;
    case "NHL":
      nue = unRankedEntry ? NHLenum.parse(unRankedEntry) : null;
      auStyle = nue ? NHLstyleData[nue] : NullBook;
      auText.long = nue
        ? NHLteamData[nue].location + " " + NHLteamData[nue].name
        : "";
      auText.short = nue ? NHLteamData[nue].name : "";
      nre = rankedEntry ? NHLenum.parse(rankedEntry) : null;
      arStyle = nre ? NHLstyleData[nre] : NullBook;
      arText.long = nre
        ? NHLteamData[nre].location + " " + NHLteamData[nre].name
        : "";
      arText.short = nre ? NHLteamData[nre].name : "";
      break;
    case "WNBA":
      nue = unRankedEntry ? WNBAenum.parse(unRankedEntry) : null;
      auStyle = nue ? WNBAstyleData[nue] : NullBook;
      auText.long = nue
        ? WNBAteamData[nue].location + " " + WNBAteamData[nue].name
        : "";
      auText.short = nue ? WNBAteamData[nue].name : "";
      nre = rankedEntry ? WNBAenum.parse(rankedEntry) : null;
      arStyle = nre ? WNBAstyleData[nre] : NullBook;
      arText.long = nre
        ? WNBAteamData[nre].location + " " + WNBAteamData[nre].name
        : "";
      arText.short = nre ? WNBAteamData[nre].name : "";
      break;
  }

  return (
    <TableRow className="border-b-2 border-gray-200 font-semibold last:border-0">
      {nue ? (
        <>
          <TableCell
            className={cn(
              "-pr-2 hidden h-6 w-52 whitespace-nowrap pl-2 sm:block",
              {
                [auStyle.primaryBackground]: true,
                [auStyle.simpleText]: true,
              }
            )}
          >
            {auText.long}
          </TableCell>
          <TableCell
            className={cn("-pr-2 h-6 w-24 whitespace-nowrap pl-2 sm:hidden", {
              [auStyle.primaryBackground]: true,
              [auStyle.simpleText]: true,
            })}
          >
            {auText.short}
          </TableCell>
        </>
      ) : (
        <TableCell>
          <div
            className={cn(
              "-pr-2 h-6 w-24 whitespace-nowrap bg-nfl/30 py-0 pl-2 sm:w-52"
            )}
          ></div>
        </TableCell>
      )}
      <TableCell>
        <div className="flex justify-center overflow-hidden rounded bg-nfl">
          <input
            type="number"
            min={1}
            max={32}
            className="h-6 w-6 bg-gray-100 text-center sm:w-10"
            onChange={(e) => {
              const inputRank = e.target.value;
              setNewRank(inputRank);
            }}
            value={newRank}
          />
          <button
            className="px-1 text-white"
            onClick={() => {
              rankDispatch({
                type: "RANK_ENTRY",
                payload: {
                  entry: unRankedEntry,
                  rank: parseInt(newRank),
                },
              });
              setNewRank("");
            }}
          >
            <MoveRight />
          </button>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex justify-between">
          <button
            className="rounded px-1 text-nfl"
            onClick={() => {
              rankDispatch({
                type: "UNRANK_ENTRY",
                payload: {
                  entry: rankedEntry,
                  rank: index,
                },
              });
            }}
          >
            <MoveLeft />
          </button>
          <span className="px-1 text-center text-sm font-bold">
            {index + 1}
          </span>
        </div>
      </TableCell>
      {nre ? (
        <>
          <TableCell
            className={cn(
              "-pr-2 hidden h-6 w-52 whitespace-nowrap pl-2 sm:block",
              {
                [arStyle.primaryBackground]: true,
                [arStyle.simpleText]: true,
              }
            )}
          >
            {arText.long}
          </TableCell>
          <TableCell
            className={cn("-pr-2 h-6 w-24 whitespace-nowrap pl-2 sm:hidden", {
              [arStyle.primaryBackground]: true,
              [arStyle.simpleText]: true,
            })}
          >
            {arText.short}
          </TableCell>
        </>
      ) : (
        <TableCell>
          <div
            className={cn(
              "-pr-2 h-6 w-24 whitespace-nowrap bg-nfl/30 py-0 pl-2 sm:w-52"
            )}
          ></div>
        </TableCell>
      )}
      <TableCell>
        <div className="flex justify-center overflow-hidden rounded bg-nfl">
          <div className="flex h-6 justify-between text-sm">
            <input
              type="number"
              min={1}
              max={32}
              className="hidden h-6 w-6 bg-gray-100 text-center sm:block sm:w-10"
              onChange={(e) => {
                const inputRank = e.target.value;
                setReRank(inputRank);
              }}
              value={reRank}
            />
            <button
              className="hidden px-1 text-white sm:block"
              onClick={() => {
                rankDispatch({
                  type: "RERANK_ENTRY",
                  payload: {
                    entry: rankedEntry,
                    rank: parseInt(reRank),
                    prevRank: index,
                  },
                });
                setReRank("");
              }}
            >
              <MoveRight />
            </button>
            <button
              className="h-6 px-0.5 text-xs text-white disabled:bg-white/50"
              disabled={index === 0}
              onClick={() => {
                rankDispatch({
                  type: "MOVE_UP",
                  payload: {
                    entry: rankedEntry,
                    rank: index,
                  },
                });
              }}
            >
              <MoveUp size={20} />
            </button>
            <button
              className="h-6 px-0.5 text-xs text-white disabled:bg-white/50"
              disabled={index === 31}
              onClick={() => {
                rankDispatch({
                  type: "MOVE_DOWN",
                  payload: {
                    entry: rankedEntry,
                    rank: index,
                  },
                });
              }}
            >
              <MoveDown size={20} />
            </button>
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
};

type RankerProps = {
  sport: SportType;
};

const Ranker: React.FC<RankerProps> = (props: RankerProps) => {
  const { rankState, rankDispatch } = useRankContext();
  const { unRankedEntries, rankedEntries } = rankState;
  const { sport } = props;

  const { authState } = useAuthContext();
  const { user } = authState;

  const postRank = api.rank.createRank.useMutation();

  const handleSubmit = () => {
    const order = rankedEntries as string[];
    if (user) {
      const { userId, username, email } = user;
      const rankPost: CreateRankInput = {
        sport,
        order,
        client: {
          userId,
          username,
          email,
        },
      };
      const rankValidation = createRankSchema.safeParse(rankPost);
      if (rankValidation) {
        postRank.mutate({ ...rankPost });
      }
    }
  };

  const rows = unRankedEntries.map((unRankedEntry, index) => {
    const rankedEntry: string | null = rankedEntries[index] ?? null;

    return (
      <RankerRow
        unRankedEntry={unRankedEntry}
        rankedEntry={rankedEntry}
        sport={sport}
        index={index}
        key={index}
      />
    );
  });

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
        Rank NFL Teams
      </h1>
      <Table className="w-min text-xs md:text-base">
        <TableBody>{rows}</TableBody>
      </Table>
      <div className="flex justify-center">
        <Button
          className="m-1"
          variant={"nfl"}
          onClick={() => {
            rankState.rankedEntries.map((entry, index) => {
              if (entry) {
                rankDispatch({
                  type: "UNRANK_ENTRY",
                  payload: { entry, rank: index },
                });
              }
            });
          }}
        >
          RESET
        </Button>
        <Button
          className="m-1"
          disabled={rankedEntries.includes(null)}
          variant={"nfl"}
          onClick={() => {
            handleSubmit();
          }}
        >
          SAVE
        </Button>
      </div>
    </div>
  );
};

export default Ranker;
