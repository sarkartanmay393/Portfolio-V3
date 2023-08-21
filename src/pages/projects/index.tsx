import { Box } from "@mui/material";
import Layout from "~/layout/layout";

const ProjectsPage = () => {
  return (
    <Layout Title="Projects">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "6rem",
          overflowY: "auto",
          scrollSnapType: "y mandatory",
        }}
      >
      </Box>
    </Layout>
  );
};

export default ProjectsPage;
