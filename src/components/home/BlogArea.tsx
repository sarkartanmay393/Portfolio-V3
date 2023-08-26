import { Box, Typography, useTheme } from "@mui/material";
import BlogCard from "../common/BlogCard";

import data from 'public/data.json';

export default function BlogArea() {
  const theme = useTheme();

  return (
    <Box sx={{
      gap: '1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: "center",

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
      }}>📝 BLOGS</Typography>
      {data.BlogDetails.map((bd, i) => (
        <BlogCard key={i} props={bd} />
      ))}
    </Box>
  );
} 