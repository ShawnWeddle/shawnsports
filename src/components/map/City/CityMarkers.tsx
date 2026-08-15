import { cn } from "~/lib/utils";
import {
  MapMarker,
  MarkerContent,
  MarkerLabel,
  MarkerPopup,
} from "~/components/ui/map";
import { FaBowlingBall } from "react-icons/fa6";
import { getList } from "~/data/NBA/delete";

export const CityData = [
  { name: "Toronto", lat: 43.6539, long: -79.3839, div: "Q" },
  { name: "Montreal", lat: 45.4972, long: -73.6104, div: "Q" },
  { name: "Vancouver", lat: 49.2609, long: -123.1139, div: "Q" },
  { name: "New York City", lat: 40.7681, long: -73.9819, div: "Q" },
  { name: "Newark", lat: 40.7245, long: -74.1725, div: "Q" },
  { name: "Los Angeles", lat: 34.1141, long: -118.4068, div: "Q" },
  { name: "Riverside", lat: 33.9381, long: -117.3949, div: "Q" },
  { name: "Chicago", lat: 41.8375, long: -87.6866, div: "Q" },
  { name: "Miami", lat: 25.784, long: -80.2101, div: "Q" },
  { name: "Houston", lat: 29.786, long: -95.3885, div: "Q" },
  { name: "Dallas", lat: 32.7935, long: -96.7667, div: "Q" },
  { name: "Philadelphia", lat: 40.0077, long: -75.1339, div: "Q" },
  { name: "Atlanta", lat: 33.7628, long: -84.422, div: "Q" },
  { name: "Washington D.C.", lat: 38.9047, long: -77.0163, div: "Q" },
  { name: "Boston", lat: 42.3188, long: -71.0852, div: "Q" },
  { name: "Phoenix", lat: 33.5722, long: -112.0892, div: "Q" },
  { name: "Detroit", lat: 42.3834, long: -83.1024, div: "Q" },
  { name: "Seattle", lat: 47.6211, long: -122.3244, div: "Q" },
  { name: "San Francisco", lat: 37.7558, long: -122.4449, div: "Q" },
  { name: "San Diego", lat: 32.8313, long: -117.1222, div: "Q" },
  { name: "Tampa", lat: 27.9945, long: -82.4447, div: "Q" },
  { name: "Minneapolis", lat: 44.9635, long: -93.2678, div: "Q" },
  { name: "Denver", lat: 39.762, long: -104.8758, div: "Q" },
  { name: "Baltimore", lat: 39.3051, long: -76.6144, div: "Q" },
  { name: "St. Louis", lat: 38.6359, long: -90.2451, div: "Q" },
  { name: "Portland OR", lat: 45.5371, long: -122.65, div: "Q" },
  { name: "San Antonio", lat: 29.4632, long: -98.5238, div: "Q" },
  { name: "Orlando", lat: 28.4773, long: -81.337, div: "Q" },
  { name: "Indianapolis", lat: 39.7771, long: -86.1458, div: "Q" },
  { name: "Pittsburgh", lat: 40.4397, long: -79.9763, div: "Q" },
  { name: "Cincinnati", lat: 39.1413, long: -84.506, div: "Q" },
  { name: "Kansas City", lat: 39.1238, long: -94.5541, div: "Q" },
  { name: "Cleveland", lat: 41.4764, long: -81.6805, div: "Q" },
  { name: "Columbus", lat: 39.9862, long: -82.9855, div: "Q" },
  { name: "Charlotte", lat: 35.2083, long: -80.8303, div: "Q" },
  { name: "Nashville", lat: 36.1715, long: -86.7842, div: "Q" },

  { name: "Ottawa", lat: 45.4247, long: -75.695, div: "S" },
  { name: "Bakersfield", lat: 35.3529, long: -119.036, div: "S" },
  { name: "Las Vegas", lat: 36.2333, long: -115.2654, div: "S" },
  { name: "Austin", lat: 30.3005, long: -97.7522, div: "S" },
  { name: "San Jose", lat: 37.3012, long: -121.848, div: "S" },
  { name: "Sacramento", lat: 38.5677, long: -121.4685, div: "S" },
  { name: "Virginia Beach", lat: 36.7335, long: -76.0435, div: "S" },
  { name: "Jacksonville", lat: 30.3322, long: -81.6749, div: "S" },
  { name: "Providence", lat: 41.823, long: -71.4187, div: "S" },
  { name: "Milwaukee", lat: 43.0642, long: -87.9675, div: "S" },
  { name: "Salt Lake City", lat: 40.7776, long: -111.9311, div: "S" },
  { name: "Raleigh", lat: 35.8324, long: -78.6429, div: "S" },
  { name: "Rochester", lat: 43.166, long: -77.616, div: "S" },
  { name: "Memphis", lat: 35.1087, long: -89.9663, div: "S" },
  { name: "Oklahoma City", lat: 35.4676, long: -97.5136, div: "S" },
  { name: "Louisville", lat: 38.1663, long: -85.6485, div: "S" },
  { name: "Buffalo", lat: 42.9018, long: -78.8487, div: "S" },
  { name: "New Orleans", lat: 30.0687, long: -89.9288, div: "S" },
  { name: "El Paso", lat: 31.8476, long: -106.43, div: "S" },
  { name: "Omaha", lat: 41.2627, long: -96.0529, div: "S" },
  { name: "Birmingham", lat: 33.5279, long: -86.7971, div: "S" },
  { name: "Albuquerque", lat: 35.1054, long: -106.6465, div: "S" },
  { name: "Des Moines", lat: 41.5725, long: -93.6105, div: "S" },
  { name: "Tulsa", lat: 36.1283, long: -95.9042, div: "S" },
  { name: "Hartford", lat: 41.7661, long: -72.6834, div: "S" },
  { name: "Grand Rapids", lat: 42.9619, long: -85.6562, div: "S" },
  { name: "Allentown", lat: 40.5961, long: -75.4756, div: "S" },
  { name: "Tucson", lat: 32.1541, long: -110.8787, div: "S" },
  { name: "Sarasota", lat: 27.3377, long: -82.5393, div: "S" },
  { name: "Richmond", lat: 37.5295, long: -77.4756, div: "S" },
  { name: "Fresno", lat: 36.783, long: -119.7939, div: "S" },
  { name: "Dayton", lat: 39.7805, long: -84.2003, div: "S" },
  { name: "Baton Rouge", lat: 30.442, long: -91.1311, div: "S" },
  { name: "Albany", lat: 42.6664, long: -73.7987, div: "S" },
  { name: "Hammond", lat: 41.6168, long: -87.4909, div: "S" },
  { name: "Hamilton", lat: 43.2567, long: -79.8692, div: "S" },

  { name: "McAllen", lat: 26.2252, long: -98.2467, div: "T" },
  { name: "Bridgeport", lat: 41.1918, long: -73.1954, div: "T" },
  { name: "Akron", lat: 41.0798, long: -81.5219, div: "T" },
  { name: "Charleston", lat: 32.8168, long: -79.9687, div: "T" },
  { name: "Knoxville", lat: 35.9692, long: -83.9496, div: "T" },
  { name: "Prescott Valley", lat: 34.5959, long: -112.3341, div: "T" },
  { name: "Oceanside", lat: 33.2247, long: -117.3083, div: "T" },
  { name: "Boise", lat: 43.6005, long: -116.2308, div: "T" },
  { name: "Oakland", lat: 37.7904, long: -122.2166, div: "T" },
  { name: "Colorado Springs", lat: 38.8674, long: -104.761, div: "T" },
  { name: "Portland ME", lat: 43.6773, long: -70.2715, div: "T" },
  { name: "Columbia", lat: 34.0378, long: -80.9036, div: "T" },
  { name: "Anaheim", lat: 33.8346, long: -117.9124, div: "T" },
  { name: "Wichita", lat: 37.6895, long: -97.3443, div: "T" },
  { name: "Toledo", lat: 41.6638, long: -83.5827, div: "T" },
  { name: "Madison", lat: 43.0822, long: -89.393, div: "T" },
  { name: "Reno", lat: 39.5497, long: -119.848, div: "T" },
  { name: "Little Rock", lat: 34.7256, long: -92.3577, div: "T" },
  { name: "Fayetteville", lat: 36.0616, long: -94.1611, div: "T" },
  { name: "Springfield MA", lat: 42.1155, long: -72.5395, div: "T" },
  { name: "Chattanooga", lat: 35.066, long: -85.2481, div: "T" },
  { name: "Stockton", lat: 37.9765, long: -121.311, div: "T" },
  { name: "Greenville", lat: 34.8354, long: -82.3646, div: "T" },
  { name: "Syracuse", lat: 43.0407, long: -76.1437, div: "T" },
  { name: "Scranton", lat: 41.4044, long: -75.6649, div: "T" },
  { name: "Greensboro", lat: 36.0956, long: -79.8271, div: "T" },
  { name: "Corpus Christi", lat: 27.7254, long: -97.3767, div: "T" },
  { name: "Fort Wayne", lat: 41.0888, long: -85.1436, div: "T" },
  { name: "Savannah", lat: 32.0286, long: -81.1821, div: "T" },
  { name: "Springfield MO", lat: 37.1943, long: -93.2916, div: "T" },
  { name: "South Bend", lat: 41.6767, long: -86.2696, div: "T" },
  { name: "Quad Cities", lat: 41.5565, long: -90.6053, div: "T" },
  { name: "Lansing", lat: 42.7142, long: -84.5601, div: "T" },
  { name: "Brooklyn", lat: 40.6501, long: -73.9496, div: "T" },
  { name: "Peoria", lat: 40.752, long: -89.6154, div: "T" },
  { name: "Augusta", lat: 33.4712, long: -81.9618, div: "T" },
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
          className={cn(
            "flex size-6 items-center justify-center rounded-full border-2 bg-white shadow-lg",
            {
              "border-red-600 text-red-600": division === "Q",
              "border-orange-500 text-orange-500": division === "S",
              "border-teal-700 text-teal-700": division === "T",
            }
          )}
        >
          <FaBowlingBall className="size-4" />
        </div>
        {/* <MarkerLabel position="bottom">{name}</MarkerLabel> */}
        <MarkerPopup>
          <div className="rounded-lg bg-white p-1">{name}</div>
        </MarkerPopup>
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

// { name: "Spokane", lat: 47.6671, long: -117.433, div: "T" },
// { name: "Evansville", lat: 37.9881, long: -87.5341, div: "T" },
// { name: "Winston-Salem", lat: 36.1029, long: -80.261, div: "T" },
// { name: "Mobile", lat: 30.6782, long: -88.1162, div: "T" },
// { name: "Lubbock", lat: 33.5657, long: -101.8879, div: "T" },
// { name: "Ontario", lat: 34.0393, long: -117.6064, div: "T" },

/*
  { name: "Calgary", lat: 51.05, long: -114.067, div: "T" },
  { name: "Edmonton", lat: 53.5344, long: -113.49, div: "T" },
  { name: "Winnipeg", lat: 49.8844, long: -97.1464, div: "T" },
  { name: "Quebec City", lat: 46.8139, long: -71.2081, div: "T" },
*/
