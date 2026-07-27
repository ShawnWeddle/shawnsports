import type { NBATeamType } from "../NBAdata";

type LotteryBallType = {
  type: "Ball" | "Pad",
  team?: NBATeamType,
  width?: number
}

export const createBallList = (balls: NBATeamType[] ) => {
  const lotteryBalls: LotteryBallType[] = [];
  balls.forEach((team) => {
    lotteryBalls.push({
      type: "Ball",
      team,
    })
  })

  const paddingInfo: [number, number][] = [
    [0,3],
    [5,3],
    [6,2],
    [12,2],
    [13,1],
    [20,1],
    [28,1],
    [35,1],
    [36,2],
    [42,2],
    [43,3],
    [48,3],
  ];

  paddingInfo.forEach((input) => {
    lotteryBalls.splice(input[0], 0, {
      type: "Pad",
      width: input[1],
    })
  })

  return lotteryBalls;
}

export const ballList = [
  //Row 1
  { type: "Pad", width: 3},
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Pad", width: 3},
  //Row 2
  { type: "Pad", width: 2},
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Pad", width: 2},
  //Row 3
  { type: "Pad", width: 1},
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Pad", width: 1},
  //Row 4
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  //Row 5
  { type: "Pad", width: 1},
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Pad", width: 1},
  //Row 6
  { type: "Pad", width: 2},
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Pad", width: 2},
  //Row 7
  { type: "Pad", width: 3},
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Ball", color: "red" },
  { type: "Pad", width: 3},
]