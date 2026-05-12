import { useState } from "react";
import { type SportType } from "~/data/SiteData";
import { Card } from "~/components/ui/card";
import { Checkbox } from "../ui/checkbox";
import { MyMap } from "./Map";

const MapWrapper: React.FC = () => {
  const [activeSports, setActiveSports] = useState<SportType[]>(["NBA", "MLB"]);

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
    console.log(newSports);
  };

  return (
    <Card className="flex h-96 w-full overflow-hidden p-0">
      <div className="h-full">
        <div className="flex">
          <Checkbox
            onCheckedChange={() => {
              setActiveSportsHandler("NFL");
            }}
          ></Checkbox>
          <span> NFL </span>
        </div>
      </div>
      <MyMap activeSports={activeSports} />
    </Card>
  );
};

export default MapWrapper;
