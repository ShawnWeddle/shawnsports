import { cn } from "~/lib/utils";
import { MapMarker, MarkerContent, MarkerLabel } from "~/components/ui/map";

const CityData = [
  { name: "New York", lat: 40.6943, long: -73.9249, div: "E" },
  { name: "Anaheim", lat: 33.8346, long: -117.9124, div: "T" },
  { name: "Los Angeles", lat: 34.1141, long: -118.4068, div: "W" },
  { name: "Chicago", lat: 41.8375, long: -87.6866, div: "M" },
  { name: "Miami", lat: 25.784, long: -80.2101, div: "S" },
  { name: "Houston", lat: 29.786, long: -95.3885, div: "S" },
  { name: "Dallas", lat: 32.7935, long: -96.7667, div: "S" },
  { name: "Philadelphia", lat: 40.0077, long: -75.1339, div: "E" },
  { name: "Atlanta", lat: 33.7628, long: -84.422, div: "S" },
  { name: "Washington", lat: 38.9047, long: -77.0163, div: "E" },
  { name: "Boston", lat: 42.3188, long: -71.0852, div: "E" },
  { name: "Phoenix", lat: 33.5722, long: -112.0892, div: "W" },
  { name: "Detroit", lat: 42.3834, long: -83.1024, div: "M" },
  { name: "Seattle", lat: 47.6211, long: -122.3244, div: "W" },
  { name: "San Francisco", lat: 37.7558, long: -122.4449, div: "W" },
  { name: "San Diego", lat: 32.8313, long: -117.1222, div: "W" },
  { name: "Tampa", lat: 27.9945, long: -82.4447, div: "S" },
  { name: "Minneapolis", lat: 44.9635, long: -93.2678, div: "M" },
  { name: "Denver", lat: 39.762, long: -104.8758, div: "W" },
  { name: "Riverside", lat: 33.9381, long: -117.3949, div: "W" },
  { name: "Las Vegas", lat: 36.2333, long: -115.2654, div: "W" },
  { name: "Baltimore", lat: 39.3051, long: -76.6144, div: "E" },
  { name: "St. Louis", lat: 38.6359, long: -90.2451, div: "M" },
  { name: "Portland", lat: 45.5371, long: -122.65, div: "W" },
  { name: "San Antonio", lat: 29.4632, long: -98.5238, div: "S" },
  { name: "Sacramento", lat: 38.5677, long: -121.4685, div: "W" },
  { name: "Orlando", lat: 28.4773, long: -81.337, div: "S" },
  { name: "Austin", lat: 30.3005, long: -97.7522, div: "T" },
  { name: "San Jose", lat: 37.3012, long: -121.848, div: "T" },
  { name: "Indianapolis", lat: 39.7771, long: -86.1458, div: "M" },
  { name: "Pittsburgh", lat: 40.4397, long: -79.9763, div: "M" },
  { name: "Cincinnati", lat: 39.1413, long: -84.506, div: "M" },
  { name: "Kansas City", lat: 39.1238, long: -94.5541, div: "M" },
  { name: "Cleveland", lat: 41.4764, long: -81.6805, div: "M" },
  { name: "Columbus", lat: 39.9862, long: -82.9855, div: "M" },
  { name: "Charlotte", lat: 35.2083, long: -80.8303, div: "E" },
  { name: "Virginia Beach", lat: 36.7335, long: -76.0435, div: "E" },
  { name: "Jacksonville", lat: 30.3322, long: -81.6749, div: "S" },
  { name: "Providence", lat: 41.823, long: -71.4187, div: "E" },
  { name: "Milwaukee", lat: 43.0642, long: -87.9675, div: "M" },
  { name: "Nashville", lat: 36.1715, long: -86.7842, div: "S" },
  { name: "Salt Lake City", lat: 40.7776, long: -111.9311, div: "W" },
  { name: "Raleigh", lat: 35.8324, long: -78.6429, div: "E" },
  { name: "Rochester", lat: 43.166, long: -77.616, div: "E" },
  { name: "Memphis", lat: 35.1087, long: -89.9663, div: "S" },
  { name: "Oklahoma City", lat: 35.4676, long: -97.5136, div: "S" },
  { name: "Louisville", lat: 38.1663, long: -85.6485, div: "M" },
  { name: "Buffalo", lat: 42.9018, long: -78.8487, div: "E" },
  { name: "New Orleans", lat: 30.0687, long: -89.9288, div: "S" },
  { name: "El Paso", lat: 31.8476, long: -106.43, div: "T" },
  { name: "Omaha", lat: 41.2627, long: -96.0529, div: "T" },
  { name: "Birmingham", lat: 33.5279, long: -86.7971, div: "T" },
  { name: "Albuquerque", lat: 35.1054, long: -106.6465, div: "W" },
  { name: "Newark", lat: 40.7245, long: -74.1725, div: "E" },
  { name: "Des Moines", lat: 41.5725, long: -93.6105, div: "T" },
];

type MarkerProps = {
  name: string;
  latitude: number;
  longitude: number;
  division: string;
};

const CityMarker: React.FC<MarkerProps> = (props: MarkerProps) => {
  const { name, latitude, longitude, division } = props;
  return (
    <MapMarker latitude={latitude} longitude={longitude}>
      <MarkerContent>
        <div
          className={cn("size-3 rounded-full border border-gray-400", {
            "bg-red-600": division === "W",
            "bg-yellow-400": division === "M",
            "bg-green-600": division === "S",
            "bg-blue-600": division === "E",
            "bg-black": division === "T",
          })}
        ></div>
        <MarkerLabel position="bottom">{name}</MarkerLabel>
      </MarkerContent>
    </MapMarker>
  );
};

const CityMarkers = CityData.map((city, index) => {
  const { name, lat, long, div } = city;
  return (
    <CityMarker
      key={index}
      latitude={lat}
      longitude={long}
      name={name}
      division={div}
    />
  );
});

export default CityMarkers;
