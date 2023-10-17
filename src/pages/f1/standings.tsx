import MainPage from "~/components/Page/MainPage";
import FormulaOneTable from "~/components/F1/Standings/Standings";

const Standings = () => {
  return (
    <MainPage
      title="Formula One - Sports Mega World"
      description="Formula One SportsMegaWorld"
      favicon="/f1favicon.ico"
      pageMode="F1"
      underPageMode="F1_Standings"
    >
      <FormulaOneTable />
    </MainPage>
  );
};

export default Standings;
