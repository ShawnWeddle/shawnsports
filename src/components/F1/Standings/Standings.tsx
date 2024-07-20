import DriverStandings from "~/components/F1/Standings/DriverStandings";
import ConstructorStandings from "~/components/F1/Standings/ConstructorStandings";

const Standings: React.FC = () => {
  return (
    <>
      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">
        2024 Formula One Standings
      </h1>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 sm:px-4">
        <div>
          <DriverStandings />
        </div>
        <div>
          <ConstructorStandings />
        </div>
      </div>
    </>
  );
};

export default Standings;
