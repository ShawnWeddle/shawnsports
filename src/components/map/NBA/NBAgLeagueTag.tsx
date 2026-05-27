import { cn } from "~/lib/utils";
import { type NBATeamType, type TierType } from "~/data/NBA/NBAdata";
import { nbaMinorList } from "~/data/NBA/NBAstadiums";
import { NBAstyleData } from "~/data/NBA/NBAstyleData";

interface TeamTagProps {
  team?: NBATeamType;
  tier: TierType;
}

const TeamTag: React.FC<TeamTagProps> = (props: TeamTagProps) => {
  const { team, tier: T } = props;
  const activeStyles = (): [string, string, string] => {
    if (team) {
      return [
        NBAstyleData[team].primaryBackground,
        NBAstyleData[team].secondaryBorder,
        NBAstyleData[team].simpleText,
      ];
    } else {
      return [
        NBAstyleData["IND"].primaryBackground,
        NBAstyleData["IND"].secondaryBorder,
        NBAstyleData["IND"].simpleText,
      ];
    }
  };
  const teams = nbaMinorList
    .filter((filterTeam) => {
      return filterTeam.parentTeam === team;
    })
    .map((team, index) => {
      const { location, name, tier } = team;
      return (
        <div key={index} className="text-md m-1 flex flex-row">
          <p className="pl-2 font-bold">{tier} : </p>
          <p
            className={cn("mx-1 px-1", {
              "rounded border font-bold": T === tier,
              [activeStyles()[0]]: T === tier,
              [activeStyles()[1]]: T === tier,
              [activeStyles()[2]]: T === tier,
            })}
          >
            {location} {name}
          </p>
        </div>
      );
    });

  return <div>{teams}</div>;
};

export default TeamTag;
