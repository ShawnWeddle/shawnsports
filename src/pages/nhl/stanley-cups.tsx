import MainPage from "~/components/Page/MainPage";
import StanleyCupSeriesList from "~/components/NHL/StanleyCupSeriesList";

const StanleyCups = () => {
  return (
    <MainPage
      title="NHL - Sports Mega World"
      description="NHL SportsMegaWorld"
      favicon="/nhlfavicon.ico"
      pageMode="NHL"
      underPageMode="NHL_Stanley_Cups"
    >
      <StanleyCupSeriesList />
    </MainPage>
  );
};

export default StanleyCups;
