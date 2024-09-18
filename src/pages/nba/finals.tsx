import MainPage from "~/components/Page/MainPage";
import ChampionshipList from "~/components/champs/Championships";

const Finals = () => {
  return (
    <MainPage
      title="NBA - Sports Mega World"
      description="NBA SportsMegaWorld"
      favicon="/nbafavicon.ico"
      pageMode="NBA"
      underPageMode="NBA_Finals"
    >
      <ChampionshipList sport="NBA" />
    </MainPage>
  );
};

export default Finals;
