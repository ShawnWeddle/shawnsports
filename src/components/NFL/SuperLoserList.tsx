import { useState } from "react";
import { cn } from "~/lib/utils";
import { Dialog } from "../ui/dialog";
import DialogModalContent from "../Page/DialogModal";
import { Card, CardHeader, CardDescription, CardTitle } from "../ui/card";
import { NFLteamData } from "~/data/NFL/NFLdata";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import { SuperBowlData } from "~/data/NFL/SuperBowlData";
import { SuperLoserData } from "~/data/NFL/SuperLoserData";
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

const SuperLoserList: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeSuperBowl, setActiveSuperBowl] = useState<SuperBowlType | null>(
    null
  );

  const SBgridItems = SuperBowlData.map((game, index) => {
    const { losingTeam } = game;
    return (
      <button
        onClick={() => {
          setActiveSuperBowl(game);
          setDialogOpen(true);
        }}
        key={index}
        className={cn(
          "flex aspect-square items-center justify-center rounded-md border-2 text-sm font-semibold sm:text-base",
          {
            [NFLstyleData[losingTeam].primaryBackground]: true,
            [NFLstyleData[losingTeam].secondaryBorder]: true,
            [NFLstyleData[losingTeam].simpleText]: true,
          }
        )}
      >
        {losingTeam}
      </button>
    );
  }).reverse();

  const superLosers = (game: SuperBowlType | null, inModal: boolean) =>
    SuperLoserData.filter((player) => {
      if (!game) {
        return true;
      }
      let didPlay = false;
      player.losses.forEach((loss) => {
        if (
          game?.romanNumeral ===
          SuperBowlData[SuperBowlData.length - loss]?.romanNumeral
        ) {
          didPlay = true;
        }
      });
      return didPlay;
    }).map((player, index) => {
      const { firstName, lastName, losses } = player;
      const lossList = losses.map((loss, lIndex) => {
        const game = SuperBowlData[SuperBowlData.length - loss];
        if (!game) {
          return <></>;
        }
        const { losingTeam, romanNumeral } = game;
        return (
          <button
            key={lIndex}
            onClick={() => {
              setActiveSuperBowl(game);
              setDialogOpen(true);
            }}
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
            {firstName} {lastName}
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

  const modalNamer = (game: SuperBowlType | null) => {
    if (game && game.romanNumeral) {
      const { romanNumeral, winningTeam, losingTeam, score } = game;
      return {
        game: "Super Bowl " + romanNumeral,
        score:
          NFLteamData[winningTeam].name +
          " " +
          score +
          " " +
          NFLteamData[losingTeam].name,
      };
    } else {
      return {
        game: "",
        score: "",
      };
    }
  };

  //Checks whether any super losers played in the game
  const activeSBhasSL = superLosers(activeSuperBowl, true).length > 0;

  return (
    <>
      <Dialog
        open={dialogOpen}
        onOpenChange={(isOpen) => {
          if (isOpen === true) return;
          setDialogOpen(false);
        }}
      >
        <DialogModalContent
          title={modalNamer(activeSuperBowl).game}
          description={modalNamer(activeSuperBowl).score}
        >
          {activeSBhasSL ? (
            <Table>
              <TableBody>{superLosers(activeSuperBowl, true)}</TableBody>
            </Table>
          ) : (
            <div>No Super Losers played in this game</div>
          )}
        </DialogModalContent>
      </Dialog>
      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
        Super Losers
      </h1>
      <Card className="m-2">
        <CardHeader>
          <CardDescription>
            <span className="font-semibold">Super Losers</span> are players who
            have not won a Super Bowl, but have played in and lost Super Bowls
            with more than one team.
          </CardDescription>
          <CardDescription>
            I believe this list is complete for now, but I am not 100% sure.
          </CardDescription>
          <CardDescription>
            I estimate one or more players will join this list every year on
            average.
          </CardDescription>
        </CardHeader>
      </Card>
      <div className="flex justify-center">
        <Table className="w-full sm:w-auto">
          <TableHeader>
            <TableRowNoHover>
              <TableHead>Player</TableHead>
              <TableHead>Losses</TableHead>
            </TableRowNoHover>
          </TableHeader>
          <TableBody>{superLosers(null, false)}</TableBody>
        </Table>
      </div>
      <Card className="my-4 bg-nfl/10 p-1 shadow sm:p-4">
        <div className="grid grid-cols-10 gap-1">{SBgridItems}</div>
      </Card>
    </>
  );
};

export default SuperLoserList;
