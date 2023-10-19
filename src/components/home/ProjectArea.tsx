import { Masonry } from "@mui/lab";
import { Box, Card, Typography, useTheme } from "@mui/material";

import data from 'public/data.json';
import ProjectCard from "../common/ProjectCard";
import { useRouter } from "next/router";

export default function ProjectArea() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
    }}>
      <Typography sx={{
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
      <Card
        elevation={1}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingY: theme.typography.pxToRem(8),
          paddingX: theme.typography.pxToRem(18),
        }}
      >
        <Typography
          sx={{
            fontWeight: "600",
            lineHeight: "100%",
            color: theme.palette.text.secondary,
            [theme.breakpoints.up("mobile")]: {
              fontSize: "1.6rem",
            },
            [theme.breakpoints.up("tablet")]: {
              fontSize: "2rem",
            },
          }}
        >
          Actual project collection is on {" "}
          <Typography
            onClick={() => { void router.push('https://github.com/sarkartanmay393') }}
            component='span'
            sx={{
              cursor: 'pointer',
              color: theme.palette.text.primary,
              fontSize: 'inherit',
              fontWeight: 'inherit',
            }}
          >
            Github
          </Typography>
        </Typography>
      </Card>
      <Masonry columns={{ mobile: 1, mobileEnd: 2, laptop: 3 }} spacing={1}>
        {data.ProjectDetails.map((pd, i) => (
          <ProjectCard key={i} props={{ ...pd, timeOut: i * 300 }} />
        ))}
      </Masonry>
    </Box>
  );

}