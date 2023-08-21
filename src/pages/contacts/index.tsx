import { Box } from "@mui/material";
import Layout from "~/layout/layout";

const ContactsPage = () => {
    return (
        <Layout Title="Contacts">
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

export default ContactsPage;
