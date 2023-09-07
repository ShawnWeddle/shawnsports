import { useState } from "react";
import { api } from "~/utils/api";
import { createUserSchema } from "~/server/api/auth/schema";

const SignIn: React.FC = () => {
  const [signInMode, setSignInMode] = useState<"LOG-IN" | "SIGN-UP">("LOG-IN");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [isSignedUp, setIsSignedUp] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [signUpErrors, setSignUpErrors] = useState<string[]>([]);

  const registerUser = api.user.registerUser.useMutation();

  const handleRegister = () => {
    const validation = createUserSchema.safeParse({
      username: username,
      email: email,
      password: password,
      passwordConfirm: passwordConfirmation,
    });
    console.log(validation);
    if (validation.success) {
      registerUser.mutate(
        {
          username: username,
          email: email,
          password: password,
          passwordConfirm: passwordConfirmation,
        },
        {
          onSuccess() {
            setSignUpErrors([]);
            setIsSignedUp(true);
          },
          onError(error) {
            console.log(error);
          },
        }
      );
    }
  };

  return (
    <div>
      <div className="m-2 flex flex-col items-center">
        <h1 className="text-center text-2xl font-semibold">
          {signInMode === "LOG-IN" ? "Log In" : "Sign Up"}
        </h1>
        <div className="flex flex-col ">
          <label className="text-lg" htmlFor="add-username">
            Username
          </label>
          <input
            id="add-username"
            className="my-1 w-64 rounded border-2 border-home pl-1 focus:bg-ylo/20"
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        {signInMode === "SIGN-UP" && (
          <div className="flex flex-col">
            <label className="text-lg" htmlFor="add-email">
              Email
            </label>
            <input
              id="add-email"
              className="my-1 w-64 rounded border-2 border-home pl-1 focus:bg-ylo/20"
              type="text"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
        )}
        <div className="flex flex-col">
          <label className="text-lg" htmlFor="add-password">
            Password
          </label>
          <input
            id="add-password"
            className="my-1 w-64 rounded border-2 border-home pl-1 focus:bg-ylo/20"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        {signInMode === "SIGN-UP" && (
          <div className="flex flex-col">
            <label className="text-lg" htmlFor="add-password-confirm">
              Confirm Password
            </label>
            <input
              id="add-password-confirm"
              className="my-1 w-64 rounded border-2 border-home pl-1 focus:bg-ylo/20"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm password "
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              value={passwordConfirmation}
            />
          </div>
        )}
        <div className="flex justify-center">
          <input
            id="show-password-input"
            className="m-0.5"
            type="checkbox"
            checked={showPassword}
            onChange={(e) => {
              if (e.target.checked) {
                setShowPassword(true);
              } else {
                setShowPassword(false);
              }
            }}
          />
          <label htmlFor="show-password-input" className="text-sm">
            Show Password
          </label>
        </div>
        {signInMode === "SIGN-UP" && (
          <button
            className="m-2 rounded bg-home p-1 text-xl text-white hover:bg-home/80"
            onClick={handleRegister}
          >
            Sign Up
          </button>
        )}
        {signInMode === "LOG-IN" && (
          <button className="m-2 rounded bg-home p-1 text-xl text-white hover:bg-home/80">
            Log In
          </button>
        )}

        {signInMode === "SIGN-UP" && (
          <p className="">
            Already have an account?{" "}
            <button
              className="hover:underline"
              onClick={() => {
                setShowPassword(true);
                setSignInMode("LOG-IN");
              }}
            >
              Log In
            </button>
          </p>
        )}
        {signInMode === "LOG-IN" && (
          <p className="">
            Don&apos;t have an account?{" "}
            <button
              className="hover:underline"
              onClick={() => {
                setShowPassword(false);
                setSignInMode("SIGN-UP");
              }}
            >
              Sign Up
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default SignIn;
