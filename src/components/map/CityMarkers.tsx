import { cn } from "~/lib/utils";
import { MapMarker, MarkerContent, MarkerLabel } from "~/components/ui/map";

const CityData = [
  { name: "Toronto", lat: 43.6539, long: -79.3839, div: "E" },
  { name: "Montreal", lat: 45.4972, long: -73.6104, div: "E" },
  { name: "Vancouver", lat: 49.2609, long: -123.1139, div: "W" },
  { name: "New York", lat: 40.6943, long: -73.9249, div: "E" },
  { name: "Newark", lat: 40.7245, long: -74.1725, div: "E" },
  { name: "Los Angeles", lat: 34.1141, long: -118.4068, div: "W" },
  { name: "Riverside", lat: 33.9381, long: -117.3949, div: "W" },
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
  { name: "Ottawa", lat: 45.4247, long: -75.695, div: "NE" },
  { name: "Anaheim", lat: 33.8346, long: -117.9124, div: "WC" },
  { name: "Las Vegas", lat: 36.2333, long: -115.2654, div: "WC" },
  { name: "Austin", lat: 30.3005, long: -97.7522, div: "SE" },
  { name: "San Jose", lat: 37.3012, long: -121.848, div: "WC" },
  { name: "Sacramento", lat: 38.5677, long: -121.4685, div: "WC" },
  { name: "Virginia Beach", lat: 36.7335, long: -76.0435, div: "NE" },
  { name: "Jacksonville", lat: 30.3322, long: -81.6749, div: "SE" },
  { name: "Providence", lat: 41.823, long: -71.4187, div: "NE" },
  { name: "Milwaukee", lat: 43.0642, long: -87.9675, div: "MW" },
  { name: "Salt Lake City", lat: 40.7776, long: -111.9311, div: "WC" },
  { name: "Raleigh", lat: 35.8324, long: -78.6429, div: "NE" },
  { name: "Rochester", lat: 43.166, long: -77.616, div: "NE" },
  { name: "Memphis", lat: 35.1087, long: -89.9663, div: "SE" },
  { name: "Oklahoma City", lat: 35.4676, long: -97.5136, div: "SE" },
  { name: "Louisville", lat: 38.1663, long: -85.6485, div: "MW" },
  { name: "Buffalo", lat: 42.9018, long: -78.8487, div: "NE" },
  { name: "New Orleans", lat: 30.0687, long: -89.9288, div: "SE" },
  { name: "El Paso", lat: 31.8476, long: -106.43, div: "WC" },
  { name: "Omaha", lat: 41.2627, long: -96.0529, div: "MW" },
  { name: "Birmingham", lat: 33.5279, long: -86.7971, div: "SE" },
  { name: "Albuquerque", lat: 35.1054, long: -106.6465, div: "WC" },
  { name: "Des Moines", lat: 41.5725, long: -93.6105, div: "MW" },
  { name: "Tulsa", lat: 36.1283, long: -95.9042, div: "SE" },
  { name: "Hartford", lat: 41.7661, long: -72.6834, div: "NE" },
  { name: "Grand Rapids", lat: 42.9619, long: -85.6562, div: "MW" },
  { name: "Allentown", lat: 40.5961, long: -75.4756, div: "MW" },
  { name: "Tucson", lat: 32.1541, long: -110.8787, div: "WC" },
  { name: "Fort Myers", lat: 26.6443, long: -81.9957, div: "SE" },
  { name: "Richmond", lat: 37.5295, long: -77.4756, div: "NE" },
  { name: "Fresno", lat: 36.783, long: -119.7939, div: "WC" },
  { name: "Dayton", lat: 39.7805, long: -84.2003, div: "MW" },
  { name: "McAllen", lat: 26.2252, long: -98.2467, div: "SE" },
  { name: "Akron", lat: 41.0798, long: -81.5219, div: "MW" },
  { name: "Chicago", lat: 41.6168, long: -87.4909, div: "MW" },
  { name: "Hamilton", lat: 43.2567, long: -79.8692, div: "NE" },

  { name: "Albany", lat: 42.6664, long: -73.7987, div: "T" },
  { name: "Charleston", lat: 32.8168, long: -79.9687, div: "T" },
  { name: "Knoxville", lat: 35.9692, long: -83.9496, div: "T" },
  { name: "Ontario", lat: 34.0393, long: -117.6064, div: "T" },
  { name: "Oceanside", lat: 33.2247, long: -117.3083, div: "T" },
  { name: "Boise", lat: 43.6005, long: -116.2308, div: "T" },
  { name: "Oakland", lat: 37.7904, long: -122.2166, div: "T" },
  { name: "Baton Rouge", lat: 30.442, long: -91.1311, div: "T" },
  { name: "Colorado Springs", lat: 38.8674, long: -104.761, div: "T" },
  { name: "Portland", lat: 43.6773, long: -70.2715, div: "T" },
  { name: "Columbia", lat: 34.0378, long: -80.9036, div: "T" },
  { name: "Bakersfield", lat: 35.3529, long: -119.036, div: "T" },
  { name: "Wichita", lat: 37.6895, long: -97.3443, div: "T" },
  { name: "Toledo", lat: 41.6638, long: -83.5827, div: "T" },
  { name: "Madison", lat: 43.0822, long: -89.393, div: "T" },
  { name: "Reno", lat: 39.5497, long: -119.848, div: "T" },
  { name: "Little Rock", lat: 34.7256, long: -92.3577, div: "T" },
  { name: "Spokane", lat: 47.6671, long: -117.433, div: "T" },
  { name: "Springfield", lat: 42.1155, long: -72.5395, div: "T" },
  { name: "Chattanooga", lat: 35.066, long: -85.2481, div: "T" },
  { name: "Stockton", lat: 37.9765, long: -121.311, div: "T" },
  { name: "Greenville", lat: 34.8354, long: -82.3646, div: "T" },
  { name: "Syracuse", lat: 43.0407, long: -76.1437, div: "T" },
  { name: "Scranton", lat: 41.4044, long: -75.6649, div: "T" },
  { name: "Greensboro", lat: 36.0956, long: -79.8271, div: "T" },
  { name: "Corpus Christi", lat: 27.7254, long: -97.3767, div: "T" },
  { name: "Fort Wayne", lat: 41.0888, long: -85.1436, div: "T" },
  { name: "Savannah", lat: 32.0286, long: -81.1821, div: "T" },
  { name: "Mobile", lat: 30.6782, long: -88.1162, div: "T" },
  { name: "Springfield", lat: 37.1943, long: -93.2916, div: "T" },
  { name: "South Bend", lat: 41.6767, long: -86.2696, div: "T" },
  { name: "Evansville", lat: 37.9881, long: -87.5341, div: "T" },
  { name: "Winston-Salem", lat: 36.1029, long: -80.261, div: "T" },
  { name: "Quad Cities", lat: 41.5565, long: -90.6053, div: "T" },
  { name: "Lansing", lat: 42.7142, long: -84.5601, div: "T" },
  { name: "Brooklyn", lat: 40.6501, long: -73.9496, div: "T" },
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
          className={cn("size-3 rounded-full border border-gray-400 bg-white", {
            "bg-red-600": division === "W",
            "bg-yellow-400": division === "M",
            "bg-green-600": division === "S",
            "bg-blue-600": division === "E",
            "bg-purple-600": division === "WC",
            "bg-orange-500": division === "MW",
            "bg-green-800": division === "SE",
            "bg-teal-700": division === "NE",
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

/*
  { name: "Calgary", lat: 51.05, long: -114.067, div: "T" },
  { name: "Edmonton", lat: 53.5344, long: -113.49, div: "T" },
  { name: "Winnipeg", lat: 49.8844, long: -97.1464, div: "T" },
  { name: "Quebec City", lat: 46.8139, long: -71.2081, div: "T" },
*/
