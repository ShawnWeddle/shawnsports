import type { MapDataInputType } from "~/types/MapTypes";
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
        return BasicTag(d);
      case "NBA":
      case "NGL":
        if (team !== "MEX") {
          return BasketballTag(getNBAParentTeam(d));
        } else {
          return BasicTag(d);
        }
      case "MLB":
      case "AAA":
      case "AA":
      case "HA":
      case "SA":
        return BaseballTag(getMLBParentTeam(d));
      case "NHL":
      case "AHL":
      case "ECHL":
        return HockeyTag(getNHLParentTeam(d));
    }
  });
  return (
    <div className="rounded-lg bg-white p-1 shadow-lg">{teamInfoList}</div>
  );
};
