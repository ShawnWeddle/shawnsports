import { useRef, useEffect } from "react";
import { cn } from "~/utils/cn";
import { useRouter } from "next/router";
import { useNavContext } from "~/hooks/useNavContext";
import { allNavHeads, pageHeads, pageRouter } from "~/data/Home";
import type { PageHeadsType, UnderPageHeadsType } from "~/data/Home";
import SignIn from "~/components/SignIn";
import { MobileResponsiveSMWLogo } from "../Logo";
import { MdAccountCircle } from "react-icons/md";
import { useAuthContext } from "~/hooks/useAuthContext";

interface NavProps {
  pageMode: PageHeadsType;
  underPageMode: UnderPageHeadsType;
}

const NavBar: React.FC<NavProps> = (props: NavProps) => {
  const { pageMode, underPageMode } = props;
  const { navState, navDispatch } = useNavContext();

  const { authDispatch, authState } = useAuthContext();
  const { user } = authState;

  const router = useRouter();

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

  const navPageButtons = pageHeads.map((page, index) => {
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
            "text-nhl": pageMode === "NHL",
            "text-formulaOne": pageMode === "F1",
          },
          {
            "rounded-xl bg-nba text-white":
              navState.underPageMode === underPage && pageMode === "NBA",
            "rounded-xl bg-nfl text-white":
              navState.underPageMode === underPage && pageMode === "NFL",
            "rounded-xl bg-nhl text-white":
              navState.underPageMode === underPage && pageMode === "NHL",
            "rounded-xl bg-formulaOne text-white":
              navState.underPageMode === underPage && pageMode === "F1",
          },
          {
            "rounded-xl hover:bg-nba/50 hover:text-white":
              navState.underPageMode !== underPage && pageMode === "NBA",
            "rounded-xl hover:bg-nfl/50 hover:text-white":
              navState.underPageMode !== underPage && pageMode === "NFL",
            "rounded-xl hover:bg-nhl/50 hover:text-white":
              navState.underPageMode !== underPage && pageMode === "NHL",
            "rounded-xl hover:bg-formulaOne/50 hover:text-white":
              navState.underPageMode !== underPage && pageMode === "F1",
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
    <>
      <div className="fixed left-0 right-0 top-0 z-50">
        <nav
          className={cn("flex justify-center gap-4", {
            "bg-home": pageMode === "Home",
            "bg-nba": pageMode === "NBA",
            "bg-nfl": pageMode === "NFL",
            "bg-nhl": pageMode === "NHL",
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
          <button
            className="py-2 text-xl text-white hover:text-gray-200 md:text-2xl"
            onClick={() => {
              dialog.current?.showModal();
            }}
          >
            <MdAccountCircle />
          </button>
        </nav>
        <nav className={cn("flex justify-center gap-4 bg-white")}>
          {pageMode !== "Home" && navUnderPageButtons}
          {pageMode === "Home" && (
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
        {user && (
          <button
            onClick={() => {
              void router.push(`/profile/${user.username}`);
            }}
          >
            {user.username}
          </button>
        )}
      </dialog>
    </>
  );
};

export default NavBar;
