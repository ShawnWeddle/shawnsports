import { cn } from "~/utils/cn";
import {
  pageHeads,
  type PageHeadsType,
  TitlesEnum,
  homePageData,
  underPageData,
} from "~/data/SiteData";
import { useRouter } from "next/router";

const HomeNav: React.FC = () => {
  const router = useRouter();

  const sportMenu = (sportMode: PageHeadsType) => {
    const sportData = homePageData[sportMode];
    const pageLinks = (
      Object.keys(sportData) as Array<keyof typeof sportData>
    ).map((key, index) => {
      const newKey = TitlesEnum.parse(key);
      return (
        <tr
          key={index}
          className={cn("border-b", {
            "hover:bg-nba/10": sportMode === "NBA" || sportMode === "WNBA",
            "hover:bg-nfl/10": sportMode === "NFL",
            "hover:bg-nhl/10": sportMode === "NHL",
            "hover:bg-mlb/10": sportMode === "MLB",
            "hover:bg-formulaOne/10": sportMode === "F1",
            "hover:bg-cfl/10": sportMode === "CFL",
          })}
        >
          <td>
            <div className="flex justify-center">
              <button
                className="w-full text-center font-semibold"
                onClick={() => {
                  void router.push(underPageData[newKey].urlName);
                }}
              >
                {underPageData[newKey].navTitle}
              </button>
            </div>
          </td>
          <td>
            <div className="flex justify-start">
              <button
                className="w-full text-start"
                onClick={() => {
                  void router.push(underPageData[newKey].urlName);
                }}
              >
                {sportData[key]}
              </button>
            </div>
          </td>
        </tr>
      );
    });

    return (
      <>
        <tr>
          <td colSpan={2}>
            <div
              className={cn(
                "rounded text-center text-2xl font-semibold text-white hover:transition",
                {
                  "bg-nba": sportMode === "NBA" || sportMode === "WNBA",
                  "bg-nfl": sportMode === "NFL",
                  "bg-nhl": sportMode === "NHL",
                  "bg-mlb": sportMode === "MLB",
                  "bg-formulaOne": sportMode === "F1",
                  "bg-cfl": sportMode === "CFL",
                }
              )}
            >
              {sportMode === "F1" ? "Formula One" : sportMode}
            </div>
          </td>
        </tr>
        {pageLinks}
      </>
    );
  };

  return (
    <div className="flex justify-center">
      <table>
        <tbody>
          {pageHeads.map((sport) => {
            return sportMenu(sport);
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HomeNav;
