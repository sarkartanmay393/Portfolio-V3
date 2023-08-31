import { useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";

import BlogCard from "../common/BlogCard";
import Loader from "../common/SkeletonLoader";
import type ClickableItemProps from "~/interfaces/clickableItem";
import type HashnodeResponse from "~/interfaces/hashnodeResponse";


export default function BlogArea() {
  const theme = useTheme();
  const [blogs, setBlogs] = useState<ClickableItemProps[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const resp = await fetch('/api/blogs', {
        method: 'GET',
      });
      const hashnodeResp = await resp.json() as HashnodeResponse;
      const blogs = hashnodeResp.data.user.publication.posts.map((post) => ({
        title: post.title,
        description: post.brief,
        url: `https://tanmaysarkar.hashnode.com/${post.slug}`,
      }));
      setBlogs(blogs);
      setLoading(false);
    }

    void fetchBlogs();
  }, [])

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
      {loading && <Loader w="100%" h={60} responsiveHeight={60} v='rectangular' sx={{ borderRadius: theme.custom.clickableItem.borderRadius }} />}
      {!loading && blogs?.map((bd, i) => (<BlogCard key={i} props={{ timeOut: i * 300, ...bd }} />))}
    </Box>
  );
}


export function getServerSideProps() {

  return {
    props: {}
  };
}