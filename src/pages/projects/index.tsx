import { Box, Typography, useTheme } from "@mui/material";
import Layout from "~/layout/layout";

const ProjectsPage = () => {
  const theme = useTheme();

  return (
    <Layout Title="Projects">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Typography
          sx={{
            [theme.breakpoints.up("mobile")]: {
              fontSize: "3rem",
            },
            [theme.breakpoints.up("tablet")]: {
              fontSize: "4rem",
            },
            fontWeight: "600",
            textTransform: "",
            color: String(theme.palette.primary),
          }}
        >
          🤖 Latest Projects
        </Typography>

      </Box>
    </Layout >
  );
};

export default ProjectsPage;
