import { Box, Typography, useTheme } from "@mui/material";
import Layout from "~/layout/layout";

const ContactsPage = () => {
    const theme = useTheme();

    return (
        <Layout Title="Contacts">
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
                    📇 About myself
                </Typography>

            </Box>
        </Layout >
    );
};

export default ContactsPage;
