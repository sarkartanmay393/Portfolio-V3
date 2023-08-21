import Image from "next/image";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useStoreActions } from "~/store/typedHooks";

import VectorLogo from "../assets/logo.svg";
import { useRouter } from "next/router";

const NavigationBar = () => {
  const theme = useTheme();
  const router = useRouter();
  const setTheme = useStoreActions((state) => state.setTheme);

  const handleThemeToggle = () => {
    setTheme(theme.palette.mode === "light" ? "dark" : "light");
  };

  const handleTabSwitch = (tabAddress: string) => {
    void router.push(tabAddress);
  }

  return (
    <Box
      sx={{
        zIndex: "1",
        marginY: "5rem",
        display: "flex",
        alignItems: "center",
        border: `0.1px solid `.concat(theme.palette.divider),
        borderRadius: "2.8rem",
        padding: "0.1rem",

        justifyContent: "center",
        backgroundColor: theme.custom.navigation.bgColor,

        position: "fixed",

        [theme.breakpoints.down("laptop")]: {
          bottom: "0",
        },
        [theme.breakpoints.up("laptop")]: {
          width: "68%",
          justifyContent: "space-between",
          top: "0"
        },

        boxShadow: `0px 0px 12px 0px `
          .concat(theme.palette.divider)
          .replace("1)", "0.6)"),
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
              ":hover": {
                backgroundColor: theme.custom.button.onHoverBgColor,
              },
              backgroundColor: tab.active ? theme.palette.primary.main : "",
            }}
            onClick={() => { handleTabSwitch(tab.address) }}
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
          translate: "-1.2rem 2px",
          [theme.breakpoints.down("laptop")]: {
            display: "none",
          },
        }}
      >
        <input
          id="toggle"
          aria-label=""
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
  { label: "blog.", address: "/blogs", active: false },
  { label: "project.", address: "/projects", active: false },
  { label: "craft.", address: "/crafts", active: false },
  { label: "contact.", address: "/contacts", active: false },
];

export default NavigationBar;
