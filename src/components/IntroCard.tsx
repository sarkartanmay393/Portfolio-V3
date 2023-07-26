import { Typography, Box, Button, useTheme } from "@mui/material";
import Image from "next/image";

import OutboundIcon from "@mui/icons-material/Outbound";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import GreenDot from "../assets/green_dot.svg";

const IntroCard = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1.6rem",
      }}
    >
      <Typography
        sx={{
          [theme.breakpoints.up("mobile")]: {
            fontSize: "3.2rem",
          },
          [theme.breakpoints.up("tablet")]: {
            fontSize: "4.8rem",
          },
          fontWeight: "600",
          color: theme.palette.text.primary,
          lineHeight: "100%",
        }}
      >
        {`Hey, I'm Tanmay -- the tech warrior who weaves frontend shots.`}
      </Typography>
      <Typography
        sx={{
          [theme.breakpoints.up("mobile")]: {
            fontSize: "1.6rem",
          },
          [theme.breakpoints.up("tablet")]: {
            fontSize: "2.2rem",
          },
          fontWeight: "500",
          lineHeight: "120%",

          color: theme.palette.text.secondary,
        }}
      >
        {`Blending design with code, I create polished, distinctive digital 
        products for founders, startups, and creators, boosting their online
        brand presence.`}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <Image src={GreenDot} alt="availability dot" />
        <Typography
          sx={{
            [theme.breakpoints.up("mobile")]: {
              fontSize: "1.4rem",
            },
            [theme.breakpoints.up("tablet")]: {
              fontSize: "1.5rem",
            },
            fontWeight: "400",
            color: theme.palette.text.secondary,
          }}
        >
          {`Available for new opportunities`}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          [theme.breakpoints.up("mobile")]: {
            gap: "0.8rem",
            flexDirection: "column",
          },
          [theme.breakpoints.up("tablet")]: {
            gap: "1.6rem",
            flexDirection: "row",
          },
        }}
      >
        <Button
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "4px",

            padding: "0.8rem 1.6rem",
            borderRadius: "2.8rem",
            backgroundColor: theme.palette.secondary.dark,

            minWidth: "20%",
            [theme.breakpoints.between("mobile", "tablet")]: {
              minWidth: "100%",
            },

            ":hover": {
              backgroundColor: theme.palette.secondary.main,
            },
          }}
        >
          <Typography
            sx={{
              [theme.breakpoints.up("mobile")]: {
                fontSize: "1.6rem",
              },
              [theme.breakpoints.up("tablet")]: {
                fontSize: "2rem",
              },
              fontWeight: "600",
              textTransform: "lowercase",
              color: theme.palette.text.primary,
            }}
          >
            Hire me
          </Typography>
          <OutboundIcon sx={{ marginTop: "2px" }} />
        </Button>
        <Button
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "0.6rem",

            padding: "0.8rem 1.6rem",
            borderRadius: "2.8rem",
            backgroundColor: theme.palette.primary.contrastText,
            border: `0.05rem solid ${theme.palette.primary.light}`,

            [theme.breakpoints.between("mobile", "tablet")]: {
              "min-width": "100%",
            },
          }}
        >
          <Typography
            sx={{
              [theme.breakpoints.up("mobile")]: {
                fontSize: "1.6rem",
              },
              [theme.breakpoints.up("tablet")]: {
                fontSize: "2rem",
              },
              fontWeight: "600",
              textTransform: "lowercase",
              color: theme.palette.text.primary,
            }}
          >
            leave a message
          </Typography>
          <UpcomingIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default IntroCard;
