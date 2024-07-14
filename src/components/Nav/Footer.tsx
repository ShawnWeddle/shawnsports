import { cn } from "~/utils/cn";
import Link from "next/link";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "~/components/ui/menubar";

const Footer: React.FC = () => {
  return (
    <Menubar
      className={cn("flex min-w-full flex-col justify-center sm:flex-row")}
    >
      <div className="flex justify-center">
        <MenubarMenu>
          <MenubarTrigger className="rounded-lg from-emerald-500 via-sky-600 to-indigo-600 text-home focus:bg-gradient-to-r focus:text-white data-[state=open]:bg-gradient-to-r data-[state=open]:text-white">
            <Link
              href="https://www.shawnweddle.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SMW
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="rounded-lg text-formulaOne focus:bg-formulaOne data-[state=open]:bg-formulaOne">
            F1
          </MenubarTrigger>
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
          <MenubarTrigger className="rounded-lg text-nfl focus:bg-nfl data-[state=open]:bg-nfl">
            NFL
          </MenubarTrigger>
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
          <MenubarTrigger className="rounded-lg text-nba focus:bg-nba data-[state=open]:bg-nba">
            NBA
          </MenubarTrigger>
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
      </div>
      <div className="flex justify-center">
        <MenubarMenu>
          <MenubarTrigger className="rounded-lg text-mlb focus:bg-mlb data-[state=open]:bg-mlb">
            MLB
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem asChild>
              <Link href="/mlb/world-series">World Series</Link>
            </MenubarItem>
            <MenubarItem asChild>
              <Link href="/mlb/rank">Rank</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="rounded-lg text-nhl focus:bg-nhl data-[state=open]:bg-nhl">
            NHL
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem asChild>
              <Link href="/nhl/stanley-cups">Stanley Cups</Link>
            </MenubarItem>
            <MenubarItem asChild>
              <Link href="/nhl/rank">Rank</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="rounded-lg text-nba focus:bg-nba data-[state=open]:bg-nba">
            WNBA
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem asChild>
              <Link href="/wnba/finals">Finals</Link>
            </MenubarItem>
            <MenubarItem asChild>
              <Link href="/wnba/rank">Rank</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="rounded-lg text-cfl focus:bg-cfl data-[state=open]:bg-cfl">
            CFL
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem asChild>
              <Link href="/cfl/grey-cups">Grey Cups</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </div>
    </Menubar>
  );
};

export default Footer;
