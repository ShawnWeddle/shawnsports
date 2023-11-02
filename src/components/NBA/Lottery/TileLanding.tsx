import { cn } from "~/utils/cn";
import { useDrop } from "react-dnd";
import { NBAstyleData } from "~/data/NBA/NBAstyleData";
import { useNBALotteryContext } from "~/hooks/useNBALottery";
import { type NBATeamType } from "~/data/NBApickData";

interface TileLandingProps {
  place: number;
  team: NBATeamType | null;
}

const TileLanding: React.FC<TileLandingProps> = (props: TileLandingProps) => {
  const { place, team } = props;

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
          }}
          className={cn(
            "my-1 mr-1 flex h-12 w-16 flex-col items-center justify-center rounded-r-lg bg-gray-200 text-gray-600",
            {
              [NBAstyleData[team].primaryBGstyle]: true,
              [NBAstyleData[team].secondaryTextStyle]: true,
            }
          )}
        >
          {team}
        </button>
      ) : (
        <div
          className={cn(
            "my-1 mr-1 flex h-12 w-16 flex-col items-center justify-center rounded-r-lg bg-gray-200 text-gray-600"
          )}
        ></div>
      )}
    </div>
  );
};

export default TileLanding;
