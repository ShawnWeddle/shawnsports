import { useState } from "react";
import { cn } from "~/lib/utils";
import {
  MoveRight,
  MoveLeft,
  MoveUp,
  MoveDown,
  ArrowRightLeft,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRowNoHover,
} from "~/components/ui/table";
import {
  type ConstructorName25Type,
  type DriverCode25Type,
  driverNames2025,
} from "~/data/F1/2025/F1data";
import { F1styleData, F1styleDataExt } from "~/data/F1/2025/F1styleData";
import {
  F1rank,
  initConstructorOrder,
  initDriverOrder,
  type ConstructorOrderType,
  type DriverOrderType,
} from "~/data/F1/2025/F1rank";
import { access } from "fs";

interface RowProps {
  team: ConstructorName25Type;
  drivers: [DriverCode25Type, DriverCode25Type];
  rank: number;
}

type ActiveRankingType = {
  driverOrder: DriverOrderType;
  constructorOrder: ConstructorOrderType;
};

const RankF1 = () => {
  const initData: ActiveRankingType = F1rank(
    {
      constructorOrder: initConstructorOrder,
      driverOrder: initDriverOrder,
    },
    {
      action: "NO_ACTION",
      team: "Red Bull",
    }
  );
  const [activeRanking, setActiveRanking] =
    useState<ActiveRankingType>(initData);

  const { constructorOrder, driverOrder } = activeRanking;

  const Row: React.FC<RowProps> = (props: RowProps) => {
    const { team, drivers, rank } = props;
    return (
      <TableRowNoHover className="border-b">
        <TableCell>
          <div
            className={cn("m-1 rounded p-1 text-center font-semibold", {
              "bg-yellow-200": rank === 1,
              "bg-gray-500": rank === 2,
              "bg-amber-600": rank === 3,
            })}
          >
            {rank}
          </div>
        </TableCell>
        <TableCell>
          <div
            className={cn("m-1 rounded p-1 text-center", {
              [F1styleData[team].primaryBackground]: true,
              [F1styleData[team].secondaryText]: true,
            })}
          >
            {team}
          </div>
        </TableCell>
        <TableCell>
          <div
            className={cn("m-1 rounded border p-1 text-center", {
              [F1styleDataExt[team].primaryBorder]: true,
            })}
          >
            <span className="hidden font-semibold sm:inline-block">
              {driverNames2025[drivers[0]].last}
            </span>
            <span className="font-bold sm:hidden">{drivers[0]}</span>
          </div>
        </TableCell>
        <TableCell>
          <button
            onClick={() => {
              setActiveRanking(
                F1rank(
                  {
                    driverOrder: activeRanking.driverOrder,
                    constructorOrder: activeRanking.constructorOrder,
                  },
                  { action: "DRIVER_SWAP", team }
                )
              );
            }}
            className={cn("m-1 flex justify-center rounded-full p-1", {
              [F1styleData[team].primaryBackgroundHover]: true,
              [F1styleData[team].secondaryTextHover]: true,
              [F1styleDataExt[team].primaryText]: true,
              [F1styleDataExt[team].primaryBorder]: true,
            })}
          >
            <ArrowRightLeft size={20} />
          </button>
        </TableCell>
        <TableCell>
          <div
            className={cn("m-1 rounded border p-1 text-center", {
              [F1styleDataExt[team].primaryBorder]: true,
            })}
          >
            <span className="hidden sm:inline-block">
              {driverNames2025[drivers[1]].last}
            </span>
            <span className="font-semibold sm:hidden">{drivers[1]}</span>
          </div>
        </TableCell>
        <TableCell className="flex justify-start">
          <button
            onClick={() => {
              setActiveRanking(
                F1rank(
                  {
                    driverOrder: activeRanking.driverOrder,
                    constructorOrder: activeRanking.constructorOrder,
                  },
                  { action: "TEAM_UP", team }
                )
              );
            }}
            className={cn("my-1 ml-1 rounded-l border px-0.5 py-1", {
              [F1styleData[team].primaryBackgroundHover]: true,
              [F1styleData[team].secondaryTextHover]: true,
              [F1styleDataExt[team].primaryText]: true,
              [F1styleDataExt[team].primaryBorder]: true,
            })}
          >
            <MoveUp size={20} />
          </button>
          <button
            onClick={() => {
              setActiveRanking(
                F1rank(
                  {
                    driverOrder: activeRanking.driverOrder,
                    constructorOrder: activeRanking.constructorOrder,
                  },
                  { action: "TEAM_DOWN", team }
                )
              );
            }}
            className={cn("my-1 mr-1 rounded-r border px-0.5 py-1", {
              [F1styleData[team].primaryBackgroundHover]: true,
              [F1styleData[team].secondaryTextHover]: true,
              [F1styleDataExt[team].primaryText]: true,
              [F1styleDataExt[team].primaryBorder]: true,
            })}
          >
            <MoveDown size={20} />
          </button>
        </TableCell>
      </TableRowNoHover>
    );
  };

  const Rows = constructorOrder.map((team, index) => {
    return (
      <Row
        key={index}
        rank={index + 1}
        team={team}
        drivers={driverOrder[team]}
      />
    );
  });
  return (
    <div className="m-4 flex justify-center">
      <Table>
        <TableBody>{Rows}</TableBody>
      </Table>
    </div>
  );
};

export default RankF1;
