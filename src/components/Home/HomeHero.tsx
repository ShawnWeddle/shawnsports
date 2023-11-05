import { cn } from "~/utils/cn";
import {
  type PageHeadsType,
  TitlesEnum,
  leagueNames,
  homePageData,
  underPageData,
} from "~/data/SiteData";
import { useRouter } from "next/router";

interface HomeHeroProps {
  sportMode: PageHeadsType;
}

const HomeHero: React.FC<HomeHeroProps> = (props: HomeHeroProps) => {
  const router = useRouter();
  const { sportMode } = props;
  const sportData = homePageData[sportMode];

  const pageLinks = (
    Object.keys(sportData) as Array<keyof typeof sportData>
  ).map((key, index) => {
    const newKey = TitlesEnum.parse(key);
    return (
      <div key={index} className="rounded-b px-2 hover:bg-gray-200">
        <button
          className="font-semibold"
          onClick={() => {
            void router.push(underPageData[newKey].urlName);
          }}
        >
          •{" "}
          <span className="hover:underline">
            {underPageData[newKey].navTitle}
          </span>
        </button>
        <p className="px-4">{sportData[key]}</p>
      </div>
    );
  });

  return (
    <div
      className={cn("rounded-xl border-8", {
        "border-nba": sportMode === "NBA" || sportMode === "WNBA",
        "border-nfl": sportMode === "NFL",
        "border-nhl": sportMode === "NHL",
        "border-mlb": sportMode === "MLB",
        "border-formulaOne": sportMode === "F1",
      })}
    >
      <div
        className={cn("text-center text-2xl font-semibold text-white", {
          "bg-nba": sportMode === "NBA" || sportMode === "WNBA",
          "bg-nfl": sportMode === "NFL",
          "bg-nhl": sportMode === "NHL",
          "bg-mlb": sportMode === "MLB",
          "bg-formulaOne": sportMode === "F1",
        })}
      >
        {sportMode === "F1" ? "Formula 1" : sportMode}
      </div>
      <div>{pageLinks}</div>
    </div>
  );
};

export default HomeHero;

/*

className={cn("rounded-b-lg border-2 px-2", {
          "bg-nba/10": sportMode === "NBA" || sportMode === "WNBA",
          "bg-nfl/10": sportMode === "NFL",
          "bg-nhl/10": sportMode === "NHL",
          "bg-mlb/10": sportMode === "MLB",
          "bg-formulaOne/10": sportMode === "F1",
        })}

        className={cn("rounded-b-lg border-2 px-2", {
          "bg-nba/10": sportMode === "NBA" || sportMode === "WNBA",
          "bg-nfl/10": sportMode === "NFL",
          "bg-nhl/10": sportMode === "NHL",
          "bg-mlb/10": sportMode === "MLB",
          "bg-formulaOne/10": sportMode === "F1",
        })}

*/
