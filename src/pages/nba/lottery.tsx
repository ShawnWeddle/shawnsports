import MainPage from "~/components/Page/MainPage";
import { NBALotteryContextProvider } from "~/context/NBAlotteryContext";
import NBALotteryRanker from "~/components/NBA/NBALottery";

const Lottery = () => {
  return (
    <MainPage
      title="NBA - Sports Mega World"
      description="NBA SportsMegaWorld"
      favicon="/nbafavicon.ico"
      pageMode="NBA"
      underPageMode="NBA_Lottery"
    >
      <NBALotteryContextProvider>
        <NBALotteryRanker />
      </NBALotteryContextProvider>
    </MainPage>
  );
};

export default Lottery;
