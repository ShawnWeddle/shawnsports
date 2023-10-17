import HomeHero from "./HomeHero";

const HomeComp: React.FC = () => {
  return (
    <div>
      <h1 className="py-4">
        Welcome to <span className="text-2xl font-semibold">S</span>ports
        <span className="text-2xl font-semibold">M</span>ega
        <span className="text-2xl font-semibold">W</span>orld.com - a collection
        of resources for different sports leagues.
      </h1>
      <HomeHero sportMode="F1" />
      <HomeHero sportMode="NFL" />
      <HomeHero sportMode="NBA" />
      <HomeHero sportMode="MLB" />
      <HomeHero sportMode="NHL" />
      <HomeHero sportMode="WNBA" />
    </div>
  );
};

export default HomeComp;
