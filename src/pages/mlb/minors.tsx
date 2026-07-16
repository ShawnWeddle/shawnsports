import MainPage from "~/components/Page/MainPage";
import BaseballMinorList from "~/components/affiliates/Baseball";

const WorldSeries = () => {
  return (
    <MainPage
      title="MLB - Sports Mega World"
      description="MLB SportsMegaWorld"
      favicon="/mlbfavicon.ico"
      pageMode="MLB"
      underPageMode="MLB_Minors"
    >
      <BaseballMinorList />
    </MainPage>
  );
};

export default WorldSeries;
