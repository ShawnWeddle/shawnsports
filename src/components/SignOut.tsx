import { useAuthContext } from "~/hooks/useAuthContext";
import { useRouter } from "next/router";

const SignOut = () => {
  const router = useRouter();
  const { authDispatch, authState } = useAuthContext();
  const { user } = authState;
  return (
    <div>
      {user && (
        <p>
          You are now logged in as{" "}
          <button
            className="font-semibold text-home"
            onClick={() => {
              void router.push(`/profile/${user.username}`);
            }}
          >
            {user.username}
          </button>
        </p>
      )}
      <div className="flex justify-center">
        <button
          className="m-2 rounded bg-home p-1 text-xl text-white hover:bg-home/80"
          onClick={() => {
            authDispatch({
              type: "LOGOUT",
              payload: null,
            });
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SignOut;
