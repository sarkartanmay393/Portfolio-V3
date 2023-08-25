import { Box, Typography } from "@mui/material";
import Layout from "~/layout/layout";
import BlogCard from "~/components/common/BlogCard";
import type BlogCardProps from "~/interfaces/clickableItem";
import IntroCard from "~/components/home/IntroCard";
import { useTheme } from "@mui/material";

const HomePage = () => {
  const theme = useTheme();

  return (
    <Layout Title={"Home"}>
      <Box
        sx={{
          gap: "0rem",
          display: "flex",
          overflowY: "auto",
          flexDirection: "column",
          scrollSnapType: "y mandatory",
        }}
      >
        <IntroCard />
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', gap: '1rem', }}>
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
          {BlogDetails.map((bd, i) => (
            <BlogCard key={i} props={bd} />
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

const BlogDetails: BlogCardProps[] = [
  {
    title: "Get Started with Low-code REST API Development using Syncloop",
    description: "Using this tool, we will remove the repeated same tasks for building a rest API of a low-complexity project. Suppose you are building a health tracking project and you need a simple backend service for performing various logic of available data, in that scenario building a backend server in the project is comparatively time-consuming and hectic.",
    url: "https://tanmaysarkar.hashnode.dev/get-started-with-no-code-rest-api-building-using-syncloop"
  },
  {
    title: "The Ultimate Guide to Finding Your First Open Source Project and Issue as a Beginner",
    description: "Open source is a great way to learn new skills, meet new people, give back to the community, and definitely, the journey will be fruitful for you. As you're new to open source, you might be wondering where to start. One of the best ways to get involved is to find and fix a good first issu",
    url: "https://tanmaysarkar.hashnode.dev/ultimate-guide-to-find-first-open-source-issue"
  },
  {
    title: "Run GPT4ALL Locally and Build a Simple QnA Program",
    description: "GPT4All is an open-source software ecosystem that allows anyone to train and deploy powerful and customized large language models (LLMs) on everyday hardware. Nomic AI oversees contributions to the open-source ecosystem ensuring quality, security and maintainability.",
    url: "https://tanmaysarkar.hashnode.dev/run-gpt4all-locally-and-build-a-simple-qna-program"
  },
]

export default HomePage;
