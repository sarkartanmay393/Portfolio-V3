import Layout from "~/layout/layout";
import { Box, List, Typography, useTheme } from "@mui/material";
import CraftItem from "~/components/craft/CraftItem";

export default function CraftsPage() {
    const theme = useTheme();

    return (
        <Layout Title="Crafts">
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
                    👨🏾‍💻 Some of my crafts
                </Typography>

                <List >
                    {CraftDetails.map((craft) => (
                        <CraftItem key={craft.title} {...craft} />
                    ))}
                </List>
            </Box>
        </Layout>
    );
};

const CraftDetails = [{
    title: "Guestbook",
    description: "Sign in with Github and leave any message for the community",
    url: "/crafts/guestbook",
    emoji: "📇",
}];