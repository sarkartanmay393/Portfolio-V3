import { Masonry } from "@mui/lab";
import { Box, Typography, useTheme } from "@mui/material";

import data from 'public/data.json';
import ProjectCard from "../common/ProjectCard";

export default function ProjectArea() {
  const theme = useTheme();

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '1rem',
    }}>
      <Typography mb="2rem" sx={{
        fontWeight: "600",
        color: theme.palette.text.primary,
        [theme.breakpoints.up("mobile")]: {
          fontSize: "3rem",
        },
        [theme.breakpoints.up("tablet")]: {
          fontSize: "4rem",
        },
        "::selection": {
          backgroundColor: "rgba(0,0,0,0)",
        },
      }}>🤖 PROJECTS</Typography>
      <Masonry columns={{ mobile: 1, mobileEnd: 2, laptop: 3 }} spacing={1}>
        {data.ProjectDetails.map((pd, i) => (
          <ProjectCard key={i} props={pd} />
        ))}
      </Masonry>
    </Box>
  );

}