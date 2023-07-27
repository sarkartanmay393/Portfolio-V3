import { Box } from "@mui/material";

import IntroCard from "~/components/home/IntroCard";
import ProjectCard from "~/components/home/Projects";

const HomePage = () => {
  return (
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
      <ProjectCard />
    </Box>
  );
};

export default HomePage;
