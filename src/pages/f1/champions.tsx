import MainPage from "~/components/Page/MainPage";
import ChampionshipList from "~/components/F1/Champions/DriverChampionsList";

const Champions = () => {
  return (
    <MainPage
      title="Formula One - Sports Mega World"
      description="Formula One SportsMegaWorld"
      favicon="/f1favicon.ico"
      pageMode="F1"
      underPageMode="F1_Champions"
    >
      <ChampionshipList />
    </MainPage>
  );
};

export default Champions;
