import MainPage from "~/components/Page/MainPage";
import DraftChart from "~/components/NFL/DraftChart";

const DraftChartNFL = () => {
  return (
    <MainPage
      title="NFL - Sports Mega World"
      description="NFL SportsMegaWorld"
      favicon="/nflfavicon.ico"
      pageMode="NFL"
      underPageMode="NFL_Draft_Chart"
    >
      <DraftChart />
    </MainPage>
  );
};

export default DraftChartNFL;
