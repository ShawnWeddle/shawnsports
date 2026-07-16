import MainPage from "~/components/Page/MainPage";
import HockeyMinorList from "~/components/affiliates/Hockey";

const NHLMinors = () => {
  return (
    <MainPage
      title="NHL - Sports Mega World"
      description="NHL SportsMegaWorld"
      favicon="/nhlfavicon.ico"
      pageMode="NHL"
      underPageMode="NHL_Minors"
    >
      <HockeyMinorList />
    </MainPage>
  );
};

export default NHLMinors;
