import MainPage from "~/components/Page/MainPage";
import { NBALotteryContextProvider } from "~/context/NBAlotteryContext";
import NBALottery2 from "~/components/NBA/Lottery/NBALottery2";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Lottery = () => {
  return (
    <MainPage
      title="NBA - Sports Mega World"
      description="NBA SportsMegaWorld"
      favicon="/nbafavicon.ico"
      pageMode="NBA"
      underPageMode="NBA_Lottery"
    >
      <DndProvider backend={HTML5Backend}>
        <NBALotteryContextProvider>
          <NBALottery2 />
        </NBALotteryContextProvider>
      </DndProvider>
    </MainPage>
  );
};

export default Lottery;
