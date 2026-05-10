import { NFLstadiumCoordinates } from "../NFL/NFLstadiumData";
import { NFLteamData, nflTeamsRanked } from "../NFL/NFLdata";

export interface TeamProperties {
  location: string;
  name: string;
}

const features: GeoJSON.Feature<GeoJSON.Point, TeamProperties>[] = nflTeamsRanked.map((team) => {
  const { latitude, longitude } = NFLstadiumCoordinates[team];
  const { location, name } = NFLteamData[team];
  return {
    type: "Feature",
    geometry: { type: "Point", coordinates: [ latitude , longitude ]},
    properties: { location, name }
  }
})

export const NFLpoints: GeoJSON.FeatureCollection<GeoJSON.Point, TeamProperties> = {
  "type": "FeatureCollection",
  features,
};