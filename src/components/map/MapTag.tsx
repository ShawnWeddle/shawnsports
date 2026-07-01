import type { MapDataInputType } from "~/types/MapTypes";
import { Fragment } from "react";
import { BaseballTag } from "./BaseballTag";
import { HockeyTag } from "./HockeyTag";
import { BasketballTag } from "./BasketballTag";
import { BasicTag } from "./BasicTag";
import { getMLBParentTeam } from "~/utils/getBaseballArc";
import { getNBAParentTeam } from "~/utils/getBasketballArc";
import { getNHLParentTeam } from "~/utils/getHockeyArc";

type MapTagProps = {
  data: MapDataInputType[];
};

const Break: React.FC = () => {
  return (
    <div className="flex w-full items-center justify-center py-0.5">
      <div className="h-0.5 w-full rounded-full bg-gray-400"></div>
    </div>
  );
};

export const MapTag: React.FC<MapTagProps> = (props: MapTagProps) => {
  const { data } = props;
  const teamInfoList = data.map((d, index) => {
    const { league, team } = d;
    switch (league) {
      case "NFL":
      case "CFL":
      case "IFL":
      case "UFL":
      case "WNBA":
      case "PWHL":
      case "MLS":
        return (
          <Fragment key={d.league + index.toString()}>
            {index !== 0 && <Break />}
            <BasicTag {...d} />
          </Fragment>
        );
      case "NBA":
      case "NGL":
        if (team !== "MEX") {
          return (
            <Fragment key={d.league + index.toString()}>
              {index !== 0 && <Break />}
              <BasketballTag {...getNBAParentTeam(d)} />
            </Fragment>
          );
        } else {
          return (
            <Fragment key={d.league + index.toString()}>
              {index !== 0 && <Break />}
              <BasicTag {...d} />
            </Fragment>
          );
        }
      case "MLB":
      case "AAA":
      case "AA":
      case "HA":
      case "SA":
        return (
          <Fragment key={d.league + index.toString()}>
            {index !== 0 && <Break />}
            <BaseballTag {...getMLBParentTeam(d)} />
          </Fragment>
        );
      case "NHL":
      case "AHL":
      case "ECHL":
        return (
          <Fragment key={d.league + index.toString()}>
            {index !== 0 && <Break />}
            <HockeyTag {...getNHLParentTeam(d)} />
          </Fragment>
        );
    }
  });
  return (
    <div className="rounded-lg bg-white p-1 shadow-lg">{teamInfoList}</div>
  );
};
