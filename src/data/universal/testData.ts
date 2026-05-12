export interface TeamProperties {
  location: string;
  name: string;
}

export const NBApoints: GeoJSON.FeatureCollection<GeoJSON.Point, TeamProperties> = {
  "type": "FeatureCollection",
  "features": [
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-71.062, 42.367 ]}, "properties": { "location": "Boston", "name": "Celtics" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-97.515, 35.463 ]}, "properties": { "location": "Oklahoma City", "name": "Thunder" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-105.008, 39.748 ]}, "properties": { "location": "Denver", "name": "Nuggets" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-93.276, 44.98 ]}, "properties": { "location": "Minnesota", "name": "Timberwolves" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-96.81, 32.79 ]}, "properties": { "location": "Dallas", "name": "Mavericks" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-73.994, 40.75 ]}, "properties": { "location": "New York", "name": "Knicks" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-75.171, 39.901 ]}, "properties": { "location": "Philadelphia", "name": "76ers" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-90.05, 35.138 ]}, "properties": { "location": "Memphis", "name": "Grizzlies" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-87.918, 43.045 ]}, "properties": { "location": "Milwaukee", "name": "Bucks" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-80.188, 25.781 ]}, "properties": { "location": "Miami", "name": "Heat" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-86.155, 39.764 ]}, "properties": { "location": "Indiana", "name": "Pacers" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-90.082, 29.949 ]}, "properties": { "location": "New Orleans", "name": "Pelicans" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-81.688, 41.496 ]}, "properties": { "location": "Cleveland", "name": "Cavaliers" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-81.384, 28.539 ]}, "properties": { "location": "Orlando", "name": "Magic" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-121.499, 38.58 ]}, "properties": { "location": "Sacramento", "name": "Kings" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-95.362, 29.751 ]}, "properties": { "location": "Houston", "name": "Rockets" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-118.342, 33.944 ]}, "properties": { "location": "Los Angeles", "name": "Clippers" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-112.071, 33.446 ]}, "properties": { "location": "Phoenix", "name": "Suns" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-122.387, 37.768 ]}, "properties": { "location": "Golden State", "name": "Warriors" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-118.267, 34.043 ]}, "properties": { "location": "Los Angeles", "name": "Lakers" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-84.396, 33.757 ]}, "properties": { "location": "Atlanta", "name": "Hawks" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-98.437, 29.427 ]}, "properties": { "location": "San Antonio", "name": "Spurs" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-111.901, 40.768 ]}, "properties": { "location": "Utah", "name": "Jazz" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-79.379, 43.644 ]}, "properties": { "location": "Toronto", "name": "Raptors" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-87.675, 41.881 ]}, "properties": { "location": "Chicago", "name": "Bulls" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-122.667, 45.532 ]}, "properties": { "location": "Portland", "name": "Trailblazers" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-80.839, 35.225 ]}, "properties": { "location": "Charlotte", "name": "Hornets" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-83.055, 42.342 ]}, "properties": { "location": "Detroit", "name": "Pistons" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-77.021, 38.899 ]}, "properties": { "location": "Washington", "name": "Wizards" }},
      {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-73.975, 40.683 ]}, "properties": { "location": "Brooklyn","name": "Nets" }},
    ]
}