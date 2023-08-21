import { Box } from "@mui/material";
import Layout from "~/layout/layout";

const BlogsPage = () => {
    return (
        <Layout Title="Blogs">
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

export default BlogsPage;
