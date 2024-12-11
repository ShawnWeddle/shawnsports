import MainPage from "~/components/Page/MainPage";
import { NBALotteryContextProvider } from "~/context/NBAlotteryContext";
import NBALottery from "~/components/NBA/Lottery/NBALottery";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import NoteFromDev from "~/components/Home/NoteFromDev";

const Lottery = () => {
  return (
    <MainPage
      title="NBA - Sports Mega World"
      description="NBA SportsMegaWorld"
      favicon="/nbafavicon.ico"
      pageMode="NBA"
      underPageMode="NBA_Lottery"
    >
      <h1 className="mx-2 my-4 text-center text-2xl font-semibold sm:text-4xl">
        2025 NBA Lottery
      </h1>
      <NoteFromDev />
      {/* <DndProvider backend={HTML5Backend}>
        <NBALotteryContextProvider>
          <NBALottery />
        </NBALotteryContextProvider>
      </DndProvider> */}
    </MainPage>
  );
};

export default Lottery;
