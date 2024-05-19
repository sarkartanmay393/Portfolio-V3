// import { Fade } from "@mui/material";

import Layout from "~/layout/layout";
import AboutSection from "~/components/about";

const AboutPage = () => {
  return (
    <Layout Title="About | TSX">
      {/* <Fade in={false} timeout={300} mountOnEnter unmountOnExit> */}
      <AboutSection />
      {/* </Fade> */}
    </Layout>
  );
};

export default AboutPage;
