import { Box, CssBaseline, GlobalStyles, Typography, useTheme } from "@mui/material";
import Head from "next/head";

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>TSX</title>
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            [theme.breakpoints.down("mobile")]: {
              fontSize: "1rem",
            },
            [theme.breakpoints.up("tablet")]: {
              fontSize: "2rem",
            },
            color: theme.palette.text.primary,
          }}
        >
          TSX is under construction!
        </Typography>
      </Box>
    </>
  );
}
