import { type Theme, Typography } from "@mui/material";
import Image from "next/image";
import VectorLogo from "src/assets/logo.svg";

export const HeroTitle = ({ theme }: { theme: Theme }) => {
  return (
    <>
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
    </>
  );
};
