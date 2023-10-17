import MainPage from "~/components/Page/MainPage";
import LineChart from "~/components/F1/Charts/LineChart";

const Compare = () => {
  return (
    <MainPage
      title="Formula One - Sports Mega World"
      description="Formula One SportsMegaWorld"
      favicon="/f1favicon.ico"
      pageMode="F1"
      underPageMode="F1_Compare"
    >
      <LineChart />
    </MainPage>
  );
};

export default Compare;
