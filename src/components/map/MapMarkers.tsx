import Marker from "./MapMarker";
import { nflTeamsRanked } from "~/data/NFL/NFLdata";
import { cflTeamsRanked, iflTeamsList, uflTeamsList } from "~/data/CFL/CFLdata";
import { nbaTeamsRanked, nglTeamsOrder } from "~/data/NBA/NBAdata";
import { wnbaTeamsRanked } from "~/data/WNBA/WNBAdata";
import {
  mlbTeamsRanked,
  AAAteamsOrder,
  AAteamsOrder,
  HAteamsOrder,
  SAteamsOrder,
} from "~/data/MLB/MLBdata";
import {
  nhlTeamsRanked,
  ahlTeamsOrder,
  echlTeamsOrder,
  pwhlTeamsAll,
} from "~/data/NHL/NHLdata";
import { useMapContext } from "~/hooks/useMap";

const SportsMarkers = () => {
  const { mapState, mapDispatch } = useMapContext();
  const { activeLeagues } = mapState;
  //Football 4
  const NFLMarkers = nflTeamsRanked.map((team, index) => {
    return <Marker key={"NFL" + index.toString()} league="NFL" team={team} />;
  });
  const CFLMarkers = cflTeamsRanked.map((team, index) => {
    return <Marker key={"CFL" + index.toString()} league="CFL" team={team} />;
  });
  const IFLMarkers = iflTeamsList.map((team, index) => {
    return <Marker key={"IFL" + index.toString()} league="IFL" team={team} />;
  });
  const UFLMarkers = uflTeamsList.map((team, index) => {
    return <Marker key={"UFL" + index.toString()} league="UFL" team={team} />;
  });
  //Basketball 3
  const NBAMarkers = nbaTeamsRanked.map((team, index) => {
    return <Marker key={"NBA" + index.toString()} league="NBA" team={team} />;
  });
  const NGLMarkers = nglTeamsOrder.map((team, index) => {
    return <Marker key={"NGL" + index.toString()} league="NGL" team={team} />;
  });
  const WNBAMarkers = wnbaTeamsRanked.map((team, index) => {
    return <Marker key={"WNBA" + index.toString()} league="WNBA" team={team} />;
  });
  //Baseball 5
  const MLBMarkers = mlbTeamsRanked.map((team, index) => {
    return <Marker key={"MLB" + index.toString()} league="MLB" team={team} />;
  });
  const AAAMarkers = AAAteamsOrder.map((team, index) => {
    return <Marker key={"AAA" + index.toString()} league="AAA" team={team} />;
  });
  const AAMarkers = AAteamsOrder.map((team, index) => {
    return <Marker key={"AA" + index.toString()} league="AA" team={team} />;
  });
  const HAMarkers = HAteamsOrder.map((team, index) => {
    return <Marker key={"HA" + index.toString()} league="HA" team={team} />;
  });
  const SAMarkers = SAteamsOrder.map((team, index) => {
    return <Marker key={"SA" + index.toString()} league="SA" team={team} />;
  });
  //Hockey
  const NHLMarkers = nhlTeamsRanked.map((team, index) => {
    return <Marker key={"NHL" + index.toString()} league="NHL" team={team} />;
  });
  const AHLMarkers = ahlTeamsOrder.map((team, index) => {
    return <Marker key={"AHL" + index.toString()} league="AHL" team={team} />;
  });
  const ECHLMarkers = echlTeamsOrder.map((team, index) => {
    return <Marker key={"ECHL" + index.toString()} league="ECHL" team={team} />;
  });
  const PWHLMarkers = pwhlTeamsAll.map((team, index) => {
    return <Marker key={"PWHL" + index.toString()} league="PWHL" team={team} />;
  });
  const leagueList = [...activeLeagues].map((league) => {
    switch (league) {
      case "NFL":
        return NFLMarkers;
      case "CFL":
        return CFLMarkers;
      case "UFL":
        return UFLMarkers;
      case "IFL":
        return IFLMarkers;
      case "NBA":
        return NBAMarkers;
      case "NGL":
        return NGLMarkers;
      case "WNBA":
        return WNBAMarkers;
      case "NHL":
        return NHLMarkers;
      case "AHL":
        return AHLMarkers;
      case "ECHL":
        return ECHLMarkers;
      case "PWHL":
        return PWHLMarkers;
      case "MLB":
        return MLBMarkers;
      case "AAA":
        return AAAMarkers;
      case "AA":
        return AAMarkers;
      case "HA":
        return HAMarkers;
      case "SA":
        return SAMarkers;
      case "MLS":
        return [];
    }
  });
  return leagueList.flat();
};

export default SportsMarkers;
