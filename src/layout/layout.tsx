import Head from "next/head";
import type CAppType from "~/interfaces/customAppType";
import { Box, useTheme, CssBaseline, GlobalStyles } from "@mui/material";

const Layout = ({ Title, children }: CAppType) => {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>{Title}</title>
        <meta
          name="description"
          content="Personal portfolio of software engineer cum full stack web developer."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalStyles
        styles={{ body: { backgroundColor: theme.palette.background.default } }}
      />

      <CssBaseline enableColorScheme />

      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;
