/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Typography,
  useTheme,
} from "@mui/material";

import BlogCard from "../common/BlogCard";
import Loader from "../common/SkeletonLoader";

import type ClickableItemProps from "~/interfaces/clickableItem";
import { useRouter } from "next/router";

interface Props {
  inHome?: boolean;
}

export default function BlogArea({ inHome = false }: Props) {
  const theme = useTheme();
  const endCursor = useRef("");
  const uniqueBlogs = useRef(new Set<ClickableItemProps>());
  const [hasNext, setHasNext] = useState(false);
  const [blogs, setBlogs] = useState<ClickableItemProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);
  const router = useRouter();

  const fetchBlogs = async (ecId: string) => {
    if (blogs.length) {
      setLoadMoreLoading(true);
    } else {
      setLoading(true);
    }
    try {
      const resp = await fetch(`/api/blogs?endCursor=${ecId}`, {
        method: "GET",
      });
      const json = (await resp.json()) as {
        blogs: ClickableItemProps[];
        total: number;
        hasNext: boolean;
        endCursor: string;
      };
      setBlogs(() => {
        json.blogs.forEach((blog) => {
          uniqueBlogs.current.add(blog);
        });
        return [...uniqueBlogs.current];
      });
      setHasNext(json.hasNext);
      endCursor.current = json.endCursor;
    } catch (error: any) {
      console.log(error?.message);
    } finally {
      if (blogs.length) {
        setLoadMoreLoading(false);
      } else {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    void fetchBlogs(endCursor.current);
  }, []);

  const handleNextPage = () => {
    void fetchBlogs(endCursor.current);
  };

  const handleViewMore = () => {
    void router.push("/blogs");
  };

  return (
    <Box
      sx={{
        gap: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
        }}
      >
        🤖 BLOGS
      </Typography>
      <Card
        elevation={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
          Several blogs is on{" "}
          <Typography
            onClick={() => {
              void router.push("https://tanmaysarkar.hashnode.dev/");
            }}
            component="span"
            sx={{
              cursor: "pointer",
              color: theme.palette.text.primary,
              fontSize: "inherit",
              fontWeight: "inherit",
            }}
          >
            Hashnode
          </Typography>
        </Typography>
      </Card>
      {loading && (
        <Box
          sx={{
            width: "100%",
            padding: "1rem",
          }}
        >
          <Loader
            w="100%"
            h={184}
            responsiveHeight={-48}
            v="rectangular"
            sx={{ borderRadius: theme.custom.clickableItem.borderRadius }}
          />
        </Box>
      )}
      {!loading &&
        blogs.length &&
        (inHome ? blogs.slice(0, 3) : blogs).map((bd, i) => (
          <BlogCard key={i} props={{ timeOut: i * 300, ...bd }} />
        ))}
      {!loading && (hasNext || inHome) ? (
        <Button
          sx={{ marginTop: 2 }}
          variant="contained"
          onClick={inHome ? handleViewMore : handleNextPage}
        >
          {loadMoreLoading ? <CircularProgress /> : "View More"}
        </Button>
      ) : null}
    </Box>
  );
}
