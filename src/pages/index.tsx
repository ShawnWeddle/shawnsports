import MainPage from "~/components/Page/MainPage";
import HomeComp from "~/components/Home/Home";

const Home = () => {
  return (
    <MainPage
      title="Sports Mega World"
      description="Home SportsMegaWorld"
      favicon="/homefavicon.ico"
      pageMode="Home"
      underPageMode="Home"
    >
      <HomeComp />
    </MainPage>
  );
};

export default Home;
