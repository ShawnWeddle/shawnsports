import MainPage from "~/components/Page/MainPage";
import NBAFinalsList from "~/components/NBA/NBAFinalsList";

const Finals = () => {
  return (
    <MainPage
      title="NBA - Sports Mega World"
      description="NBA SportsMegaWorld"
      favicon="/nbafavicon.ico"
      pageMode="NBA"
      underPageMode="NBA_Finals"
    >
      <NBAFinalsList />
    </MainPage>
  );
};

export default Finals;
