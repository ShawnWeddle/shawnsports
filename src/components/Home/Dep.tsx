import { cn } from "~/utils/cn";
import {
  type PageHeadsType,
  TitlesEnum,
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
      <button
        key={index}
        className="w-full rounded-b px-2 text-left hover:bg-gray-200"
        onClick={() => {
          void router.push(underPageData[newKey].urlName);
        }}
      >
        <p className="font-semibold">
          • <span>{underPageData[newKey].navTitle}</span>
        </p>
        <p className="px-4">{sportData[key]}</p>
      </button>
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
