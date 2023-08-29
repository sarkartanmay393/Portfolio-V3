import { Box, Button, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import Layout from "~/layout/layout";

export default function Custom404() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Layout Title="404 Error">
      <Box sx={{
        height: "640px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
      }}>
        <Typography sx={{
          fontWeight: "700",
          lineHeight: "100%",
          color: theme.palette.text.primary,
          [theme.breakpoints.up("mobile")]: {
            fontSize: "2rem",
          },
          [theme.breakpoints.up("tablet")]: {
            fontSize: "3rem",
          },
        }}>404: Page Not Found</Typography>
        <Button
          disableRipple
          onClick={() => router.back()}
          sx={{
            ":hover": {
              backgroundColor: theme.custom.clickableItem.onHoverBackgroundColor,
            },
          }}>
          <Typography sx={{
            fontWeight: "700",
            lineHeight: "100%",
            color: theme.palette.text.primary,
            textTransform: 'none',
            [theme.breakpoints.up("mobile")]: {
              fontSize: "1.6rem",
            },
            [theme.breakpoints.up("tablet")]: {
              fontSize: "2rem",
            },
          }}>/back</Typography>
        </Button>
      </Box>
    </Layout>
  );
}