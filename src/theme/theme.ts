import {
  type PaletteMode,
  type ThemeOptions,
  darkScrollbar,
} from "@mui/material";
import { common } from "@mui/material/colors";

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
              light: "rgba(255, 255, 255, 0.2)",
            },
            secondary: {
              main: "#109c51",
            },
            text: {
              primary: common.white,
              secondary: "rgba(255, 255, 255, 0.6)",
              contrastColor: common.black,
            },
            divider: "rgba(210,205,205,1)",
            background: {
              default: "#000000",
              paper: "#000000",
            },
          }
        : {
            primary: {
              main: "#ffffff",
              light: "rgba(0, 0, 0, 0.7)",
            },
            secondary: {
              main: "#109c51",
            },
            text: {
              primary: common.black,
              secondary: "rgba(0, 0, 0, 0.6)",
              contrastColor: common.white,
            },
            divider: "rgba(90,89,89,0.1)",
            background: {
              paper: "#f8f8ff",
              default: "#f8f8ff",
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
    typography: {
      fontFamily: "Manrope, sans-serif",
    },
    custom: {
      button: {
        ...(mode === "light"
          ? { textColor: common.white }
          : { textColor: common.white }),
      },
      navigation: {
        ...(mode === "light"
          ? {
              bgColor: "rgba(0, 0, 0, 0.8)",
              textColor: common.white,
              activeTextColor: common.black,
            }
          : {
              bgColor: "rgba(255, 255, 255, 0.2)",
              textColor: common.white,
              activeTextColor: common.black,
            }),
      },
    },
  } as ThemeOptions;
};

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      button: {
        textColor: string;
      };
      navigation: {
        bgColor: string;
        textColor: string;
        activeTextColor: string;
      };
    };
  }

  interface ThemeOptions {
    custom?: {
      button?: {
        textColor?: string;
      };
      navigation?: {
        bgColor?: string;
        textColor?: string;
        activeTextColor?: string;
      };
    };
  }
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
  interface TypeText {
    primary: string;
    secondary: string;
    contrastColor: string;
    disabled: string;
  }
}

export default Theme;
