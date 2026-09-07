import { cn } from "~/lib/utils";
import { MapMarker, MarkerContent, MarkerPopup } from "~/components/ui/map";
import Icon from "./MapIcon";
import { SPHLArenaData } from "~/data/NHL/HockeyArenaData";
import { type SPHLTeamType } from "~/data/NHL/NHLdata";

const SPHLMarker: React.FC<SPHLTeamType> = (team: SPHLTeamType) => {
  const teamInfo = SPHLArenaData[team];
  const { coordinates, location, name } = teamInfo;
  return (
    <MapMarker
      latitude={coordinates.latitude}
      longitude={coordinates.longitude}
    >
      <MarkerContent>
        <div
          className={cn(
            "flex size-6 flex-row items-center justify-center rounded-full border-2 border-[#000044] bg-white text-[#000044] shadow-lg"
          )}
        >
          <Icon sport="Hockey" />
        </div>
      </MarkerContent>
      <MarkerPopup>
        <div>
          {location} {name}
        </div>
      </MarkerPopup>
    </MapMarker>
  );
};

export default SPHLMarker;
