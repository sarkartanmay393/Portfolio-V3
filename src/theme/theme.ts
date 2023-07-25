import {
  type PaletteMode,
  type ThemeOptions,
  darkScrollbar,
} from "@mui/material";

const Theme = (mode: PaletteMode) => {
  return {
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: mode === "dark" ? darkScrollbar() : null,
        },
      },
    },
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: "#ffffff",
            },
            secondary: {
              main: "#109c51",
            },
            text: {
              hint: "#2EB872",
            },
            divider: "rgba(210,205,205,0.2)",
            background: {
              default: "#000000",
              paper: "#000000",
            },
          }
        : {
            primary: {
              main: "#ffffff",
            },
            secondary: {
              main: "#109c51",
            },
            text: {
              hint: "#2EB872",
            },
            divider: "rgba(90,89,89,0.1)",
            background: {
              paper: "#fff",
              default: "#F9FAFF",
            },
          }),
    },
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
      },
    },
  } as ThemeOptions;
};

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

export default Theme;
