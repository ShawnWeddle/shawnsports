import { useEffect } from "react";
import { cn } from "~/utils/cn";
import Link from "next/link";
import { useNavContext } from "~/hooks/useNavContext";
import type { PageHeadsType, UnderPageHeadsType } from "~/data/SiteData";
import { useAuthContext } from "~/hooks/useAuthContext";
import { MobileResponsiveSMWLogo } from "../Page/Logo";
import SignIn from "../auth/NewSignIn";
("../auth/NewSignIn");
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "~/components/ui/menubar";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

import { CircleUserRound, ChevronDown } from "lucide-react";

interface NavProps {
  pageMode: PageHeadsType;
  underPageMode: UnderPageHeadsType;
}

const NavBar: React.FC<NavProps> = (props: NavProps) => {
  const { pageMode, underPageMode } = props;
  const { navState, navDispatch } = useNavContext();

  useEffect(() => {
    navDispatch({
      type: "CHANGE_PAGE",
      payload: {
        pageMode: pageMode,
        underPageMode: underPageMode,
      },
    });
  }, [navDispatch, pageMode, underPageMode]);

  return (
    <Menubar
      className={cn("min-w-full justify-center", {
        "bg-home": pageMode === "Home",
        "bg-nba": pageMode === "NBA" || pageMode === "WNBA",
        "bg-nfl": pageMode === "NFL",
        "bg-nhl": pageMode === "NHL",
        "bg-mlb": pageMode === "MLB",
        "bg-formulaOne": pageMode === "F1",
        "bg-cfl": pageMode === "CFL",
      })}
    >
      <MenubarMenu>
        <MobileResponsiveSMWLogo />
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>F1</MenubarTrigger>
        <MenubarContent>
          <MenubarItem asChild>
            <Link href="/f1/tables">Tables</Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link href="/f1/standings">Standings</Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link href="/f1/compare">Compare</Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link href="/f1/rank">Rank</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>NFL</MenubarTrigger>
        <MenubarContent>
          <MenubarItem asChild>
            <Link href="/nfl/schedule">Schedule</Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link href="/nfl/super-losers">Super Losers</Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link href="/nfl/super-bowls">Super Bowls</Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link href="/nfl/rank">Rank</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>NBA</MenubarTrigger>
        <MenubarContent>
          <MenubarItem asChild>
            <Link href="/nba/future-picks">Future Picks</Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link href="/nba/lottery">Lottery</Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link href="/nba/finals">Finals</Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link href="/nba/rank">Rank</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <ChevronDown />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>MLB</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem asChild>
                <Link href="/mlb/world-series">World Series</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href="/mlb/rank">Rank</Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>NHL</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem asChild>
                <Link href="/nhl/stanley-cups">Stanley Cups</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href="/nhl/rank">Rank</Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>WNBA</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem asChild>
                <Link href="/wnba/finals">Finals</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href="/wnba/rank">Rank</Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>CFL</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem asChild>
                <Link href="/cfl/grey-cups">Grey Cups</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href="/cfl/rank">Rank</Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <Dialog>
          <DialogTrigger>
            <CircleUserRound className="text-white" />
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>
              <VisuallyHidden.Root>Sign Up or Log In</VisuallyHidden.Root>
            </DialogTitle>
            <SignIn />
          </DialogContent>
        </Dialog>
      </MenubarMenu>
    </Menubar>
  );
};

export default NavBar;
