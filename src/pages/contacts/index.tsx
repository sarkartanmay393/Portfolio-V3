import Layout from "~/layout/layout";
import { Box, Typography, useTheme } from "@mui/material";

const ContactsPage = () => {
    const theme = useTheme();

    return (
        <Layout Title="Contacts">
            <Box
                sx={{
                    gap: "1rem",
                    display: "flex",
                    flexDirection: "column",

                    [theme.breakpoints.up('mobile')]: {
                        height: '90vh',
                    },
                    [theme.breakpoints.up('laptop')]: {
                        height: '50vh',
                    },

                    justifyContent: 'center',
                    alignItems: 'center'
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
                    Under Constructions
                </Typography>
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
                    🚧
                </Typography>


            </Box>
        </Layout >
    );
};

export default ContactsPage;
