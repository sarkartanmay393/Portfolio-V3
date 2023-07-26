import { Button, Typography, useTheme } from "@mui/material";
import Layout from "~/layout/layout";
import { useStoreActions, useStoreState } from "~/store/typedHooks";
import HomePage from "./home";

export default function Home() {
  const theme = useTheme();

  const mode = useStoreState((state) => state.theme.mode);
  const setTheme = useStoreActions((state) => state.setTheme);

  return (
    <Layout Title={"Home"}>
        <HomePage />
    </Layout>
  );
}
