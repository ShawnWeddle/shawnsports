import HomeHero from "./HomeHero";

const HomeComp: React.FC = () => {
  return (
    <div>
      <h1 className="py-4 text-center">
        Welcome to{" "}
        <span className="text-home">
          <span className="text-2xl font-semibold">S</span>ports
          <span className="text-2xl font-semibold">M</span>ega
          <span className="text-2xl font-semibold">W</span>orld.com
        </span>{" "}
        - a collection of resources for different sports leagues.
      </h1>
      <hr />
      <div className="m-6 grid gap-6 sm:grid-cols-2">
        <HomeHero sportMode="F1" />
        <HomeHero sportMode="NFL" />
        <HomeHero sportMode="NBA" />
        <HomeHero sportMode="MLB" />
        <HomeHero sportMode="NHL" />
        <HomeHero sportMode="WNBA" />
      </div>
      <hr />
      <h1 className="text-center text-xl font-semibold">
        Note from the developer
      </h1>
      <h1 className="py-4 text-center">
        Hello, I&apos;m{" "}
        <span className="text-home">
          <span className="text-2xl font-semibold">S</span>hawn
          <span className="text-2xl font-semibold">M</span>arlin
          <span className="text-2xl font-semibold">W</span>eddle
        </span>
        . I built this website.
      </h1>
    </div>
  );
};

export default HomeComp;
