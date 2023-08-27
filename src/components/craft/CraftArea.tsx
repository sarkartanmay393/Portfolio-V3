import { Box, List, Typography, useTheme } from "@mui/material";
import CraftItem from "~/components/craft/CraftItem";

export default function CraftsArea() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >

      <Typography mb="2rem" sx={{
        fontWeight: "600",
        color: theme.palette.text.primary,
        [theme.breakpoints.up("mobile")]: {
          fontSize: "3rem",
        },
        [theme.breakpoints.up("tablet")]: {
          fontSize: "4rem",
        },
        "::selection": {
          backgroundColor: "rgba(0,0,0,0)",
        },
      }}>👨🏾‍💻 Some of my crafts</Typography>

      <List >
        {CraftDetails.map((craft, i) => (
          <CraftItem key={craft.title} craft={{ ...craft, timeOut: i * 300 }} />
        ))}
      </List>

    </Box>
  );
};

const CraftDetails = [{
  title: "Guestbook",
  description: "Sign in with Github and leave any message for the community",
  url: "/crafts/guestbook",
  emoji: "📇",
}];