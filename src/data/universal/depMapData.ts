import { nbaStadiumClusterPoints } from "../NBA/NBAstadiumData";
import { nflStadiumClusterPoints } from "../NFL/NFLstadiumData";
import { nhlStadiumClusterPoints } from "../NHL/NHLstadiumData";
import { mlbStadiumClusterPoints } from "../MLB/MLBstadiumData";

export interface TeamProperties {
  location: string;
  name: string;
}

const features: GeoJSON.Feature<GeoJSON.Point, TeamProperties>[] = [
  ...nbaStadiumClusterPoints,
  ...nflStadiumClusterPoints,
  ...nhlStadiumClusterPoints,
  ...mlbStadiumClusterPoints
];

export const NBApoints: GeoJSON.FeatureCollection<GeoJSON.Point, TeamProperties> = {
  "type": "FeatureCollection",
  features,
};