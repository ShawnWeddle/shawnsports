import { cn } from "~/lib/utils";
import type { MapDataInputType } from "~/types/MapTypes";
import { markerData } from "~/data/map/allMapData";
import { CFLstyleData } from "~/data/CFL/CFLstyleData";
import { MLSstyleData } from "~/data/MLS/MLSstyleData";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import { WNBAstyleData } from "~/data/WNBA/WNBAstyleData";
import { PWHLstyleData } from "~/styles/PWHLstyleData";
import { MLVstyleData } from "~/data/MLV/MLVstyleData";

export const BasicTag: React.FC<MapDataInputType> = (
  props: MapDataInputType
) => {
  const { league, team } = props;
  const { location, name } = markerData(props);
  const reverseName = markerData(props).reverse === true;
  switch (league) {
    case "NFL":
      return (
        <p
          className={cn("rounded border-2 px-1 py-1", {
            [NFLstyleData[team].primaryBackground]: true,
            [NFLstyleData[team].secondaryBorder]: true,
            [NFLstyleData[team].simpleText]: true,
          })}
        >
          <span className="font-bold">NFL: </span>
          {location} {name}
        </p>
      );
    case "CFL":
      return (
        <p
          className={cn("rounded border-2 px-1 py-1", {
            [CFLstyleData[team].primaryBackground]: true,
            [CFLstyleData[team].secondaryBorder]: true,
            [CFLstyleData[team].simpleText]: true,
          })}
        >
          <span className="font-bold">CFL: </span>
          {location} {name}
        </p>
      );
    case "IFL":
      return (
        <p className={cn("rounded bg-white px-1 py-1 text-gray-800")}>
          <span className="font-bold">IFL: </span>
          {location} {name}
        </p>
      );
    case "UFL":
      return (
        <p
          className={cn(
            "rounded border-2 border-ufl bg-white px-1 py-1 text-gray-800"
          )}
        >
          <span className="font-bold">UFL: </span>
          {location} {name}
        </p>
      );
    case "WNBA":
      return (
        <p
          className={cn("rounded border-2 px-1 py-1", {
            [WNBAstyleData[team].primaryBackground]: true,
            [WNBAstyleData[team].secondaryBorder]: true,
            [WNBAstyleData[team].simpleText]: true,
          })}
        >
          <span className="font-bold">WNBA: </span>
          {location} {name}
        </p>
      );
    case "PWHL":
      return (
        <p
          className={cn("rounded border-2 px-1 py-1", {
            [PWHLstyleData[team].primaryBackground]: true,
            [PWHLstyleData[team].secondaryBorder]: true,
            [PWHLstyleData[team].simpleText]: true,
          })}
        >
          <span className="font-bold">PWHL: </span>
          {location} {name}
        </p>
      );
    case "MLS":
      return (
        <p
          className={cn("rounded border-2 px-1 py-1", {
            [MLSstyleData[team].primaryBackground]: true,
            [MLSstyleData[team].secondaryBorder]: true,
            [MLSstyleData[team].simpleText]: true,
          })}
        >
          <span className="font-bold">MLS: </span>
          {reverseName && name} {location} {!reverseName && name}
        </p>
      );
    case "MLV":
      return (
        <p
          className={cn("rounded border-2 px-1 py-1", {
            [MLVstyleData[team].primaryBackground]: true,
            [MLVstyleData[team].secondaryBorder]: true,
            [MLVstyleData[team].simpleText]: true,
          })}
        >
          <span className="font-bold">MLV: </span>
          {location} {name}
        </p>
      );
    case "NGL":
      if (team === "MEX") {
        return (
          <p
            className={cn(
              "rounded border-2 border-[#F44C7F] bg-[#1D428A] px-1 py-1 text-[#FEE11A]"
            )}
          >
            <span className="font-bold">G League: </span>
            {location} {name}
          </p>
        );
      } else {
        return <></>;
      }
    default:
      return <></>;
  }
};
