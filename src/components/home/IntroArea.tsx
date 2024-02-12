import React from "react";
import Image from "next/image";
import { Typography, Box, Button, useTheme } from "@mui/material";

import VectorLogo from "../../assets/logo.svg";
import GreenDot from "../../assets/green_dot.svg";
import MessageCross from "../../assets/message_cross.svg";
import SendSharpIcon from "@mui/icons-material/SendSharp";

const headline1 = `Hey, I'm Tanmay -- the full-stack warrior who crafts digital masterpieces`;
const headline2 = `Fusing Design and Code, With a focus on polished, distinctive products, I elevate brand presence, leave lasting impressions on users, founders, startups, and creators. Driven bypassion and creativity, I thrive on pushing boundaries in the evolving tech landscape.`;

export default function IntroArea() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        gap: "1.6rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.8rem",
          [theme.breakpoints.up("laptop")]: {
            display: "none",
          },
        }}
      >
        <Image src={VectorLogo as string} alt="tsx hero logo" />
        <Typography
          sx={{
            fontWeight: "600",
            textTransform: "lowercase",
            color: String(theme.palette.primary),
            [theme.breakpoints.down("laptop")]: {
              fontSize: "4rem",
            },
          }}
        >
          tsx
        </Typography>
      </Box>
      <Typography
        sx={{
          marginTop: "1rem",
          fontWeight: "800",
          color: theme.palette.text.primary,
          lineHeight: "100%",
          [theme.breakpoints.up("mobile")]: {
            fontSize: "3.2rem",
          },
          [theme.breakpoints.up("tablet")]: {
            fontSize: "4.8rem",
          },
          "::selection": {
            color:
              theme.palette.mode === "light"
                ? theme.palette.secondary.main
                : theme.palette.secondary.light,
          },
        }}
      >
        {headline1}
      </Typography>
      <Typography
        sx={{
          fontWeight: "600",
          lineHeight: "1.3",
          color: theme.palette.text.secondary,
          [theme.breakpoints.up("mobile")]: {
            fontSize: "1.6rem",
          },
          [theme.breakpoints.up("tablet")]: {
            fontSize: "2.2rem",
          },
          "::selection": {
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.text.primary,
          },
        }}
      >
        {headline2}
      </Typography>
      <Box
        sx={{
          gap: "1rem",
          display: "flex",
          cursor: "default",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Image
          aria-label="availability dot animation"
          className="green_dot"
          src={GreenDot as string}
          alt="availability dot"
          priority
        />
        <Typography
          sx={{
            fontWeight: "400",
            color: theme.palette.text.secondary,
            [theme.breakpoints.up("mobile")]: {
              fontSize: "1.4rem",
            },
            [theme.breakpoints.up("tablet")]: {
              fontSize: "1.5rem",
            },
            "::selection": {
              backgroundColor: "rgba(0,0,0,0)",
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
          aria-label="Hire me by sending email"
          href="mailto:sarkartanmay393@gmail.com?subject=Hi, Nice to meet you&body=Hi, I'm X, I wanted to contact you regarding..."
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
              fontWeight: "600",
              textTransform: "lowercase",
              color: theme.custom.button.textColor,
              [theme.breakpoints.up("mobile")]: {
                fontSize: "1.6rem",
              },
              [theme.breakpoints.up("tablet")]: {
                fontSize: "2rem",
              },
            }}
          >
            Hire me
          </Typography>
          <SendSharpIcon sx={{ fontSize: "1.8rem", translate: "0 1.5px" }} />
        </Button>
        <Button
          aria-label="leave a message for me"
          href="/crafts/guestbook"
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
              minWidth: "100%",
            },
            ":hover": {
              backgroundColor: theme.custom.button.onHoverBgColor,
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              textTransform: "lowercase",
              color: theme.custom.button.textColor,
              [theme.breakpoints.up("mobile")]: {
                fontSize: "1.6rem",
              },
              [theme.breakpoints.up("tablet")]: {
                fontSize: "2rem",
              },
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
}
