import { cn } from "~/utils/cn";
import type { NBATeamType } from "~/data/NBApickData";
import { NBAteamData } from "~/data/NBApickData";
import { NBAstyleData } from "~/data/NBA/NBAstyleData";
import { useDrag } from "react-dnd";
import { useNBALotteryContext } from "~/hooks/useNBALottery";

interface NBATeamTileProps {
  team: NBATeamType;
  activeTeam: NBATeamType | null;
  setActiveTeam: React.Dispatch<React.SetStateAction<NBATeamType | null>>;
}

const NBATeamTile: React.FC<NBATeamTileProps> = (props: NBATeamTileProps) => {
  const { team, activeTeam, setActiveTeam } = props;
  const { location, name } = NBAteamData[team];
  const { primaryPlainText, primaryBGstyle, secondaryBorderStyle } =
    NBAstyleData[team];

  const { nbaLotteryState, nbaLotteryDispatch } = useNBALotteryContext();
  const { rankedTeams } = nbaLotteryState;

  const [collected, drag] = useDrag(() => ({
    type: "team",
    item: { team },
  }));

  const isColored = !rankedTeams.includes(team);

  return isColored ? (
    <button
      onClick={() => {
        setActiveTeam(team === activeTeam ? null : team);
      }}
      ref={drag}
      className={cn(
        "m-1 flex h-16 w-28 flex-col items-center justify-center border-2",
        {
          [primaryPlainText]: true,
          [primaryBGstyle]: true,
          [secondaryBorderStyle]: true,
        }
      )}
    >
      <p className="whitespace-nowrap">{location}</p>
      <p>{name}</p>
    </button>
  ) : (
    <div
      className={cn(
        "m-1 flex h-16 w-28 flex-col items-center justify-center border-2 border-gray-600 bg-gray-200 text-nba"
      )}
    >
      <p className="whitespace-nowrap">{location}</p>
      <p>{name}</p>
    </div>
  );
};

export default NBATeamTile;
