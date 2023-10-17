import MainPage from "~/components/Page/MainPage";
import { NFLScheduleContextProvider } from "~/context/NFLscheduleContext";
import NFLSchedule from "~/components/NFL/Schedule";

const Schedule = () => {
  return (
    <MainPage
      title="NFL - Sports Mega World"
      description="NFL SportsMegaWorld"
      favicon="/nflfavicon.ico"
      pageMode="NFL"
      underPageMode="NFL_Schedule"
    >
      <NFLScheduleContextProvider>
        <NFLSchedule />
      </NFLScheduleContextProvider>
    </MainPage>
  );
};

export default Schedule;
