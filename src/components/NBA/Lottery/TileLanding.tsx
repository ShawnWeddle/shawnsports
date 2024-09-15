import { cn } from "~/lib/utils";
import { useDrop } from "react-dnd";
import { NBAstyleData } from "~/data/NBA/NBAstyleData";
import { useNBALotteryContext } from "~/hooks/useNBALottery";
import { type NBATeamType } from "~/data/NBA/NBAdata";

interface TileLandingProps {
  place: number;
  team: NBATeamType | null;
  activeTeam: NBATeamType | null;
  setActiveTeam: React.Dispatch<React.SetStateAction<NBATeamType | null>>;
  isActive: boolean;
}

const TileLanding: React.FC<TileLandingProps> = (props: TileLandingProps) => {
  const { place, team, activeTeam, setActiveTeam, isActive } = props;

  const { nbaLotteryDispatch } = useNBALotteryContext();

  const [collectedProps, drop] = useDrop(() => ({
    accept: "team",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop: (item: { team: NBATeamType }) => {
      nbaLotteryDispatch({
        type: "RANK_TEAM",
        payload: { team: item.team, rank: place },
      });
      setActiveTeam(null);
    },
  }));

  return (
    <div
      ref={drop}
      className={cn("flex justify-start", {
        "bg-gray-400 outline outline-2 outline-nba": collectedProps.isOver,
      })}
    >
      <div
        className={cn(
          "my-1 ml-1 flex h-12 w-8 flex-col items-center justify-center rounded-l-lg bg-gray-200 text-gray-600"
        )}
      >
        {place}
      </div>
      {team ? (
        <button
          onClick={() => {
            nbaLotteryDispatch({
              type: "UNRANK_TEAM",
              payload: { team: team, rank: place - 1 },
            });
            setActiveTeam(null);
          }}
          className={cn(
            "my-1 mr-1 flex h-12 w-16 flex-col items-center justify-center rounded-r-lg bg-gray-200 text-gray-600",
            {
              [NBAstyleData[team].primaryBackground]: true,
              [NBAstyleData[team].secondaryText]: true,
            }
          )}
        >
          {team}
        </button>
      ) : (
        <button
          disabled={!isActive}
          onClick={() => {
            nbaLotteryDispatch({
              type: "RANK_TEAM",
              payload: { team: activeTeam, rank: place },
            });
            setActiveTeam(null);
          }}
          className={cn(
            "my-1 mr-1 flex h-12 w-16 flex-col items-center justify-center rounded-r-lg bg-gray-200 text-gray-600",
            { "bg-gray-400 hover:bg-gray-600": isActive }
          )}
        ></button>
      )}
    </div>
  );
};

export default TileLanding;
