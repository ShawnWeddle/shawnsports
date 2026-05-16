import { cn } from "~/lib/utils";
import { MapMarker, MarkerContent, MarkerPopup } from "~/components/ui/map";
import { FaBaseball } from "react-icons/fa6";
import { milbList } from "~/data/MLB/ballparks";
import { type TierType } from "~/data/MLB/BP2";

type MarkerProps = {
  activeTiers: Set<TierType>;
};

export const MiLBmarkers = (props: MarkerProps) => {
  const { activeTiers } = props;
  const nm = milbList
    .filter((team) => {
      return activeTiers.has(team.tier);
    })
    .map((team, index) => {
      const { coordinates, location, name, tier } = team;
      return (
        <MapMarker
          key={index}
          latitude={coordinates.latitude}
          longitude={coordinates.longitude}
        >
          <MarkerContent>
            <FaBaseball
              className={cn("size-4  shadow-lg", {
                "text-mlb/60": tier === "MLB",
                "text-[#0000FF]/60": tier === "AAA",
                "text-[#00FF00]/60": tier === "AA",
                "text-[#FF8800]/60": tier === "High-A",
                "text-[#FF00FF]/60": tier === "Single-A",
              })}
            />
          </MarkerContent>
          <MarkerPopup>
            <div className="space-y-1">
              <p className={cn("rounded border border-mlb px-1 py-0.5")}>
                {location} {name} {tier}
              </p>
            </div>
          </MarkerPopup>
        </MapMarker>
      );
    });
  return nm;
};
