const HomeComp: React.FC = () => {
  return (
    <div>
      <h1>
        Welcome to <span className="text-2xl font-semibold">S</span>ports
        <span className="text-2xl font-semibold">M</span>ega
        <span className="text-2xl font-semibold">W</span>orld.com - a collection
        of resources for different sports leagues.
      </h1>
      <div>
        <button className="text-xl font-semibold text-formulaOne hover:underline">
          Formula One
        </button>
      </div>
      <div>
        <button className="text-xl font-semibold text-nfl hover:underline">
          National Football League
        </button>
      </div>
      <div>
        <button className="text-xl font-semibold text-nba hover:underline">
          National Basketball Association
        </button>
      </div>
      <div>
        <button className="text-xl font-semibold text-nhl hover:underline">
          National Hockey League
        </button>
      </div>
    </div>
  );
};

export default HomeComp;
