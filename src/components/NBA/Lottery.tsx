import { cn } from "~/lib/utils";
import { ballList, createBallList } from "~/data/NBA/lottery/ballList";
import generateLottery, {
  exampleLotteryTeamList,
} from "~/data/NBA/lottery/newNBAlottery";
import { type NBATeamType } from "~/data/NBA/NBAdata";
import { NBAstyleData } from "~/styles/NBAstyleData";

const LotteryModule = () => {
  type PaddingProps = {
    width: number;
  };

  type CircleProps = {
    team: NBATeamType;
  };

  const allBalls = createBallList(generateLottery(exampleLotteryTeamList));

  const Circle: React.FC<CircleProps> = (props: CircleProps) => {
    const { team } = props;
    return (
      <div
        className={cn(
          "col-span-2 flex aspect-square w-12 items-center justify-center rounded-full border-2 border-gray-200",
          {
            [NBAstyleData[team].primaryBackground]: true,
            [NBAstyleData[team].secondaryBorder]: true,
            [NBAstyleData[team].simpleText]: true,
          }
        )}
      >
        <div>{team}</div>
      </div>
    );
  };

  const Padding: React.FC<PaddingProps> = (props: PaddingProps) => {
    const { width } = props;
    return (
      <div
        className={cn("", {
          "col-span-1": width === 1,
          "col-span-2": width === 2,
          "col-span-3": width === 3,
        })}
      ></div>
    );
  };

  const Squares = allBalls.map((square, index) => {
    if (square.type === "Pad") {
      return (
        <Padding key={"P-" + index.toString()} width={square.width ?? 0} />
      );
    } else if (square.type === "Ball") {
      return (
        <Circle key={"C-" + index.toString()} team={square.team ?? "DEN"} />
      );
    }
  });

  return (
    <div>
      <div className="grid grid-cols-14 gap-x-1">{Squares}</div>
    </div>
  );
};

export default LotteryModule;
