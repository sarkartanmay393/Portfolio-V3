import Image from "next/image";
import { Typography, Box, Button, useTheme } from "@mui/material";

import SendSharpIcon from "@mui/icons-material/SendSharp";
import GreenDot from "../../assets/green_dot.svg";
import MessageCross from "../../assets/message_cross.svg";
import VectorLogo from "../../assets/logo.svg";
import React from "react";


const IntroCard = () => {
  const theme = useTheme();


  const handleHireMe = () => {
    window.open(
      `mailto:sarkartanmay393@gmail.com?subject=Hi I wanted to contact the you&body=Hi, I'm ${name}, I wanted to contact the you regarding...`,
      '_blank'
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1.6rem",
        height: "100vh",
        justifyContent: "center",
        scrollSnapAlign: 'start',
        // [theme.breakpoints.up('laptop')]: {
        //   marginTop: '4rem'
        // },
      }}
    >
      <Box
        sx={{
          marginBottom: '1rem',
          display: "flex",
          alignItems: "center",
          gap: "0.8rem",

          [theme.breakpoints.up("laptop")]: {
            display: "none",
          },
        }}
      >
        <Image src={VectorLogo as string} alt="" />
        <Typography
          sx={{
            [theme.breakpoints.down("laptop")]: {
              fontSize: "4rem",
            },
            fontWeight: "600",
            textTransform: "lowercase",
            color: String(theme.palette.primary),
          }}
        >
          tsx
        </Typography>
      </Box>
      <Typography
        sx={{
          [theme.breakpoints.up("mobile")]: {
            fontSize: "3.2rem",
          },
          [theme.breakpoints.up("tablet")]: {
            fontSize: "4.8rem",
          },

          fontWeight: "800",
          color: theme.palette.text.primary,
          lineHeight: "100%",

          "::selection": {
            color:
              theme.palette.mode === "light"
                ? theme.palette.secondary.main
                : theme.palette.secondary.light,
          },
        }}
      >
        {`Hey, I'm Tanmay -- the full-stack warrior who crafts digital masterpieces`}
      </Typography>
      <Typography
        sx={{
          [theme.breakpoints.up("mobile")]: {
            fontSize: "1.6rem",
          },
          [theme.breakpoints.up("tablet")]: {
            fontSize: "2.2rem",
          },
          fontWeight: "600",
          lineHeight: "1.3",
          color: theme.palette.text.secondary,
          "::selection": {
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.text.primary,
          },
        }}
      >
        {`Fusing Design and Code, With a focus on polished,
        distinctive products, I elevate brand presence, leave lasting
        impressions on users, founders, startups, and creators. Driven by
        passion and creativity, I thrive on pushing boundaries in the
        evolving tech landscape.`}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "1rem",
          cursor: "default",
        }}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <Image className="green_dot" src={GreenDot} alt="availability dot" />
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
            "::selection": {
              backgroundColor: "rgba(0,0,0,0)",
              // color: theme.palette.secondary.contrastText,
            },
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
          onClick={handleHireMe}
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "0.8rem",

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
              color: theme.custom.button.textColor,
            }}
          >
            Hire me
          </Typography>
          <SendSharpIcon sx={{ fontSize: "1.8rem", translate: "0 1.5px" }} />
        </Button>
        <Button
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "0.6rem",

            padding: "0.8rem 2.6rem",
            borderRadius: "2.8rem",
            backgroundColor: theme.palette.primary.contrastText,
            border: `0.05rem solid ${theme.palette.primary.light}`,

            [theme.breakpoints.between("mobile", "tablet")]: {
              "min-width": "100%",
            },

            ":hover": {
              backgroundColor: theme.custom.button.onHoverBgColor,
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
              color: theme.custom.button.textColor,
            }}
          >
            leave a message
          </Typography>
          <Image
            width={20}
            src={MessageCross as string}
            alt="leave a message using github"
          />
        </Button>
      </Box>
    </Box>
  );
};

export default IntroCard;
