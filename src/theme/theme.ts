import { type PaletteMode, type ThemeOptions } from "@mui/material";
import { common } from "@mui/material/colors";

const Theme = (mode: PaletteMode) => {
  return {
    components: {
      // MuiCssBaseline: {
      //   styleOverrides: {
      //     body: mode === "dark" ? darkScrollbar() : null,
      //   },
      // },
    },
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: "#ffffff",
              // light: "rgba(255, 255, 255, 0.2)",
            },
            secondary: {
              main: "#109c51",
            },
            text: {
              primary: common.white,
              // secondary: "rgba(255, 255, 255, 0.6)",
              // contrastColor: common.black,
            },
            divider: "rgba(210,205,205,1)",
            background: {
              default: "#000000",
            },
          }
        : {
            primary: {
              main: "#ffffff",
              // light: "rgba(0, 0, 0, 0.7)",
            },
            secondary: {
              main: "#109c51",
            },
            text: {
              primary: common.black,
              // secondary: "rgba(0, 0, 0, 0.6)",
              // contrastColor: common.white,
            },
            divider: "rgba(0,0,0,0.6)",
            background: {
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
        mobileEnd: 456,
      },
    },
    typography: {
      fontFamily: "Manrope, sans-serif",
    },
    custom: {
      button: {
        ...(mode === "light"
          ? {
              textColor: common.white,
              onHoverBgColor: "rgba(0, 0, 0, 0.6)",
            }
          : {
              textColor: common.white,
              onHoverBgColor: "rgba(255, 255, 255, 0.2)",
            }),
      },
      navigation: {
        ...(mode === "light"
          ? {
              bgColor: "rgba(60, 60, 60, 0.9)",
              textColor: common.white,
              activeTextColor: common.black,
              onHoverBgColor: "rgba(255, 255, 255, 0.1)",
            }
          : {
              bgColor: "rgba(80, 80, 80, 0.9)",
              textColor: common.white,
              activeTextColor: common.black,
              onHoverBgColor: "rgba(0, 0, 0, 0.2)",
            }),
      },
      clickableItem: {
        ...(mode === "light"
          ? {
              backgroundColor: "rgba(80, 80, 80, 0.1)",
              backgroundColorlight: "rgba(80, 80, 80, 0.05)",
              onHoverBackgroundColor: "rgba(80, 80, 80, 0.15)",
            }
          : {
              backgroundColor: "rgba(80, 80, 80, 0.5)",
              backgroundColorlight: "rgba(80, 80, 80, 0.2)",
              onHoverBackgroundColor: "rgba(80, 80, 80, 0.6)",
            }),

        borderRadius: "8px",
      },
    },
  } as ThemeOptions;
};

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      button: {
        textColor: string;
        onHoverBgColor: string;
      };
      navigation: {
        bgColor: string;
        textColor: string;
        activeTextColor: string;
        onHoverBgColor: string;
      };
      clickableItem: {
        backgroundColor: string;
        onHoverBackgroundColor: string;
        backgroundColorlight: string;
        borderRadius: string;
      };
    };
  }

  interface ThemeOptions {
    custom?: {
      button?: {
        textColor?: string;
        onHoverBgColor?: string;
      };
      navigation?: {
        bgColor?: string;
        textColor?: string;
        activeTextColor?: string;
        onHoverBgColor?: string;
      };
      clickableItem?: {
        backgroundColor?: string;
        onHoverBackgroundColor?: string;
        backgroundColorlight?: string;
        borderRadius?: string;
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
    mobileEnd: true;
  }
  // interface TypeText {
  //   primary: string;
  //   secondary: string;
  //   contrastColor: string;
  //   disabled: string;
  // }
}

export default Theme;
