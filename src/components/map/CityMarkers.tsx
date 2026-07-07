import { cn } from "~/lib/utils";
import { MapMarker, MarkerContent, MarkerLabel } from "~/components/ui/map";

const CityData = [
  { name: "Toronto", lat: 43.6539, long: -79.3839, div: "E" },
  { name: "Montreal", lat: 45.4972, long: -73.6104, div: "E" },
  { name: "Vancouver", lat: 49.2609, long: -123.1139, div: "W" },
  { name: "New York", lat: 40.6943, long: -73.9249, div: "E" },
  { name: "Newark", lat: 40.7245, long: -74.1725, div: "E" },
  { name: "Los Angeles", lat: 34.1141, long: -118.4068, div: "W" },
  { name: "Anaheim", lat: 33.8346, long: -117.9124, div: "W" },
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
  { name: "Baltimore", lat: 39.3051, long: -76.6144, div: "E" },
  { name: "St. Louis", lat: 38.6359, long: -90.2451, div: "M" },
  { name: "Portland", lat: 45.5371, long: -122.65, div: "W" },
  { name: "San Antonio", lat: 29.4632, long: -98.5238, div: "S" },
  { name: "Orlando", lat: 28.4773, long: -81.337, div: "S" },
  { name: "Indianapolis", lat: 39.7771, long: -86.1458, div: "M" },
  { name: "Pittsburgh", lat: 40.4397, long: -79.9763, div: "E" },
  { name: "Cincinnati", lat: 39.1413, long: -84.506, div: "M" },
  { name: "Kansas City", lat: 39.1238, long: -94.5541, div: "M" },
  { name: "Cleveland", lat: 41.4764, long: -81.6805, div: "M" },
  { name: "Columbus", lat: 39.9862, long: -82.9855, div: "M" },
  { name: "Charlotte", lat: 35.2083, long: -80.8303, div: "S" },
  { name: "Nashville", lat: 36.1715, long: -86.7842, div: "S" },
  //
  { name: "Las Vegas", lat: 36.2333, long: -115.2654, div: "WC" },
  { name: "Austin", lat: 30.3005, long: -97.7522, div: "SW" },
  { name: "Riverside", lat: 33.9381, long: -117.3949, div: "WC" },
  { name: "San Jose", lat: 37.3012, long: -121.848, div: "WC" },
  { name: "Sacramento", lat: 38.5677, long: -121.4685, div: "WC" },
  { name: "Virginia Beach", lat: 36.7335, long: -76.0435, div: "EC" },
  { name: "Jacksonville", lat: 30.3322, long: -81.6749, div: "EC" },
  { name: "Providence", lat: 41.823, long: -71.4187, div: "NE" },
  { name: "Milwaukee", lat: 43.0642, long: -87.9675, div: "MW" },
  { name: "Salt Lake City", lat: 40.7776, long: -111.9311, div: "SW" },
  { name: "Raleigh", lat: 35.8324, long: -78.6429, div: "EC" },
  { name: "Rochester", lat: 43.166, long: -77.616, div: "NE" },
  { name: "Memphis", lat: 35.1087, long: -89.9663, div: "SE" },
  { name: "Oklahoma City", lat: 35.4676, long: -97.5136, div: "SE" },
  { name: "Louisville", lat: 38.1663, long: -85.6485, div: "MW" },
  { name: "Buffalo", lat: 42.9018, long: -78.8487, div: "NE" },
  { name: "New Orleans", lat: 30.0687, long: -89.9288, div: "SE" },
  { name: "El Paso", lat: 31.8476, long: -106.43, div: "SW" },
  { name: "Omaha", lat: 41.2627, long: -96.0529, div: "MW" },
  { name: "Birmingham", lat: 33.5279, long: -86.7971, div: "SE" },
  { name: "Albuquerque", lat: 35.1054, long: -106.6465, div: "SW" },
  { name: "Des Moines", lat: 41.5725, long: -93.6105, div: "MW" },
  { name: "Tulsa", lat: 36.1283, long: -95.9042, div: "SE" },
  { name: "Hartford", lat: 41.7661, long: -72.6834, div: "NE" },
  { name: "Grand Rapids", lat: 42.9619, long: -85.6562, div: "MW" },
  { name: "Knoxville", lat: 35.9692, long: -83.9496, div: "SE" },
  { name: "Allentown", lat: 40.5961, long: -75.4756, div: "NE" },
  { name: "Boise", lat: 43.6005, long: -116.2308, div: "WC" },
  { name: "Tucson", lat: 32.1541, long: -110.8787, div: "SW" },
  { name: "Fort Meyers", lat: 26.6443, long: -81.9957, div: "EC" },
  { name: "Richmond", lat: 37.5295, long: -77.4756, div: "EC" },
  { name: "McAllen", lat: 26.2252, long: -98.2467, div: "SW" },
  { name: "Charleston", lat: 32.8168, long: -79.9687, div: "EC" },
  { name: "Albany", lat: 42.6664, long: -73.7987, div: "NE" },
  { name: "Fresno", lat: 36.783, long: -119.7939, div: "WC" },
  { name: "Dayton", lat: 39.7805, long: -84.2003, div: "MW" },
  //3rd { name: "Little Rock", lat: 34.7256, long: -92.3577, div: "SE" },
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
            "bg-purple-600": division === "WC",
            "bg-slate-600": division === "SW",
            "bg-orange-500": division === "MW",
            "bg-green-800": division === "SE",
            "bg-cyan-600": division === "EC",
            "bg-teal-600": division === "NE",
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

//2 Wilmington

// Stockton
// Spokane
// Bakersfield
// Reno
// Modesto
// Colorado springs
// Visalia
// Ontario
// Oceanside
// Provo
// Corpus Christi
// Wichita KAN
// Springfield MO
// Fort Worth DAL
// Des Moines MIN
// Lansing DET
// Fort Wayne IND
// Madison CHI
// Toledo CLE
// Jackson ATL
// Baton Rouge ORL
// Lexington CIN
// Little Rock NSH
// Greensboro CHO
// Chattanooga
// Greenville
// Columbia
// Savannah
// Harrisburg
// Syracuse
// Scranton Wilkes-Berre
// Worcester BOS
// Springfield MA MON
// Portland
