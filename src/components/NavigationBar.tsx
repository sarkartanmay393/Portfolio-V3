import React, { useState } from "react";
import { useRouter } from "next/router";
import { HeroTitle } from "./common/HeroTitle";
import { ThemeToggle } from "./common/ThemeToggle";
import {
  Box,
  Button,
  Typography,
  useTheme,
} from "@mui/material";

const TabDetails = [
  { label: "home.", address: "/" },
  { label: "blog.", address: "/blogs" },
  { label: "project.", address: "/projects" },
  { label: "craft.", address: "/crafts" },
  { label: "about.", address: "/about" },
];

const NavigationBar = () => {
  const theme = useTheme();
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const handleTabSwitch = (tabAddress: string) => {
    void router.push(tabAddress);
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
        paddingY: "0.1rem",
        justifyContent: "center",
        backgroundColor: theme.custom.navigation.bgColor,
        position: "fixed",
        boxShadow: `0px 0px 12px 0px `
          .concat(theme.palette.divider)
          .replace("1)", "0.6)"),
        [theme.breakpoints.between("mobile", "tablet")]: {
          bottom: 0,
          width: "350px",
          // display: hidePulse ? "none" : "flex",
        },
        [theme.breakpoints.between("tablet", "laptop")]: {
          bottom: 0,
          width: "416px",
        },
        [theme.breakpoints.up("laptop")]: {
          width: "68%",
          justifyContent: "space-between",
          paddingX: "0.1rem",
        },
        transition: theme.transitions.create('all', {
          delay: 100,
          duration: 1000,
          easing: 'cubic-bezier(0, 0, 0.2, 1)',
        }),
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.8rem",
          borderRadius: '50%',
          [theme.breakpoints.down("laptop")]: {
            opacity: '95%',
            display: 'none',
            position: "fixed",
            top: 22,
            right: 22,
            border: '1.2px solid '.concat(theme.palette.mode == "light" ? "#00000f" : "#fffff0"),
          },
          transition: theme.transitions.create('border-color', {
            delay: 10,
            duration: 3000,
            easing: 'cubic-bezier(0, 0, 0.2, 1)',
          }),
        }}
      // onClick={handleThemeToggle}
      >
        <HeroTitle theme={theme} />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: '0.8rem',
          [theme.breakpoints.between("mobile", "tablet")]: {
            gap: '0.6rem',
          },
        }}
      >
        {TabDetails.map((tab) => {
          const isActive = router.pathname == tab.address;
          return (
            <Button
              key={tab.label}
              disableRipple
              sx={{
                textTransform: "lowercase",
                borderRadius: "3rem",
                backgroundColor: isActive ? theme.palette.primary.main : "",
                ":hover": {
                  backgroundColor: isActive ? theme.palette.primary.main : theme.custom.navigation.onHoverBgColor,
                },
                ":hover > .tab_typography": {
                  fontWeight: "600",
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
                    color: isActive ? theme.custom.navigation.activeTextColor : theme.custom.navigation.textColor,
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
          [theme.breakpoints.down('laptop')]: {
            position: 'fixed',
            right: 12,
            top: 22,
          },
        }}
      >
        <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </Box>
    </Box>
  );
};

export default NavigationBar;
