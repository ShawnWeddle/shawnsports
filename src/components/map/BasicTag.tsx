import { cn } from "~/lib/utils";
import type { LeagueTeamType } from "~/types/MapTypes";
import { markerData } from "~/data/map/allMapData";
import { lengthenLeagueName } from "~/data/map/mapData";

export const BasicTag: React.FC<LeagueTeamType> = (props: LeagueTeamType) => {
  const { league, team } = props;
  const { location, name, style, text } = markerData(props);
  const reverseName = markerData(props).reverse === true;
  switch (league) {
    case "F1":
      return (
        <p
          className={cn("whitespace-nowrap rounded border-2 px-1 py-1", {
            [style.primaryBackground]: true,
            [style.secondaryBorder]: true,
            [style.simpleText]: true,
          })}
        >
          <span className="font-bold">F1: </span>
          {text.long}
        </p>
      );
    case "UFL":
      return (
        <p
          className={cn(
            "whitespace-nowrap rounded border-2 border-ufl bg-white px-1 py-1 text-gray-800"
          )}
        >
          <span className="font-bold">UFL: </span>
          {location} {name}
        </p>
      );
    case "MLS":
      return (
        <p
          className={cn("whitespace-nowrap rounded border-2 px-1 py-1", {
            [style.primaryBackground]: true,
            [style.secondaryBorder]: true,
            [style.simpleText]: true,
          })}
        >
          <span className="font-bold">MLS: </span>
          {reverseName && name} {location} {!reverseName && name}
        </p>
      );
    case "USL":
      return (
        <p
          className={cn("whitespace-nowrap rounded border-2 px-1 py-1", {
            [style.primaryBackground]: true,
            [style.secondaryBorder]: true,
            [style.simpleText]: true,
          })}
        >
          <span className="font-bold">USL: </span>
          {reverseName && name} {location} {!reverseName && name}
        </p>
      );
    case "NGL":
      if (team === "MEX") {
        return (
          <p
            className={cn(
              "whitespace-nowrap rounded border-2 border-[#F44C7F] bg-[#1D428A] px-1 py-1 text-[#FEE11A]"
            )}
          >
            <span className="font-bold">G League: </span>
            {location} {name}
          </p>
        );
      } else {
        return (
          <p
            className={cn("whitespace-nowrap rounded border-2 px-1 py-1", {
              [style.primaryBackground]: true,
              [style.secondaryBorder]: true,
              [style.simpleText]: true,
            })}
          >
            <span className="font-bold">{lengthenLeagueName(league)}: </span>
            {location} {name}
          </p>
        );
      }
    default:
      return (
        <p
          className={cn("whitespace-nowrap rounded border-2 px-1 py-1", {
            [style.primaryBackground]: true,
            [style.secondaryBorder]: true,
            [style.simpleText]: true,
          })}
        >
          <span className="font-bold">{lengthenLeagueName(league)}: </span>
          {location} {name}
        </p>
      );
  }
};
