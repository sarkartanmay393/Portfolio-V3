import { Typography, Box, useTheme } from "@mui/material";

import Card from "../common/ProjectCard";

const ProjectCard = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1.6rem",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.up("laptop")]: {
          alignItems: "start",
        },
        scrollSnapAlign: "start",
      }}
    >
      <Box
        sx={{
          gap: "0.8rem",
          display: "flex",
        }}
      >
        <Typography
          sx={{
            [theme.breakpoints.up("mobile")]: {
              fontSize: "3rem",
            },
            [theme.breakpoints.up("tablet")]: {
              fontSize: "4rem",
            },
            fontWeight: "600",
            textTransform: "",
            color: String(theme.palette.primary),
          }}
        >
          Latest Projects
        </Typography>
      </Box>
      <Box
        sx={{
          gap: "1rem",
          display: "flex",
          flexDirection: "column",
          [theme.breakpoints.up("laptop")]: {
            flexDirection: "row",
          },
        }}
      >
        <Card />
        <Card />
        <Card />
      </Box>
    </Box>
  );
};

export default ProjectCard;
