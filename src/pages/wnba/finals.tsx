import MainPage from "~/components/Page/MainPage";
import ChampionshipList from "~/components/champs/Championships";

const Finals = () => {
  return (
    <MainPage
      title="WNBA - Sports Mega World"
      description="WNBA SportsMegaWorld"
      favicon="/nbafavicon.ico"
      pageMode="WNBA"
      underPageMode="WNBA_Finals"
    >
      <ChampionshipList sport="WNBA" />
    </MainPage>
  );
};

export default Finals;
