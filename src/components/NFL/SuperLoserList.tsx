import { useState } from "react";
import { cn } from "~/utils/cn";
import { Dialog } from "../ui/dialog";
import DialogModalContent from "../Page/DialogModal";
import { Card, CardContent, CardHeader, CardDescription } from "../ui/card";
import { NFLteamData } from "~/data/NFL/NFLdata";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import { SuperBowlData } from "~/data/NFL/SuperBowlData";
import { SuperLoserData } from "~/data/NFL/SuperLoserData";
import { type SuperBowlType } from "~/types/ChampTypes";

const SuperLoserList: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeSuperBowl, setActiveSuperBowl] = useState<SuperBowlType | null>(
    null
  );

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
              "w-full border-x-2 px-1 text-center font-semibold first:rounded-t-lg first:border-t-2 last:rounded-b-lg last:border-b-2 sm:m-0.5 sm:rounded-lg sm:border-y-2",
              {
                [NFLstyleData[losingTeam].primaryBGstyle]: true,
                [NFLstyleData[losingTeam].secondaryBorderStyle]: true,
                [NFLstyleData[losingTeam].primaryPlainText]: true,
              }
            )}
          >
            {romanNumeral} - {NFLteamData[losingTeam].name}
          </button>
        );
      });
      return (
        <tr key={index} className="even:bg-nfl/10">
          <td className="px-1 text-center font-semibold">
            {firstName} {lastName}
          </td>
          <td>
            <div
              className={cn("m-1", {
                "sm:m-0 sm:grid sm:grid-cols-3 sm:gap-1": !inModal,
              })}
            >
              {lossList}
            </div>
          </td>
        </tr>
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
          <table>
            <tbody>{superLosers(activeSuperBowl, true)}</tbody>
          </table>
        </DialogModalContent>
      </Dialog>

      <div className="flex w-full justify-center">
        <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
          Super Losers
        </h1>
      </div>
      <Card className="m-2">
        <CardHeader>
          <CardDescription>
            <span className="font-semibold">Super Losers</span> are players who
            have not won a Super Bowl, but have played in and lost Super Bowls
            with more than one team.
          </CardDescription>
          <CardDescription>This list is likely incomplete.</CardDescription>
        </CardHeader>
      </Card>
      <table className="w-full sm:w-auto">
        <thead className="bg-nfl text-white">
          <tr>
            <th>Player</th>
            <th>Losses</th>
          </tr>
        </thead>
        <tbody>{superLosers(null, false)}</tbody>
      </table>
    </>
  );
};

export default SuperLoserList;
