import { useState } from "react";
import { cn } from "~/lib/utils";
import { Dialog } from "../ui/dialog";
import DialogModalContent from "../Page/DialogModal";
import { Card, CardHeader, CardDescription, CardTitle } from "../ui/card";
import { NFLteamData } from "~/data/NFL/NFLdata";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import { SuperBowlData } from "~/data/NFL/SuperBowlData";
import { SuperLoserData } from "~/data/NFL/SuperLoserData";
import { manyMen } from "~/data/NFL/ManyMen";
import { type SuperBowlType } from "~/types/ChampTypes";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableRowNoHover,
} from "~/components/ui/table";

const SuperMenList: React.FC = () => {
  const manyMenList = (game: SuperBowlType | null, inModal: boolean) =>
    manyMen.map((player, index) => {
      const { name, wins, losses } = player;
      const winList = wins.map((win, wIndex) => {
        const game = SuperBowlData[2025 - win.year];
        if (!game) {
          return <></>;
        }
        const { winningTeam, romanNumeral } = game;
        return (
          <button
            key={wIndex}
            className={cn(
              "w-full border-x-2 px-1 text-center font-semibold first:rounded-t-lg first:border-t-2 last:rounded-b-lg last:border-b-2",
              {
                [NFLstyleData[winningTeam].primaryBackground]: true,
                [NFLstyleData[winningTeam].secondaryBorder]: true,
                [NFLstyleData[winningTeam].simpleText]: true,
                "sm:rounded-lg sm:border-y-2": !inModal,
              }
            )}
          >
            {romanNumeral} - {NFLteamData[winningTeam].name}
          </button>
        );
      });
      const lossList = losses.map((loss, lIndex) => {
        const game = SuperBowlData[2025 - loss.year];
        if (!game) {
          return <></>;
        }
        const { losingTeam, romanNumeral } = game;
        return (
          <button
            key={lIndex}
            className={cn(
              "w-full border-x-2 px-1 text-center font-semibold first:rounded-t-lg first:border-t-2 last:rounded-b-lg last:border-b-2",
              {
                [NFLstyleData[losingTeam].primaryBackground]: true,
                [NFLstyleData[losingTeam].secondaryBorder]: true,
                [NFLstyleData[losingTeam].simpleText]: true,
                "sm:rounded-lg sm:border-y-2": !inModal,
              }
            )}
          >
            {romanNumeral} - {NFLteamData[losingTeam].name}
          </button>
        );
      });
      return (
        <TableRow
          key={index}
          className={cn("odd:bg-nfl/10 hover:bg-nfl/20", {
            "text-sm": inModal,
          })}
        >
          <TableCell className="px-1 text-center font-semibold">
            {name}
          </TableCell>
          <TableCell>
            <div
              className={cn("p-0.5", {
                "sm:grid sm:grid-cols-3 sm:gap-1": !inModal,
              })}
            >
              {winList}
            </div>
          </TableCell>
          <TableCell>
            <div
              className={cn("p-0.5", {
                "sm:grid sm:grid-cols-3 sm:gap-1": !inModal,
              })}
            >
              {lossList}
            </div>
          </TableCell>
        </TableRow>
      );
    });

  return (
    <>
      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">Many Men</h1>
      <Card className="m-2">
        <CardHeader>
          <CardDescription>
            <span className="font-semibold">Many Men</span> are players who have
            played in the Super Bowl for two or more teams.
          </CardDescription>
        </CardHeader>
      </Card>
      <div className="flex justify-center">
        <Table className="w-full sm:w-auto">
          <TableHeader>
            <TableRowNoHover>
              <TableHead>Player</TableHead>
              <TableHead>Wins</TableHead>
              <TableHead>Losses</TableHead>
            </TableRowNoHover>
          </TableHeader>
          <TableBody>{manyMenList(null, false)}</TableBody>
        </Table>
      </div>
    </>
  );
};

export default SuperMenList;
