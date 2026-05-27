import { cn } from "~/lib/utils";
import { type NHLTeamType, type TierType } from "~/data/NHL/NHLdata";
import { nhlMinorList } from "~/data/NHL/NHLstadiums";
import { NHLstyleData } from "~/data/NHL/NHLstyleData";

interface TeamTagProps {
  team: NHLTeamType;
  tier: TierType;
}

const TeamTag: React.FC<TeamTagProps> = (props: TeamTagProps) => {
  const { team, tier: T } = props;
  const teams = nhlMinorList
    .filter((filterTeam) => {
      return filterTeam.parentTeam === team;
    })
    .map((team, index) => {
      const { location, name, parentTeam, tier } = team;
      return (
        <div key={index} className="text-md m-1 flex flex-row">
          <p className="pl-2 font-bold">{tier} : </p>
          <p
            className={cn("mx-1 px-1", {
              "rounded border font-bold": T === tier,
              [NHLstyleData[parentTeam].primaryBackground]: T === tier,
              [NHLstyleData[parentTeam].secondaryBorder]: T === tier,
              [NHLstyleData[parentTeam].simpleText]: T === tier,
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
