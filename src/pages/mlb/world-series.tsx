import MainPage from "~/components/Page/MainPage";
import WorldSeriesList from "~/components/MLB/WorldSeriesList";

const WorldSeries = () => {
  return (
    <MainPage
      title="MLB - Sports Mega World"
      description="MLB SportsMegaWorld"
      favicon="/mlbfavicon.ico"
      pageMode="MLB"
      underPageMode="MLB_World_Series"
    >
      <WorldSeriesList />
    </MainPage>
  );
};

export default WorldSeries;
