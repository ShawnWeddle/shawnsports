import { nhlTeams } from "~/data/NHL/NHLdata";
import { NHLteamData } from "~/data/NHL/NHLdata";
import { NHLstyleData } from "~/data/NHL/NHLstyleData";
import { cn } from "~/utils/cn";

const TeamList: React.FC = () => {
  const teamList = nhlTeams.map((team, index) => {
    return (
      <div
        key={index}
        className={cn(
          "m-0.5 rounded-lg border-2 p-0.5 text-center font-semibold",
          {
            [NHLstyleData[team].primaryBGstyle]: true,
            [NHLstyleData[team].secondaryBorderStyle]: true,
            [NHLstyleData[team].primaryPlainText]: true,
          }
        )}
      >
        {NHLteamData[team].location} {NHLteamData[team].name}
      </div>
    );
  });
  return <div>{teamList}</div>;
};

export default TeamList;
