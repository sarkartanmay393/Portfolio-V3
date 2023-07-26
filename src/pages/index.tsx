import { Button, Typography, useTheme } from "@mui/material";
import Layout from "~/layout/layout";
import { useStoreActions, useStoreState } from "~/store/typedHooks";

export default function Home() {
  const theme = useTheme();

  const mode = useStoreState((state) => state.theme.mode);
  const setTheme = useStoreActions((state) => state.setTheme);

  return (
    <Layout Title={"Home"}>
      <>
        <Button
          sx={{
            color: theme.palette.text.primary,
          }}
          onClick={() => {
            mode === "light" ? setTheme("dark") : setTheme("light");
          }}
        >
          {mode === "light" ? "Dark" : "Light"}
        </Button>
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
      </>
    </Layout>
  );
}
