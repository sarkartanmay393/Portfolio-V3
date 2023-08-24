import { Box } from "@mui/material";

import IntroCard from "~/components/home/IntroCard";
import Layout from "~/layout/layout";

const HomePage = () => {
  return (
    <Layout Title={"Home"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "6rem",
          overflowY: "auto",
          scrollSnapType: "y mandatory",
        }}
      >
        <IntroCard />
        {/* <ProjectCard /> */}
      </Box>
    </Layout>
  );
};

export default HomePage;
