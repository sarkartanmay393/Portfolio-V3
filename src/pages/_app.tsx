import "~/styles/globals.css";

import React from "react";
import Theme from "../theme/theme";
import globalStore from "~/store/globalStore";
import { useStoreState } from "~/store/typedHooks";
import { StoreProvider, createStore } from "easy-peasy";
import { ThemeProvider, createTheme } from "@mui/material";
import { SessionProvider } from "next-auth/react"

import { type AppType } from "next/app";
import { type Session } from "next-auth";
import type GlobalStoreModel from "~/interfaces/globalStoreModel";

import "@fontsource/manrope/200.css";
import "@fontsource/manrope/300.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";

// Initialised Global State
const store = createStore<GlobalStoreModel>(globalStore);

// Main Component
const PortfolioApp: AppType<{ session: Session }> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <StoreProvider store={store}>
        <InsideApp pageProps={pageProps} router={undefined} Component={Component} />
      </StoreProvider>
    </SessionProvider>
  );
};

// Insider Component
const InsideApp: AppType = ({ Component, ...pageProps }) => {
  const mode = useStoreState((state) => state.theme.mode);
  const theme = React.useMemo(() => createTheme(Theme(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
        <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default PortfolioApp;
