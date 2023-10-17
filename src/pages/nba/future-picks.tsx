import MainPage from "~/components/Page/MainPage";
import NBApickTable from "~/components/NBA/NBApickTable";

const FuturePicks = () => {
  return (
    <MainPage
      title="NBA - Sports Mega World"
      description="NBA SportsMegaWorld"
      favicon="/nbafavicon.ico"
      pageMode="NBA"
      underPageMode="NBA_Future_Picks"
    >
      <NBApickTable />
    </MainPage>
  );
};

export default FuturePicks;
