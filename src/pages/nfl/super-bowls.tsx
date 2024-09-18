import MainPage from "~/components/Page/MainPage";
import ChampionshipList from "~/components/champs/Championships";

const SuperBowls = () => {
  return (
    <MainPage
      title="NFL - Sports Mega World"
      description="NFL SportsMegaWorld"
      favicon="/nflfavicon.ico"
      pageMode="NFL"
      underPageMode="NFL_Super_Bowls"
    >
      <ChampionshipList sport="NFL" />
    </MainPage>
  );
};

export default SuperBowls;
