import { useRef, useEffect } from "react";
import { cn } from "~/utils/cn";
import Link from "next/link";
import { useRouter } from "next/router";
import { useNavContext } from "~/hooks/useNavContext";
import type { PageHeadsType, UnderPageHeadsType } from "~/data/SiteData";
import { useAuthContext } from "~/hooks/useAuthContext";
import { MobileResponsiveSMWLogo } from "../Logo";

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

import { CircleUserRound } from "lucide-react";

interface NavProps {
  pageMode: PageHeadsType;
  underPageMode: UnderPageHeadsType;
}

const NewNavBar: React.FC<NavProps> = (props: NavProps) => {
  const { pageMode, underPageMode } = props;
  const { navState, navDispatch } = useNavContext();

  const { authState } = useAuthContext();
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
        <MenubarTrigger>...</MenubarTrigger>
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
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <CircleUserRound className="text-white" />
      </MenubarMenu>
    </Menubar>
  );
};

export default NewNavBar;
