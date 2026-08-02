import { useState } from "react";
import FavoriteTeamsList from "./FavoriteTeams";
import { exampleTeams } from "./TeamInputs";
import FavoriteTeamInputs from "./TeamInputs";

interface MainProfileProps {
  name: string;
}

type ProfileModeType = "Main" | "FavoriteTeams";

const MainProfile: React.FC<MainProfileProps> = (props: MainProfileProps) => {
  const { name } = props;
  const [profileMode, setProfileMode] = useState<ProfileModeType>("Main");
  return (
    <section>
      <h1 className="mx-2 my-4 text-2xl font-semibold sm:text-4xl">{name}</h1>
      <div>
        Favorites{" "}
        <button
          onClick={() => {
            setProfileMode("FavoriteTeams");
          }}
        >
          Edit
        </button>
      </div>
      {profileMode === "Main" && (
        <>
          <div className="m-2 flex flex-wrap gap-1 sm:mx-0 md:max-w-screen-sm lg:max-w-screen-md">
            <FavoriteTeamsList teams={Object.values(exampleTeams)} />
          </div>
          <div>Rankings</div>
          <div className="border-2">LIST</div>
          <div>NFL Schedule</div>
          <div className="border-2">LIST</div>
        </>
      )}
      {profileMode === "FavoriteTeams" && <FavoriteTeamInputs name="" />}
    </section>
  );
};

export default MainProfile;
