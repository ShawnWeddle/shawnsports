import MainPage from "~/components/Page/MainPage";
import ChampionshipList from "~/components/champs/Championships";

const GreyCups = () => {
  return (
    <MainPage
      title="CFL - Sports Mega World"
      description="CFL SportsMegaWorld"
      favicon="/nflfavicon.ico"
      pageMode="CFL"
      underPageMode="CFL_Grey_Cups"
    >
      <ChampionshipList sport="CFL" />
    </MainPage>
  );
};

export default GreyCups;
