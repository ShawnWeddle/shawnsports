import { cn } from "~/lib/utils";
import {
  pageHeads,
  type PageHeadsType,
  TitlesEnum,
  homePageData,
  underPageData,
} from "~/data/SiteData";
import { useRouter } from "next/router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import {
  FaBaseball,
  FaBasketball,
  FaFootball,
  FaTrophy,
  FaHockeyPuck,
} from "react-icons/fa6";
import { BsArrowReturnRight } from "react-icons/bs";

const Icon = (sport: PageHeadsType) => {
  switch (sport) {
    case "Home":
      return <></>;
    case "NBA":
      return <FaBasketball />;
    case "NFL":
      return <FaFootball />;
    case "F1":
      return <FaTrophy />;
    case "MLB":
      return <FaBaseball />;
    case "NHL":
      return <FaHockeyPuck />;
    case "WNBA":
      return <FaBasketball />;
    case "CFL":
      return <FaFootball />;
  }
};

const HomeNav: React.FC = () => {
  const router = useRouter();

  const sportMenu = (sportMode: PageHeadsType, key: number) => {
    const sportData = homePageData[sportMode];
    const pageLinks = (
      Object.keys(sportData) as Array<keyof typeof sportData>
    ).map((key, index) => {
      const newKey = TitlesEnum.parse(key);
      return (
        <button
          key={index}
          onClick={() => {
            void router.push(underPageData[newKey].urlName);
          }}
          className={cn("flex flex-col border-t", {
            "hover:bg-nba/10": sportMode === "NBA" || sportMode === "WNBA",
            "hover:bg-nfl/10": sportMode === "NFL",
            "hover:bg-nhl/10": sportMode === "NHL",
            "hover:bg-mlb/10": sportMode === "MLB",
            "hover:bg-formulaOne/10": sportMode === "F1",
            "hover:bg-cfl/10": sportMode === "CFL",
          })}
        >
          <p className="pl-12 text-lg font-semibold">
            {underPageData[newKey].navTitle}
          </p>
          <div className="pl-16 text-lg">
            <div className="flex gap-1">
              <div className="pt-1">
                <BsArrowReturnRight />
              </div>
              {"  "}
              <div className="text-left">{sportData[key]}</div>
            </div>
          </div>
        </button>
      );
    });

    return (
      <Accordion className="w-full" type="single" collapsible key={key}>
        <AccordionItem value="item-1">
          <AccordionTrigger
            className={cn(
              "rounded px-12 text-center text-2xl font-semibold text-white",
              {
                "text-nba hover:bg-nba hover:text-white":
                  sportMode === "NBA" || sportMode === "WNBA",
                "text-nfl hover:bg-nfl hover:text-white": sportMode === "NFL",
                "text-nhl hover:bg-nhl hover:text-white": sportMode === "NHL",
                "text-mlb hover:bg-mlb hover:text-white": sportMode === "MLB",
                "text-formulaOne hover:bg-formulaOne hover:text-white":
                  sportMode === "F1",
                "text-cfl hover:bg-cfl hover:text-white": sportMode === "CFL",
              }
            )}
          >
            <div className="flex gap-4">
              {sportMode === "F1" ? "Formula One" : sportMode}{" "}
              <div className="pt-1">{Icon(sportMode)}</div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col">{pageLinks}</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  };

  return (
    <div className="flex w-full flex-col justify-center lg:px-8">
      {pageHeads.map((sport, index) => {
        return sportMenu(sport, index);
      })}
    </div>
  );
};

export default HomeNav;
