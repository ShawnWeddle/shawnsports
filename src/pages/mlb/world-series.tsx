import MainPage from "~/components/Page/MainPage";
import ChampionshipList from "~/components/champs/Championships";

const WorldSeries = () => {
  return (
    <MainPage
      title="MLB - Sports Mega World"
      description="MLB SportsMegaWorld"
      favicon="/mlbfavicon.ico"
      pageMode="MLB"
      underPageMode="MLB_World_Series"
    >
      <ChampionshipList sport="MLB" />
    </MainPage>
  );
};

export default WorldSeries;
