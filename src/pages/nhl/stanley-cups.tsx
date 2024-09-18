import MainPage from "~/components/Page/MainPage";
import ChampionshipList from "~/components/champs/Championships";

const StanleyCups = () => {
  return (
    <MainPage
      title="NHL - Sports Mega World"
      description="NHL SportsMegaWorld"
      favicon="/nhlfavicon.ico"
      pageMode="NHL"
      underPageMode="NHL_Stanley_Cups"
    >
      <ChampionshipList sport="NHL" />
    </MainPage>
  );
};

export default StanleyCups;
