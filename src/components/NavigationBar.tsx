import React from "react";
import { useRouter } from "next/router";
import { HeroTitle } from "./common/HeroTitle";
import { ThemeToggle } from "./common/ThemeToggle";
import {
  Box,
  Button,
  Typography,
  duration,
  useTheme,
} from "@mui/material";

const TabDetails = [
  { label: "home.", address: "/" },
  { label: "blog.", address: "/blogs" },
  { label: "project.", address: "/projects" },
  { label: "craft.", address: "/crafts" },
  { label: "contact.", address: "/contacts" },
];

interface NavBarProps {
  hidePulse: boolean;
}

const NavigationBar = ({ hidePulse }: NavBarProps) => {
  const theme = useTheme();
  const router = useRouter();

  const handleTabSwitch = (tabAddress: string) => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push(tabAddress);
  };

  return (
    <Box
      sx={{
        zIndex: "1",
        marginY: "2.5rem",
        alignItems: "center",
        display: "flex",
        border: `0.1px solid `.concat(theme.palette.divider),
        borderRadius: "2.8rem",
        padding: "0.1rem",
        justifyContent: "center",
        backgroundColor: theme.custom.navigation.bgColor,
        position: "fixed",
        boxShadow: `0px 0px 12px 0px `
          .concat(theme.palette.divider)
          .replace("1)", "0.6)"),
        [theme.breakpoints.down("laptop")]: {
          bottom: "0",
          display: hidePulse ? "none" : "flex",
        },
        [theme.breakpoints.up("laptop")]: {
          width: "68%",
          justifyContent: "space-between",
          top: "0",
        },
        transition: theme.transitions.create('display', {
          duration: 1000,
          easing: 'easeIn',
          delay: 1000,
        }),
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.8rem",
          [theme.breakpoints.down("laptop")]: {
            display: "none",
          },
        }}
      >
        <HeroTitle theme={theme} />
      </Box>
      <Box
        sx={{
          display: "flex",
          padding: "0 1.6rem",
          [theme.breakpoints.only("mobile")]: {
            padding: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        {TabDetails.map((tab) => {
          const isActive = router.pathname == tab.address;
          return (
            <Button
              key={tab.label}
              sx={{
                textTransform: "lowercase",
                borderRadius: "3rem",
                backgroundColor: isActive ? theme.palette.primary.main : "",
                ":hover > .tab_typography": {
                  fontWeight: "600",
                },
                ":hover": {
                  backgroundColor: theme.custom.button.onHoverBgColor,
                },
              }}
              onClick={() => {
                handleTabSwitch(tab.address);
              }}
            >
              <Typography
                className="tab_typography"
                sx={{
                  textTransform: "lowercase",
                  color: isActive
                    ? theme.custom.navigation.activeTextColor
                    : theme.custom.navigation.textColor,
                  fontWeight: isActive ? 600 : "500",
                  [theme.breakpoints.up("mobile")]: {
                    fontSize: "1.4rem",
                  },
                  [theme.breakpoints.up("tablet")]: {
                    fontSize: "1.8rem",
                    width: "6rem",
                  },
                  [theme.breakpoints.up("laptop")]: {
                    fontSize: "2rem",
                    width: "8rem",
                  },
                  ":hover": {
                    color: isActive ? theme.custom.navigation.textColor : "",
                  },
                }}
              >
                {tab.label}
              </Typography>
            </Button>
          );
        })}
      </Box>
      <Box
        sx={{
          translate: "-1.2rem 0",
          [theme.breakpoints.up("mobile")]: {
            position: "fixed",
            top: 22,
            right: 12,
          },

          [theme.breakpoints.up("laptop")]: {
            position: "static",
          },
        }}
      >
        <ThemeToggle />
      </Box>
    </Box>
  );
};

export default NavigationBar;
