import { cn } from "~/utils/cn";
import { useRouter } from "next/router";
import { useNavContext } from "~/hooks/useNavContext";
import {
  allNavHeads,
  pageHeads,
  pageRouter,
  underPageDefault,
} from "~/data/Home";
import type {
  NavHeadsType,
  PageHeadsType,
  UnderPageHeadsType,
} from "~/data/Home";

const NavBar: React.FC = () => {
  const { navState, navDispatch } = useNavContext();
  const { pageMode, underPageMode } = navState;

  const router = useRouter();

  const navPageButtons = pageHeads.map((page, index) => {
    return (
      <button
        key={index}
        className={cn("p-2 text-xl text-white md:text-2xl", {
          "text-2xl md:text-3xl": pageMode === page,
        })}
        onClick={() => {
          navDispatch({
            type: "CHANGE_PAGE",
            payload: { pageMode: page, underPageMode: underPageDefault(page) },
          });
          void router.push(pageRouter(page));
        }}
      >
        {page}
      </button>
    );
  });

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50">
        <nav
          className={cn("flex justify-center gap-4", {
            "bg-home": pageMode === "Home",
            "bg-nba": pageMode === "NBA",
            "bg-nfl": pageMode === "NFL",
            "bg-formulaOne": pageMode === "F1",
          })}
        >
          {navPageButtons}
        </nav>
        <F1MiniNavBar />
      </div>
      <div className="h-22 md:h-24"></div>
    </>
  );
};

const F1MiniNavBar: React.FC = () => {
  const { navState, navDispatch } = useNavContext();
  const { pageMode, underPageMode } = navState;

  const navUnderPageButtons = allNavHeads[pageMode].map((underPage, index) => {
    return (
      <button
        key={index}
        className={cn(
          "text-md m-1 p-1 md:text-lg",
          {
            "text-home": pageMode === "Home",
            "text-nba": pageMode === "NBA",
            "text-nfl": pageMode === "NFL",
            "text-formulaOne": pageMode === "F1",
          },
          {
            "rounded-xl bg-home text-white":
              underPageMode === underPage && pageMode === "Home",
            "rounded-xl bg-nba text-white":
              underPageMode === underPage && pageMode === "NBA",
            "rounded-xl bg-nfl text-white":
              underPageMode === underPage && pageMode === "NFL",
            "rounded-xl bg-formulaOne text-white":
              underPageMode === underPage && pageMode === "F1",
          }
        )}
        onClick={() => {
          navDispatch({
            type: "CHANGE_UNDERPAGE",
            payload: { pageMode: pageMode, underPageMode: underPage },
          });
        }}
      >
        {underPage}
      </button>
    );
  });

  return (
    <nav className={cn("flex justify-center gap-4 bg-white")}>
      {navUnderPageButtons}
    </nav>
  );
};

export default NavBar;
