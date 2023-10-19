import Layout from "~/layout/layout";
import { Fade, useTheme } from "@mui/material";
import AboutSection from "~/components/about";

const AboutPage = () => {
    const theme = useTheme();

    return (
        <Layout Title="About | TSX">
            {/* <Fade in={false} timeout={300} mountOnEnter unmountOnExit> */}
            {/* <AboutSection /> */}
            <h3> Will update soon!</h3>
            {/* </Fade> */}
        </Layout >
    );
};

export default AboutPage;
