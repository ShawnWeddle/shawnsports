import DriverStandings from "~/components/F1/Standings/DriverStandings";
import ConstructorStandings from "~/components/F1/Standings/ConstructorStandings";

const Standings: React.FC = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="m-4 sm:grid sm:w-auto sm:grid-cols-2 sm:gap-4">
        <div>
          <DriverStandings />
        </div>
        <div>
          <ConstructorStandings />
        </div>
      </div>
    </div>
  );
};

export default Standings;
