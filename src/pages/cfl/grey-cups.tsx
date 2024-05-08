import MainPage from "~/components/Page/MainPage";
import GreyCupList from "~/components/CFL/CFLGreyCupList";

const GreyCups = () => {
  return (
    <MainPage
      title="CFL - Sports Mega World"
      description="CFL SportsMegaWorld"
      favicon="/nflfavicon.ico"
      pageMode="CFL"
      underPageMode="CFL_Grey_Cups"
    >
      <GreyCupList />
    </MainPage>
  );
};

export default GreyCups;
