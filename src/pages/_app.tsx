import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { NavContextProvider } from "~/context/NavContext";
import { AuthContextProvider } from "~/context/AuthContext";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <AuthContextProvider>
      <NavContextProvider>
        <Component {...pageProps} />
      </NavContextProvider>
    </AuthContextProvider>
  );
};

export default api.withTRPC(MyApp);
