import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import { useStoreActions } from "~/store/typedHooks";

import VectorLogo from "../assets/logo.svg";
import { useTheme } from "@mui/material";
import { Padding } from "@mui/icons-material";

const NavigationBar = () => {
  const theme = useTheme();
  const setTheme = useStoreActions((state) => state.setTheme);

  const handleThemeToggle = () => {
    setTheme(theme.palette.mode === "light" ? "dark" : "light");
  };

  return (
    <Box
      sx={{
        marginY: "5rem",
        display: "flex",
        alignItems: "center",
        border: `0.1px solid `.concat(theme.palette.divider),
        borderRadius: "2.8rem",
        padding: "0.1rem",

        justifyContent: "space-between",
        backgroundColor: theme.custom.navigation.bgColor,

        [theme.breakpoints.only("mobile")]: {
          justifyContent: "center",
        },

        [theme.breakpoints.up("mobile")]: {
          width: "88%",
        },
        [theme.breakpoints.up("tablet")]: {
          width: "82%",
        },
        [theme.breakpoints.up("laptop")]: {
          width: "68%",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.8rem",

          [theme.breakpoints.down("tablet")]: {
            display: "none",
          },
        }}
      >
        <Image src={VectorLogo as string} alt="" />
        <Typography
          sx={{
            [theme.breakpoints.up("mobile")]: {
              fontSize: "1.6rem",
            },
            [theme.breakpoints.up("tablet")]: {
              fontSize: "2rem",
            },
            [theme.breakpoints.up("laptop")]: {
              fontSize: "2.6rem",
            },
            fontWeight: "600",
            textTransform: "lowercase",
            color: theme.custom.button.textColor,
          }}
        >
          tsx
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "0",
          padding: "0 1.6rem",

          [theme.breakpoints.only("mobile")]: {
            padding: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        {TabDetails.map((tab) => (
          <Button
            key={tab.label}
            sx={{
              textTransform: "lowercase",
              borderRadius: "3rem",
              ":hover > .tab_typography": {
                fontWeight: "600",
              },
              backgroundColor: tab.active ? theme.palette.primary.main : "",
            }}
          >
            <Typography
              className="tab_typography"
              sx={{
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
                textTransform: "lowercase",
                color: tab.active
                  ? theme.custom.navigation.activeTextColor
                  : theme.custom.navigation.textColor,
                fontWeight: tab.active ? 600 : "500",

                ":hover": {
                  color: tab.active ? theme.custom.navigation.textColor : "",
                },
              }}
            >
              {tab.label}
            </Typography>
          </Button>
        ))}
      </Box>
      <Box
        sx={{
          translate: "-1rem 2px",
          [theme.breakpoints.only("mobile")]: {
            display: "none",
          },
        }}
      >
        <input
          id="toggle"
          className="toggle"
          type="checkbox"
          onClick={handleThemeToggle}
        />
      </Box>
    </Box>
  );
};

const TabDetails = [
  { label: "home.", address: "/", active: true },
  { label: "blog.", address: "/blog", active: false },
  { label: "project.", address: "/project", active: false },
  { label: "craft.", address: "/craft", active: false },
  { label: "contact.", address: "/contact", active: false },
];

export default NavigationBar;
