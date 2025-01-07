import { cn } from "~/lib/utils";
import { type NFLTeamType } from "~/data/NFL/NFLdata";
import { NFLteamData } from "~/data/NFL/NFLdata";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";

const NFLPlayoffs: React.FC = () => {
  const TeamCard = (
    team: NFLTeamType,
    seed: number,
    direction: "AFC" | "NFC"
  ) => {
    return (
      <div className="flex shadow-lg">
        {direction === "AFC" && (
          <div className="flex flex-col justify-center rounded-l bg-white p-2 text-center text-2xl font-bold">
            {seed}
          </div>
        )}
        <div
          className={cn("flex-1 p-2 text-lg font-semibold", {
            [NFLstyleData[team].primaryBackground]: true,
            [NFLstyleData[team].secondaryText]: true,
            "rounded-l": direction === "NFC",
            "rounded-r": direction === "AFC",
          })}
        >
          <div>{NFLteamData[team].location}</div>
          <div>{NFLteamData[team].name}</div>
        </div>
        {direction === "NFC" && (
          <div className="flex flex-col justify-center rounded-r bg-white p-2 text-center text-2xl font-bold">
            {seed}
          </div>
        )}
      </div>
    );
  };

  const PlayoffGame = (
    awayTeam: NFLTeamType,
    homeTeam: NFLTeamType,
    seed: [number, number],
    direction: "AFC" | "NFC" | "SB"
  ) => {
    return (
      <div className="m-2 flex flex-col gap-2">
        {TeamCard(awayTeam, seed[0], direction === "SB" ? "AFC" : direction)}
        {TeamCard(homeTeam, seed[1], direction === "SB" ? "NFC" : direction)}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-7">
      <div className="flex flex-col justify-around gap-4">
        <div></div>
        {PlayoffGame("MIN", "LAR", [5, 4], "NFC")}
        {PlayoffGame("WAS", "TAM", [6, 3], "NFC")}
        {PlayoffGame("GNB", "PHI", [7, 2], "NFC")}
      </div>
      <div className="flex flex-col justify-around gap-4">
        {PlayoffGame("MIN", "DET", [5, 1], "NFC")}
        {PlayoffGame("TAM", "PHI", [3, 2], "NFC")}
      </div>
      <div className="flex flex-col justify-around gap-4">
        {PlayoffGame("PHI", "DET", [2, 1], "NFC")}
      </div>
      <div className="flex flex-col justify-around gap-4">
        {PlayoffGame("BAL", "DET", [3, 1], "SB")}
      </div>
      <div className="flex flex-col justify-around gap-4">
        {PlayoffGame("BAL", "KAN", [3, 1], "AFC")}
      </div>
      <div className="flex flex-col justify-around gap-4">
        {PlayoffGame("LAC", "KAN", [4, 1], "AFC")}
        {PlayoffGame("BAL", "BUF", [3, 2], "AFC")}
      </div>
      <div className="flex flex-col justify-around gap-4">
        <div></div>
        {PlayoffGame("LAC", "HOU", [5, 4], "AFC")}
        {PlayoffGame("PIT", "BAL", [6, 3], "AFC")}
        {PlayoffGame("DEN", "BUF", [7, 2], "AFC")}
      </div>
    </div>
  );
};

export default NFLPlayoffs;
