import Layout from "~/layout/layout";
import { Box, List } from "@mui/material";
import CraftItem from "~/components/craft/CraftItem";

export default function CraftsPage() {

    return (
        <Layout Title="Crafts">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >

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