import { useEffect, useState } from "react";
import { Box, Card, Typography, useTheme } from "@mui/material";

import BlogCard from "../common/BlogCard";
import Loader from "../common/SkeletonLoader";

import type ClickableItemProps from "~/interfaces/clickableItem";
import type HashnodeResponse from "~/interfaces/hashnodeResponse";
import { useRouter } from "next/router";

export default function BlogArea() {
  const theme = useTheme();
  const [blogs, setBlogs] = useState<ClickableItemProps[]>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      const resp = await fetch('/api/blogs', {
        method: 'GET',
      });
      const hashnodeResp = await resp.json() as HashnodeResponse;
      const blogs = hashnodeResp.data.user.publication.posts.map((post) => ({
        title: post.title,
        description: post.brief,
        url: `https://tanmaysarkar.hashnode.dev/${post.slug}`,
        image: post.coverImage,
        readTime: post.readTime,
        dateAdded: post.dateAdded,
        views: post.views,
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
      alignItems: "center",

    }}>
      <Typography
        sx={{
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
        }}>🤖 BLOGS</Typography>
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
          Several blogs is on {" "}
          <Typography
            onClick={() => { void router.push('https://tanmaysarkar.hashnode.dev/') }}
            component='span'
            sx={{
              cursor: 'pointer',
              color: theme.palette.text.primary,
              fontSize: 'inherit',
              fontWeight: 'inherit',
            }}
          >
            Hashnode
          </Typography>
        </Typography>
      </Card>
      {loading &&
        <Box sx={{
          width: '100%',
          padding: "1rem",
        }}>
          <Loader w="100%" h={184} responsiveHeight={-48} v='rectangular' sx={{ borderRadius: theme.custom.clickableItem.borderRadius }} />
        </Box>
      }
      {!loading && blogs?.map((bd, i) => (<BlogCard key={i} props={{ timeOut: i * 300, ...bd }} />))}
    </Box>
  );
}