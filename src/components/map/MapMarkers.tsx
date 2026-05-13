import { cn } from "~/lib/utils";
import { type SportType } from "~/data/SiteData";
import { MapMarker, MarkerContent, MarkerPopup } from "~/components/ui/map";
import { NFLteamData, nflTeamsRanked } from "~/data/NFL/NFLdata";
import { allMLSteams } from "~/data/MLS/MLSdata";
import { mlbTeamsRanked } from "~/data/MLB/MLBdata";
import { wnbaTeamsRanked } from "~/data/WNBA/WNBAdata";
import { nhlTeamsRanked } from "~/data/NHL/NHLdata";
import { NBAteamData, nbaTeamsRanked } from "~/data/NBA/NBAdata";
import { markerData } from "~/data/universal/markerData";
import { Icon } from "../Home/HomeNav";

type MarkerProps = {
  team: string;
  teamColors: boolean;
  sport: SportType;
};

type MarkersProps = {
  teamColors: boolean;
  sport: SportType;
};

const Marker: React.FC<MarkerProps> = (props: MarkerProps) => {
  const { team, teamColors, sport } = props;
  const { coordinates, style, text } = markerData(team, sport);
  return (
    <MapMarker
      latitude={coordinates.latitude}
      longitude={coordinates.longitude}
    >
      <MarkerContent>
        <div
          className={cn(
            "flex size-6 flex-row items-center justify-center rounded-full border-2 shadow-lg",
            {
              "border-mlb": sport === "MLB" && !teamColors,
              "border-mls": sport === "MLS" && !teamColors,
              "border-nba": sport === "NBA" && !teamColors,
              "border-nfl": sport === "NFL" && !teamColors,
              "border-nhl": sport === "NHL" && !teamColors,
              "border-wnba": sport === "WNBA" && !teamColors,
              [style.secondaryBorder]: teamColors,
              "bg-white": !teamColors,
              [style.primaryBackground]: teamColors,
            }
          )}
        >
          <Icon
            style={cn("size-4", {
              "text-mlb": sport === "MLB" && !teamColors,
              "text-mls": sport === "MLS" && !teamColors,
              "text-nba": sport === "NBA" && !teamColors,
              "text-nfl": sport === "NFL" && !teamColors,
              "text-nhl": sport === "NHL" && !teamColors,
              "text-wnba": sport === "WNBA" && !teamColors,
              [style.secondaryText]: teamColors,
            })}
            sport={sport}
          />
        </div>
      </MarkerContent>
      <MarkerPopup>
        <div className="space-y-1">
          <p
            className={cn("rounded border px-1 py-0.5", {
              [style.primaryBackground]: true,
              [style.secondaryBorder]: true,
              [style.simpleText]: true,
            })}
          >
            {text.long}
          </p>
        </div>
      </MarkerPopup>
    </MapMarker>
  );
};

export const MapMarkers = (props: MarkersProps) => {
  const { teamColors, sport } = props;

  switch (sport) {
    case "CFL":
      return [];
    case "F1":
      return [];
    case "MLB":
      return mlbTeamsRanked.map((team, index) => {
        return (
          <Marker
            key={index}
            team={team}
            teamColors={teamColors}
            sport={sport}
          />
        );
      });
    case "MLS":
      return allMLSteams.map((team, index) => {
        return (
          <Marker
            key={index}
            team={team}
            teamColors={teamColors}
            sport={sport}
          />
        );
      });
    case "NBA":
      return nbaTeamsRanked.map((team, index) => {
        return (
          <Marker
            key={index}
            team={team}
            teamColors={teamColors}
            sport={sport}
          />
        );
      });
    case "NFL":
      return nflTeamsRanked.map((team, index) => {
        return (
          <Marker
            key={index}
            team={team}
            teamColors={teamColors}
            sport={sport}
          />
        );
      });
    case "NHL":
      return nhlTeamsRanked.map((team, index) => {
        return (
          <Marker
            key={index}
            team={team}
            teamColors={teamColors}
            sport={sport}
          />
        );
      });
    case "WNBA":
      return wnbaTeamsRanked.map((team, index) => {
        return (
          <Marker
            key={index}
            team={team}
            teamColors={teamColors}
            sport={sport}
          />
        );
      });
  }
};
