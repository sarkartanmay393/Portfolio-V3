import { type Theme, Typography } from "@mui/material";
import Image from "next/image";
import VectorLogo from "src/assets/logo.svg";

interface HeroTitleProps {
  theme: Theme,
  props?: Record<string, string | number>;
}

export const HeroTitle = ({ theme, props }: HeroTitleProps) => {
  return (
    <>
      <Image aria-label="TSX Logo" {...props} src={VectorLogo as string} alt="tsx hero logo" />
      <Typography
        sx={{
          display: 'none',
          [theme.breakpoints.up("mobile")]: {
            fontSize: "1.6rem",
          },
          [theme.breakpoints.up("tablet")]: {
            fontSize: "2rem",
          },
          [theme.breakpoints.up("laptop")]: {
            fontSize: "2.6rem",
            display: 'block',
          },
          fontWeight: "600",
          textTransform: "lowercase",
          color: theme.custom.button.textColor,
        }}
      >
        tsx
      </Typography>
    </>
  );
};
