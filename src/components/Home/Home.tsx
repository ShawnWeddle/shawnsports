import HomeNav from "./HomeNav";

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
      <HomeNav />
      <h1 className="mt-2 rounded bg-home text-center text-xl font-semibold text-white">
        Note from the developer
      </h1>
      <div className="flex w-full justify-center">
        <p className="p-4 md:max-w-screen-md">
          {"Hello, I'm "}
          <span className="text-home">
            <span className="text-2xl font-semibold">S</span>hawn
            <span className="text-2xl font-semibold">M</span>arlin
            <span className="text-2xl font-semibold">W</span>eddle
          </span>
          {
            ", the developer of this website. Thanks for checking out SportsMegaWorld. I'm a lifelong sports fan and I created this website to put together these sports resources I couldn't find anywhere else."
          }
        </p>
      </div>
    </div>
  );
};

export default HomeComp;
