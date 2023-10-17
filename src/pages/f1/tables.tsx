import MainPage from "~/components/Page/MainPage";
import Standings from "~/components/F1/Tables/FullTable";

const Tables = () => {
  return (
    <MainPage
      title="Formula One - Sports Mega World"
      description="Formula One SportsMegaWorld"
      favicon="/f1favicon.ico"
      pageMode="F1"
      underPageMode="F1_Tables"
    >
      <Standings />
    </MainPage>
  );
};

export default Tables;
