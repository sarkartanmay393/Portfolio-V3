import Head from "next/head";
import type CAppType from "~/interfaces/customAppType";
import { Box, useTheme, CssBaseline } from "@mui/material";
import NavigationBar from "~/components/NavigationBar";
import { useEffect, useState } from "react";

const Layout = ({ Title, children, props }: CAppType) => {
  const theme = useTheme();
  const [hidePulse, setHidePulse] = useState(false);

  useEffect(() => {
    // detect when scroll towards down
    // and hide nav pulse
    let prevScrollPosition = 0;
    window.onscroll = () => {
      if (window.scrollY > prevScrollPosition) {
        setHidePulse(true)
      } else {
        setHidePulse(false);
      }
      prevScrollPosition = window.scrollY;
    }

  }, []);

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

          overflowY: "scroll",
        }}
      >

        <NavigationBar hidePulse={false} />

        <Box
          {...props}
          sx={{
            [theme.breakpoints.up("mobile")]: {
              width: "90vw",
              paddingTop: "3rem",
            },
            [theme.breakpoints.up("tablet")]: {
              width: "75vw",
              paddingTop: "4rem",
            },
            [theme.breakpoints.up("laptop")]: {
              width: "65vw",
              paddingTop: "120px",
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
