import { useRef, useState, useEffect } from "react";
import { cn } from "~/utils/cn";
import { useRouter } from "next/router";
import { useNavContext } from "~/hooks/useNavContext";
import {
  allNavHeads,
  pageHeads,
  pageRouter,
  underPageData,
} from "~/data/SiteData";
import type { PageHeadsType, UnderPageHeadsType } from "~/data/SiteData";
import SignIn from "~/components/SignIn";
import SignOut from "~/components/SignOut";
import { MobileResponsiveSMWLogo } from "../Logo";
import { MdAccountCircle } from "react-icons/md";
import { useAuthContext } from "~/hooks/useAuthContext";
import { FaCaretDown } from "react-icons/fa";

interface NavProps {
  pageMode: PageHeadsType;
  underPageMode: UnderPageHeadsType;
}

const NavBar: React.FC<NavProps> = (props: NavProps) => {
  const { pageMode, underPageMode } = props;
  const { navState, navDispatch } = useNavContext();

  const { authDispatch, authState } = useAuthContext();
  const { user } = authState;

  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const router = useRouter();

  const majorSports = pageHeads.slice(0, 3);
  const minorSports = pageHeads.slice(3, 6);

  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    navDispatch({
      type: "CHANGE_PAGE",
      payload: {
        pageMode: pageMode,
        underPageMode: underPageMode,
      },
    });
  }, [navDispatch, pageMode, underPageMode]);

  const navPageButtons = majorSports.map((page, index) => {
    return (
      <button
        key={index}
        className={cn(
          "py-2 text-xl text-white hover:text-gray-200 md:text-2xl",
          {
            "text-2xl hover:text-white md:text-3xl": pageMode === page,
          }
        )}
        onClick={() => {
          void router.push(pageRouter(page));
        }}
      >
        {page}
      </button>
    );
  });

  const NavDropDown: React.FC = () => {
    const minorButtons = minorSports.map((page, index) => {
      return (
        <div
          key={index}
          className="p-1 text-xl hover:bg-gray-200"
          onClick={() => {
            void router.push(pageRouter(page));
          }}
        >
          <button>{page}</button>
        </div>
      );
    });

    return (
      <div className={cn("relative flex flex-col justify-center")}>
        <button
          className="py-2 text-2xl text-white hover:text-gray-200"
          onClick={() => {
            setShowDropDown(!showDropDown);
          }}
        >
          <FaCaretDown />
        </button>
        <div
          className={cn(
            "absolute left-0 top-13 rounded-b border-2 bg-white sm:top-14",
            {
              "text-home ": pageMode === "Home",
              "text-nba ": pageMode === "NBA" || pageMode === "WNBA",
              "text-nfl ": pageMode === "NFL",
              "text-nhl ": pageMode === "NHL",
              "text-mlb ": pageMode === "MLB",
              "text-formulaOne ": pageMode === "F1",
            },
            {
              hidden: !showDropDown,
            }
          )}
        >
          {minorButtons}
        </div>
      </div>
    );
  };

  const navUnderPageButtons = allNavHeads[pageMode].map((underPage, index) => {
    return (
      <button
        key={index}
        className={cn(
          "text-md m-1 whitespace-nowrap p-1 md:text-lg",
          {
            "text-home": pageMode === "Home",
            "text-nba": pageMode === "NBA" || pageMode === "WNBA",
            "text-nfl": pageMode === "NFL",
            "text-nhl": pageMode === "NHL",
            "text-mlb": pageMode === "MLB",
            "text-formulaOne": pageMode === "F1",
          },
          {
            "rounded-xl bg-nba text-white":
              navState.underPageMode === underPage &&
              (pageMode === "NBA" || pageMode === "WNBA"),
            "rounded-xl bg-nfl text-white":
              navState.underPageMode === underPage && pageMode === "NFL",
            "rounded-xl bg-nhl text-white":
              navState.underPageMode === underPage && pageMode === "NHL",
            "rounded-xl bg-mlb text-white":
              navState.underPageMode === underPage && pageMode === "MLB",
            "rounded-xl bg-formulaOne text-white":
              navState.underPageMode === underPage && pageMode === "F1",
          },
          {
            "rounded-xl hover:bg-nba/50 hover:text-white":
              navState.underPageMode !== underPage &&
              (pageMode === "NBA" || pageMode === "WNBA"),
            "rounded-xl hover:bg-nfl/50 hover:text-white":
              navState.underPageMode !== underPage && pageMode === "NFL",
            "rounded-xl hover:bg-nhl/50 hover:text-white":
              navState.underPageMode !== underPage && pageMode === "NHL",
            "rounded-xl hover:bg-mlb/50 hover:text-white":
              navState.underPageMode !== underPage && pageMode === "MLB",
            "rounded-xl hover:bg-formulaOne/50 hover:text-white":
              navState.underPageMode !== underPage && pageMode === "F1",
          }
        )}
        onClick={() => {
          void router.push(`${underPageData[underPage].urlName}`);
        }}
      >
        {underPageData[underPage].navTitle}
      </button>
    );
  });

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50">
        <nav
          className={cn("flex justify-center gap-4", {
            "bg-home": pageMode === "Home",
            "bg-nba": pageMode === "NBA" || pageMode === "WNBA",
            "bg-nfl": pageMode === "NFL",
            "bg-nhl": pageMode === "NHL",
            "bg-mlb": pageMode === "MLB",
            "bg-formulaOne": pageMode === "F1",
          })}
        >
          <button
            className="py-2 text-3xl text-white hover:text-gray-200 md:text-4xl"
            onClick={() => {
              void router.push("/");
            }}
          >
            <MobileResponsiveSMWLogo />
          </button>
          {navPageButtons}
          {pageMode !== "Home" && minorSports.includes(pageMode) && (
            <button
              className={cn(
                "py-2 text-2xl text-white hover:text-white md:text-3xl"
              )}
              onClick={() => {
                void router.push(pageRouter(pageMode));
              }}
            >
              {pageMode}
            </button>
          )}
          <NavDropDown />
          <button
            className="py-2 text-xl text-white hover:text-gray-200 md:text-2xl"
            onClick={() => {
              dialog.current?.showModal();
            }}
          >
            <MdAccountCircle />
          </button>
        </nav>
        <nav
          className={cn(
            "flex justify-around bg-white sm:justify-center sm:gap-4"
          )}
        >
          {pageMode !== "Home" && navUnderPageButtons}
          {pageMode === "Home" && !user && (
            <button
              className={cn(
                "text-md m-1 rounded-xl p-1 text-home hover:bg-home/60 hover:text-white md:text-lg"
              )}
              onClick={() => {
                dialog.current?.showModal();
              }}
            >
              Sign In
            </button>
          )}
          {pageMode === "Home" && user && (
            <button
              className={cn(
                "text-md m-1 rounded-xl p-1 text-home hover:bg-home/60 hover:text-white md:text-lg"
              )}
              onClick={() => {
                void router.push(`/profile/${user.username}`);
              }}
            >
              My Profile
            </button>
          )}
        </nav>
      </div>
      <div className="h-22 md:h-24"></div>
      <dialog
        ref={dialog}
        className="mx-auto my-auto w-full max-w-screen-sm rounded-xl align-middle backdrop:bg-gray-500/50"
      >
        <div className="flex justify-end">
          <button
            onClick={() => {
              dialog.current?.close();
            }}
            className="text-lg font-semibold"
          >
            ✕
          </button>
        </div>
        {!user && <SignIn />}
        {user && <SignOut />}
      </dialog>
    </>
  );
};

export default NavBar;
