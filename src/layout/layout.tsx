import Head from "next/head";
import type CAppType from "~/interfaces/customAppType";
import { Box, useTheme, CssBaseline } from "@mui/material";
import NavigationBar from "~/components/NavigationBar";
import Footer from "~/components/Footer";

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

      <CssBaseline enableColorScheme />

      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflowY: "scroll",
        }}
      >
        <NavigationBar />

        <Box
          sx={{
            [theme.breakpoints.up("mobile")]: {
              width: "90vw",
            },
            [theme.breakpoints.up("tablet")]: {
              width: "75vw",
            },
            [theme.breakpoints.up("laptop")]: {
              width: "65vw",
            },
          }}
        >
          {children}
        </Box>
        
      </Box>
    </>
  );
};

export default Layout;
