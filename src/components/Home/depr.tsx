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
      <tr
        key={index}
        className={cn("", {
          "even:bg-nba/20 hover:text-nba":
            sportMode === "NBA" || sportMode === "WNBA",
          "even:bg-nfl/20 hover:text-nfl": sportMode === "NFL",
          "even:bg-nhl/20 hover:text-nhl": sportMode === "NHL",
          "even:bg-mlb/20 hover:text-mlb": sportMode === "MLB",
          "even:bg-formulaOne/20 hover:text-formulaOne": sportMode === "F1",
        })}
      >
        <td>
          <div className="flex w-full justify-center bg-pink-500">
            <button
              className="whitespace-nowrap text-center font-semibold"
              onClick={() => {
                void router.push(underPageData[newKey].urlName);
              }}
            >
              {underPageData[newKey].navTitle}
            </button>
          </div>
        </td>
        <td>{sportData[key]}</td>
      </tr>
    );
  });

  return (
    <>
      <h1
        className={cn(
          "rounded-b rounded-t-xl border py-1 text-center text-2xl font-semibold text-white hover:transition",
          {
            "bg-nba": sportMode === "NBA" || sportMode === "WNBA",
            "bg-nfl": sportMode === "NFL",
            "bg-nhl": sportMode === "NHL",
            "bg-mlb": sportMode === "MLB",
            "bg-formulaOne": sportMode === "F1",
          }
        )}
      >
        {sportMode === "F1" ? "Formula One" : sportMode}
      </h1>

      <table className="mx-4 w-full">
        <tbody>{pageLinks}</tbody>
      </table>
    </>
  );
};

export default HomeHero;
