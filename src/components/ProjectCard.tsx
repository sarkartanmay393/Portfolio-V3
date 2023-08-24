import Image from "next/image";
import { Box, Typography, useTheme } from "@mui/material";

export default function ProjectCard() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        gap: "0.8rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down("laptop")]: {
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          width: "264px",
          height: "328px",
          border: `1px solid `.concat(theme.palette.divider),
          borderRadius: "2.2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          [theme.breakpoints.up("tablet")]: {
            width: "300px",
          },
        }}
      >
        <Image
          width={256}
          height={128}
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgWy3DLSoDNZxaoOiVo3G9I7-fXtRAztlpB8YtYejl&s"
          }
          alt=""
        />
        <Typography
          sx={{
            fontWeight: "600",
            textTransform: "",
            color: String(theme.palette.primary),
            [theme.breakpoints.up("mobile")]: {
              fontSize: "2rem",
            },
            [theme.breakpoints.up("tablet")]: {
              fontSize: "2.4rem",
            },
          }}
        >
          Simulate WH
        </Typography>
        <Typography
          sx={{
            [theme.breakpoints.up("mobile")]: {
              fontSize: "1.4rem",
            },
            [theme.breakpoints.up("tablet")]: {
              fontSize: "1.6rem",
            },
            fontWeight: "500",
            color: String(theme.palette.text.secondary),
            textAlign: "center",
          }}
        >
          {`Fusing Design and Code, With a focus on polished, distinctive
            products, I elevate brand presence, leave lasting impressions on
            users, founders, startups, and creators. Driven by passion and
            creativity, I thrive on pushing boundaries in the evolving tech`.slice(
            0,
            120
          )}
        </Typography>
      </Box>
    </Box>
  );
}
