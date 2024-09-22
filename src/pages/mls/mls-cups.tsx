import MainPage from "~/components/Page/MainPage";
import ChampionshipList from "~/components/champs/Championships";

const MLSCups = () => {
  return (
    <MainPage
      title="MLS - Sports Mega World"
      description="MLS SportsMegaWorld"
      favicon="/mlbfavicon.ico"
      pageMode="MLS"
      underPageMode="MLS_Cups"
    >
      <ChampionshipList sport="MLS" />
    </MainPage>
  );
};

export default MLSCups;
