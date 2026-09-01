import { MapArc } from "~/components/ui/map";
import { CityData } from "./CityMarkers";

type ArcData = {
  id: string;
  from: [number, number];
  to: [number, number];
};

export const teamMinors: [string, string, string][] = [
  ["Toronto", "Hamilton", "Worcester"],
  ["Montreal", "Ottawa", "Springfield MA"],
  ["Vancouver", "Fresno", "Boise"],
  ["New York City", "Albany", ""],
  ["Newark", "Hartford", "Bridgeport"],
  ["Los Angeles", "Bakersfield", "Anaheim"],
  ["Riverside", "Las Vegas", "Anchorage"],
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
  ["Seattle", "Salt Lake City", "Spokane"],
  ["San Francisco", "San Jose", "Stockton"],
  ["San Diego", "El Paso", "McAllen"],
  ["Tampa", "New Orleans", "Augusta"],
  ["Minneapolis", "Des Moines", "Sioux Falls"],
  ["Denver", "Albuquerque", "Colorado Springs"],
  ["Baltimore", "Virginia Beach", "Greenville"],
  ["St. Louis", "Tulsa", "Springfield MO"],
  ["Portland OR", "Sacramento", "Reno"],
  ["San Antonio", "Baton Rouge", "Little Rock"],
  ["Orlando", "Jacksonville", "Savannah"],
  ["Indianapolis", "Hammond", "Fort Wayne"],
  ["Pittsburgh", "Buffalo", "Harrisburg"],
  ["Cincinnati", "Louisville", "Toledo"],
  ["Kansas City", "Omaha", "Wichita"],
  ["Cleveland", "Rochester", "Syracuse"],
  ["Columbus", "Dayton", "Youngstown"],
  ["Charlotte", "Raleigh", "Greensboro"],
  ["Nashville", "Memphis", "Knoxville"],
];

export const getArcData = (input: [string, string, string]): ArcData[] => {
  const arcData: ArcData[] = [];
  const T1 = CityData.find((info) => {
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

/**
 * 
 * [
  ["Toronto", "Hamilton", "South Bend", "Rockford"],
  ["Montreal", "Ottawa", "Springfield MA"],
  ["Vancouver", "Fresno", "Boise", "Eugene"],
  ["New York City", "Albany", "Bridgeport"],
  ["Newark", "Hartford", "Trenton"],
  ["Los Angeles", "Bakersfield", "Anaheim", "Ontario"],
  ["Riverside", "Las Vegas", "Anchorage", "Oceanside"],
  ["Chicago", "Milwaukee", "Madison", "Green Bay"],
  ["Miami", "Sarasota", "Charleston"],
  ["Houston", "Austin", "Corpus Christi", "Lubbock"],
  ["Dallas", "Oklahoma City", "Fayetteville"],
  ["Philadelphia", "Allentown", "Scranton", "Harrisburg"],
  ["Atlanta", "Birmingham", "Chattanooga"],
  ["Washington D.C.", "Richmond", "Columbia", "Roanoke"],
  ["Boston", "Providence", "Portland ME", "Manchester"],
  ["Phoenix", "Tucson", "Prescott Valley", "Lake Havasu"],
  ["Detroit", "Grand Rapids", "Lansing", "Kalamazoo"],
  ["Seattle", "Salt Lake City", "Spokane", "Kennewick"],
  ["San Francisco", "San Jose", "Stockton", "Oakland"],
  ["San Diego", "El Paso", "McAllen", "Midland"],
  ["Tampa", "New Orleans", "Augusta"],
  ["Minneapolis", "Des Moines", "Quad Cities", "Sioux Falls"],
  ["Denver", "Albuquerque", "Colorado Springs", "Loveland"],
  ["Baltimore", "Virginia Beach", "Greenville"],
  ["St. Louis", "Tulsa", "Springfield MO"],
  ["Portland OR", "Sacramento", "Reno", "Salem"],
  ["San Antonio", "Baton Rouge", "Little Rock"],
  ["Orlando", "Jacksonville", "Savannah"],
  ["Indianapolis", "Hammond", "Fort Wayne", "Evansville"],
  ["Pittsburgh", "Rochester", "Syracuse", "Utica"],
  ["Cincinnati", "Louisville", "Peoria", "Lexington"],
  ["Kansas City", "Omaha", "Wichita", "Amarillo"],
  ["Cleveland", "Buffalo", "Toledo", "Erie"],
  ["Columbus", "Dayton", "Akron", "Youngstown"],
  ["Charlotte", "Raleigh", "Greensboro", "Winston-Salem"],
  ["Nashville", "Memphis", "Knoxville", "Clarksville"],
];
 */
