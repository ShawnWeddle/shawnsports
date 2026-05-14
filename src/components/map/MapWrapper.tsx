import { useState } from "react";
import { type SportType } from "~/data/SiteData";
import { Card } from "~/components/ui/card";
import { Checkbox } from "../ui/checkbox";
import { MyMap } from "./Map";

export const sportMapList: SportType[] = [
  "NFL",
  "NBA",
  "MLB",
  "NHL",
  "MLS",
  "WNBA",
  "CFL",
];

const MapWrapper: React.FC = () => {
  const [activeSports, setActiveSports] = useState<SportType[]>(["NFL", "MLB"]);
  const [showTeamColors, setShowTeamColors] = useState<boolean>(false);

  const setActiveSportsHandler = (sport: SportType) => {
    const newSports = [...activeSports];
    if (newSports.includes(sport)) {
      const indexToRemove = newSports.indexOf(sport);
      if (indexToRemove > -1) {
        newSports.splice(indexToRemove, 1);
      }
    } else {
      newSports.push(sport);
    }
    setActiveSports([...newSports]);
  };

  const checkList = sportMapList.map((sport, index) => {
    return (
      <div className="flex h-max items-center p-1" key={index}>
        <Checkbox
          checked={activeSports.includes(sport)}
          onCheckedChange={() => {
            setActiveSportsHandler(sport);
          }}
        ></Checkbox>
        <span className="pl-2 text-lg"> {sport} </span>
      </div>
    );
  });

  return (
    <Card className="flex h-96 w-full overflow-hidden p-0">
      <div className="h-full p-1">
        {checkList}
        <div className="flex h-max items-center p-1">
          <Checkbox
            checked={showTeamColors}
            onCheckedChange={() => {
              setShowTeamColors(!showTeamColors);
            }}
          ></Checkbox>
          <span className="pl-2 text-sm"> show team colors </span>
        </div>
      </div>
      <MyMap activeSports={activeSports} showTeamColors={showTeamColors} />
    </Card>
  );
};

export default MapWrapper;
