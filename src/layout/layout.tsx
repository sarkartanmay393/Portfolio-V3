import Head from "next/head";
import type CAppType from "~/interfaces/customAppType";
import { Box, useTheme, CssBaseline } from "@mui/material";
import NavigationBar from "~/components/NavigationBar";

const Layout = ({ Title, children, props }: CAppType) => {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>{Title}</title>
        <meta name="language" content="en" />
        <meta name="author" content="Tanmay Sarkar" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Personal portfolio of a software engineer cum full stack web developer with rich blogs and projects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CssBaseline enableColorScheme />

      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "center",
          overflowY: "scroll",
        }}
      >
        <NavigationBar />

        <Box
          sx={{
            [theme.breakpoints.up("mobile")]: {
              width: "90vw",
              marginTop: "3rem",
              marginBottom: "8rem",
            },
            [theme.breakpoints.up("tablet")]: {
              width: "75vw",
            },
            [theme.breakpoints.up("laptop")]: {
              width: "65vw",
              marginTop: "108px",
              marginBottom: "4rem",
            },
            ...props,
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
