import { Box } from "@mui/material";
import Layout from "~/layout/layout";

const CraftsPage = () => {
    return (
        <Layout Title="Crafts">
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

export default CraftsPage;
