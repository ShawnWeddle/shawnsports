import { cn } from "~/lib/utils";
import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerPopup,
} from "~/components/ui/map";
import { Card } from "~/components/ui/card";
import { NFLteamData, nflTeamsRanked } from "~/data/NFL/NFLdata";
import { NBAteamData, nbaTeamsRanked } from "~/data/NBA/NBAdata";
import { NHLteamData, nhlTeamsRanked } from "~/data/NHL/NHLdata";
import { MLBteamData, mlbTeamsRanked } from "~/data/MLB/MLBdata";
import { NFLstadiumCoordinates } from "~/data/NFL/NFLstadiumData";
import { NBAstadiumCoordinates } from "~/data/NBA/NBAstadiumData";
import { NHLstadiumCoordinates } from "~/data/NHL/NHLstadiumData";
import { MLBstadiumCoordinates } from "~/data/MLB/MLBstadiumData";
import { NFLstyleData } from "~/data/NFL/NFLstyleData";
import { NBAstyleData } from "~/data/NBA/NBAstyleData";
import { NHLstyleData } from "~/data/NHL/NHLstyleData";
import { MLBstyleData } from "~/data/MLB/MLBstyleData";

export function MyMap() {
  const NFLmarkers = nflTeamsRanked.map((team, index) => {
    return (
      <MapMarker
        key={index}
        latitude={NFLstadiumCoordinates[team].latitude}
        longitude={NFLstadiumCoordinates[team].longitude}
      >
        <MarkerContent>
          <div
            className={cn("size-4 rounded-full border-2 shadow-lg", {
              [NFLstyleData[team].primaryBackground]: true,
              [NFLstyleData[team].secondaryBorder]: true,
            })}
          />
        </MarkerContent>
        <MarkerPopup>
          <div className="space-y-1">
            <p
              className={cn("rounded border px-1 py-0.5", {
                [NFLstyleData[team].primaryBackground]: true,
                [NFLstyleData[team].secondaryBorder]: true,
                [NFLstyleData[team].simpleText]: true,
              })}
            >
              {NFLteamData[team].location} {NFLteamData[team].name}
            </p>
            <p className="text-xs text-muted-foreground">
              {NFLstadiumCoordinates[team].latitude},{" "}
              {NFLstadiumCoordinates[team].longitude}
            </p>
          </div>
        </MarkerPopup>
      </MapMarker>
    );
  });

  const NBAmarkers = nbaTeamsRanked.map((team, index) => {
    return (
      <MapMarker
        key={index}
        latitude={NBAstadiumCoordinates[team].latitude}
        longitude={NBAstadiumCoordinates[team].longitude}
      >
        <MarkerContent>
          <div
            className={cn("size-4 rounded-full border-2 shadow-lg", {
              [NBAstyleData[team].primaryBackground]: true,
              [NBAstyleData[team].secondaryBorder]: true,
            })}
          />
        </MarkerContent>
        <MarkerPopup>
          <div className="space-y-1">
            <p
              className={cn("rounded border px-1 py-0.5", {
                [NBAstyleData[team].primaryBackground]: true,
                [NBAstyleData[team].secondaryBorder]: true,
                [NBAstyleData[team].simpleText]: true,
              })}
            >
              {NBAteamData[team].location} {NBAteamData[team].name}
            </p>
            <p className="text-xs text-muted-foreground">
              {NBAstadiumCoordinates[team].latitude},{" "}
              {NBAstadiumCoordinates[team].longitude}
            </p>
          </div>
        </MarkerPopup>
      </MapMarker>
    );
  });

  const NHLmarkers = nhlTeamsRanked.map((team, index) => {
    return (
      <MapMarker
        key={index}
        latitude={NHLstadiumCoordinates[team].latitude}
        longitude={NHLstadiumCoordinates[team].longitude}
      >
        <MarkerContent>
          <div
            className={cn("size-4 rounded-full border-2 shadow-lg", {
              [NHLstyleData[team].primaryBackground]: true,
              [NHLstyleData[team].secondaryBorder]: true,
            })}
          />
        </MarkerContent>
        <MarkerPopup>
          <div className="space-y-1">
            <p
              className={cn("rounded border px-1 py-0.5", {
                [NHLstyleData[team].primaryBackground]: true,
                [NHLstyleData[team].secondaryBorder]: true,
                [NHLstyleData[team].simpleText]: true,
              })}
            >
              {NHLteamData[team].location} {NHLteamData[team].name}
            </p>
            <p className="text-xs text-muted-foreground">
              {NHLstadiumCoordinates[team].latitude},{" "}
              {NHLstadiumCoordinates[team].longitude}
            </p>
          </div>
        </MarkerPopup>
      </MapMarker>
    );
  });

  const MLBmarkers = mlbTeamsRanked.map((team, index) => {
    return (
      <MapMarker
        key={index}
        latitude={MLBstadiumCoordinates[team].latitude}
        longitude={MLBstadiumCoordinates[team].longitude}
      >
        <MarkerContent>
          <div
            className={cn("size-4 rounded-full border-2 shadow-lg", {
              [MLBstyleData[team].primaryBackground]: true,
              [MLBstyleData[team].secondaryBorder]: true,
            })}
          />
        </MarkerContent>
        <MarkerPopup>
          <div className="space-y-1">
            <p
              className={cn("rounded border px-1 py-0.5", {
                [MLBstyleData[team].primaryBackground]: true,
                [MLBstyleData[team].secondaryBorder]: true,
                [MLBstyleData[team].simpleText]: true,
              })}
            >
              {MLBteamData[team].location} {MLBteamData[team].name}
            </p>
            <p className="text-xs text-muted-foreground">
              {MLBstadiumCoordinates[team].latitude},{" "}
              {MLBstadiumCoordinates[team].longitude}
            </p>
          </div>
        </MarkerPopup>
      </MapMarker>
    );
  });

  return (
    <Card className="h-96 w-full overflow-hidden p-0">
      <Map center={[-98.579, 39.828]} zoom={3}>
        <MapControls
          position="top-right"
          showZoom
          showCompass
          showLocate
          showFullscreen
        />
        {NBAmarkers}
        {NHLmarkers}
        {NFLmarkers}
        {MLBmarkers}
      </Map>
    </Card>
  );
}
