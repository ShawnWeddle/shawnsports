import { useState } from "react";
import { cn } from "~/lib/utils";
import { Card } from "~/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Field } from "../ui/field";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Map, MapControls } from "~/components/ui/map";
import { MiLBmarkers } from "./MiLBMarkers";
import { MiLBarcs } from "./MiLBArcs";
import { type TierType } from "~/data/MLB/ballparks";
import {
  MLBdivisionData,
  type MLBTeamType,
  MLBteamData,
} from "~/data/MLB/MLBdata";
import { TabsContent } from "@radix-ui/react-tabs";
import { MLBstyleData } from "~/data/MLB/MLBstyleData";

export const tierMapList: Set<TierType> = new Set([
  "MLB",
  "AAA",
  "AA",
  "High-A",
  "Single-A",
]);

export const teamMapList: Set<MLBTeamType> = new Set(["LAA", "CHW", "NYY"]);

type MapProps = {
  activeTiers: Set<TierType>;
  activeTeams: Set<MLBTeamType>;
  mapMode: "Tiers" | "Paths";
};

const MapWrapper: React.FC = () => {
  const [mapMode, setMapMode] = useState<"Tiers" | "Paths">("Tiers");
  const [activeTiers, setActiveTiers] = useState<Set<TierType>>(tierMapList);
  const [activeTeams, setActiveTeams] = useState<Set<MLBTeamType>>(teamMapList);

  const setActiveTiersHandler = (tier: TierType) => {
    const newTiers = new Set<TierType>([...activeTiers]);
    if (activeTiers.has(tier)) {
      newTiers.delete(tier);
    } else {
      newTiers.add(tier);
    }
    setActiveTiers(newTiers);
  };

  const setActiveTeamsHandler = (team: MLBTeamType) => {
    const newTeams = new Set<MLBTeamType>([...activeTeams]);
    if (activeTeams.has(team)) {
      newTeams.delete(team);
    } else {
      newTeams.add(team);
    }
    setActiveTeams(newTeams);
  };

  const checkList = [...tierMapList].map((tier, index) => {
    return (
      <div
        className="flex h-max items-center whitespace-nowrap p-1"
        key={index}
      >
        <Checkbox
          checked={activeTiers.has(tier)}
          onCheckedChange={() => {
            setActiveTiersHandler(tier);
          }}
        ></Checkbox>
        <p
          className={cn("pl-2 text-lg font-bold", {
            "text-mlb": tier === "MLB",
            "text-aaa": tier === "AAA",
            "text-aa": tier === "AA",
            "text-higha": tier === "High-A",
            "text-singlea": tier === "Single-A",
          })}
        >
          {" "}
          {tier}{" "}
        </p>
      </div>
    );
  });

  const L = ["NL", "AL"] as const;
  const teamCheckList = L.map((league, indexL) => {
    const D = ["East", "Central", "West"] as const;
    const divisionGroup = D.map((division, indexD) => {
      const teams = MLBdivisionData[league][division];
      const teamCheckList = teams.map((team, indexT) => {
        return (
          <Field
            key={indexT}
            className={cn("whitespace-nowrap rounded px-1 py-0.5", {
              [MLBstyleData[team].primaryBackground]: activeTeams.has(team),
              [MLBstyleData[team].simpleText]: activeTeams.has(team),
            })}
            orientation="horizontal"
          >
            <Checkbox
              id={team}
              name={team}
              checked={activeTeams.has(team)}
              onCheckedChange={() => {
                setActiveTeamsHandler(team);
              }}
              className={cn("", {
                [MLBstyleData[team].primaryBackground]: true,
              })}
            ></Checkbox>
            <Label htmlFor={team}>
              {MLBteamData[team].name !== "Diamondbacks"
                ? MLBteamData[team].name
                : "D-Backs"}
            </Label>
          </Field>
        );
      });
      return (
        <div key={indexD} className="">
          <p className="py-1 text-center text-xs font-bold text-gray-500">
            {division.toUpperCase()}
          </p>
          {teamCheckList}
        </div>
      );
    });
    return (
      <div key={indexL}>
        <p className="py-1 text-center text-sm font-bold text-gray-700">
          {league.toUpperCase()}
        </p>
        {divisionGroup}
      </div>
    );
  });

  return (
    <Card className="flex h-128 w-full p-0">
      <Tabs defaultValue="Tiers" className={cn("h-full w-64 p-1")}>
        <div className="flex justify-center">
          <TabsList>
            <TabsTrigger
              value="Tiers"
              onClick={() => {
                setMapMode("Tiers");
              }}
            >
              Tiers
            </TabsTrigger>
            <TabsTrigger
              value="Paths"
              onClick={() => {
                setMapMode("Paths");
              }}
            >
              Paths
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="Tiers">
          {mapMode === "Tiers" && <div>{checkList}</div>}
        </TabsContent>
        <TabsContent value="Paths">
          {mapMode === "Paths" && <div className="flex">{teamCheckList}</div>}
        </TabsContent>
      </Tabs>
      <MLBMap
        activeTiers={activeTiers}
        activeTeams={activeTeams}
        mapMode={mapMode}
      />
    </Card>
  );
};

export const MLBMap: React.FC<MapProps> = (props: MapProps) => {
  const { activeTiers, activeTeams, mapMode } = props;
  return (
    <Map center={[-98.579, 39.828]} zoom={3}>
      <MapControls position="top-right" showZoom showLocate showFullscreen />
      <MiLBmarkers
        activeTiers={activeTiers}
        activeTeams={activeTeams}
        mapMode={mapMode}
        teamColors={true}
      />
      {mapMode === "Paths" && <MiLBarcs activeTeams={activeTeams} />}
    </Map>
  );
};

export default MapWrapper;
