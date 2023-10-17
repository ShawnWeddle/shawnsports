import MainPage from "~/components/Page/MainPage";
import WNBAFinalsList from "~/components/WNBA/WNBAFinalsList";

const Finals = () => {
  return (
    <MainPage
      title="WNBA - Sports Mega World"
      description="WNBA SportsMegaWorld"
      favicon="/nbafavicon.ico"
      pageMode="WNBA"
      underPageMode="WNBA_Finals"
    >
      <WNBAFinalsList />
    </MainPage>
  );
};

export default Finals;
