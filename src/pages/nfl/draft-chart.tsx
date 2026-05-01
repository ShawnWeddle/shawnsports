import MainPage from "~/components/Page/MainPage";
import DraftChart from "~/components/NFL/DraftChart";
import NoteFromDev from "~/components/Home/NoteFromDev";

const DraftChartNFL = () => {
  return (
    <MainPage
      title="NFL - Sports Mega World"
      description="NFL SportsMegaWorld"
      favicon="/nflfavicon.ico"
      pageMode="NFL"
      underPageMode="NFL_Draft_Chart"
    >
      <NoteFromDev />
    </MainPage>
  );
};

export default DraftChartNFL;
