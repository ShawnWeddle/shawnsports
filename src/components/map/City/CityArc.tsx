import { MapArc } from "~/components/ui/map";
import { CityData } from "./CityMarkers";

type ArcData = {
  id: string;
  from: [number, number];
  to: [number, number];
};

export const teamMinors: [string, string, string][] = [
  ["Toronto", "Hamilton", "South Bend"],
  ["Montreal", "Ottawa", "Springfield MA"],
  ["Vancouver", "Fresno", "Oakland"],
  ["New York City", "Albany", "Bridgeport"],
  ["Newark", "Hartford", "Brooklyn"],
  ["Los Angeles", "Bakersfield", "Anaheim"],
  ["Riverside", "Las Vegas", "Oceanside"],
  ["Chicago", "Milwaukee", "Madison"],
  ["Miami", "Sarasota", "Charleston"],
  ["Houston", "Austin", "Corpus Christi"],
  ["Dallas", "Oklahoma City", "Fayetteville"],
  ["Philadelphia", "Allentown", "Scranton"],
  ["Atlanta", "Birmingham", "Chattanooga"],
  ["Washington D.C.", "Richmond", "Columbia"],
  ["Boston", "Providence", "Portland ME"],
  ["Phoenix", "Tucson", "Prescott Valley"],
  ["Detroit", "Grand Rapids", "Lansing"],
  ["Seattle", "Salt Lake City", "Boise"],
  ["San Francisco", "San Jose", "Stockton"],
  ["San Diego", "El Paso", "McAllen"],
  ["Tampa", "New Orleans", "Augusta"],
  ["Minneapolis", "Des Moines", "Quad Cities"],
  ["Denver", "Albuquerque", "Colorado Springs"],
  ["Baltimore", "Virginia Beach", "Greenville"],
  ["St. Louis", "Tulsa", "Springfield MO"],
  ["Portland OR", "Sacramento", "Reno"],
  ["San Antonio", "Baton Rouge", "Little Rock"],
  ["Orlando", "Jacksonville", "Savannah"],
  ["Indianapolis", "Hammond", "Fort Wayne"],
  ["Pittsburgh", "Rochester", "Syracuse"],
  ["Cincinnati", "Louisville", "Peoria"],
  ["Kansas City", "Omaha", "Wichita"],
  ["Cleveland", "Buffalo", "Toledo"],
  ["Columbus", "Dayton", "Akron"],
  ["Charlotte", "Raleigh", "Greensboro"],
  ["Nashville", "Memphis", "Knoxville"],
];

export const getArcData = (input: [string, string, string]): ArcData[] => {
  const arcData: ArcData[] = [];
  const T1 = CityData.find((info) => {
    console.log(info.name, input[0]);
    return info.name === input[0];
  });
  const T2 = CityData.find((info) => {
    return info.name === input[1];
  });
  const T3 = CityData.find((info) => {
    return info.name === input[2];
  });

  if (T1 && T2) {
    arcData.push({
      id: T1.name + T2.name,
      from: [T1.long, T1.lat],
      to: [T2.long, T2.lat],
    });
  }

  if (T2 && T3) {
    arcData.push({
      id: T2.name + T3.name,
      from: [T2.long, T2.lat],
      to: [T3.long, T3.lat],
    });
  }

  return arcData;
};

const CityArc = (input: [string, string, string]) => {
  const data = getArcData(input);

  return (
    <>
      <MapArc
        data={data}
        paint={{
          "line-color": "#FAB832",
          "line-width": 2,
        }}
      />
    </>
  );
};

export default CityArc;
