import { Box, Typography, useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: "center",
      alignItems: 'center',

      marginTop: '2rem',
      marginBottom: '3rem',
      padding: "2rem",

      gap: '0.4rem',

      backgroundColor: theme.custom.clickableItem.backgroundColorlight

    }}>

      <Typography sx={{
        fontWeight: "500",
        color: theme.palette.text.primary,
        [theme.breakpoints.up("mobile")]: {
          fontSize: "1rem",
        },
        [theme.breakpoints.up("tablet")]: {
          fontSize: "1.4rem",
        },
        "::selection": {
          backgroundColor: "rgba(0,0,0,0)",
        },
      }}>{tagline}</Typography>

      <Typography sx={{
        fontWeight: "700",
        color: theme.palette.text.primary,
        [theme.breakpoints.up("mobile")]: {
          fontSize: "0.8rem",
        },
        [theme.breakpoints.up("tablet")]: {
          fontSize: "1rem",
        },
        "::selection": {
          backgroundColor: "rgba(0,0,0,0)",
        },
      }}>{para}</Typography>

    </Box>
  );
}

const tagline = `A great man will be hard on himself, not on others.`
const para = `Made with ❤️ in India`