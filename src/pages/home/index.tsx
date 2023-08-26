import { Box } from "@mui/material";
import Layout from "~/layout/layout";

import ProjectArea from "~/components/home/ProjectArea";
import IntroArea from "~/components/home/IntroArea";
import BlogArea from "~/components/home/BlogArea";
import Footer from "~/components/Footer";

const HomePage = () => {

  return (
    <Layout Title={"Home"}>
      <Box
        sx={{
          gap: "6rem",
          display: "flex",
          flexDirection: "column",

          // overflowY: "auto",
          // scrollSnapType: "y mandatory",
        }}
      >
        <IntroArea />
        <ProjectArea />
        <BlogArea />
        <Footer />
      </Box>
    </Layout>
  );
};

export default HomePage;
