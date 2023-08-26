import { Box, Typography } from "@mui/material";
import Layout from "~/layout/layout";
import BlogCard from "~/components/common/BlogCard";
import { useTheme } from "@mui/material";
import ProjectCard from "~/components/common/ProjectCard";
import type ClickableItemProps from "~/interfaces/clickableItem";
import Masonry from '@mui/lab/Masonry';

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
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }}>
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
          }}>⛑️ PROJECTS</Typography>
          <Masonry columns={{ mobile: 1, mobileEnd: 2, laptop: 3 }} spacing={1}>
            {ProjectDetails.map((bd, i) => (
              <ProjectCard key={i} props={bd} />
            ))}
          </Masonry>
        </Box>

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

const BlogDetails: ClickableItemProps[] = [
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

const ProjectDetails: ClickableItemProps[] = [
  {
    "title": "Yatra Sahayak",
    "image": "https://github.com/sarkartanmay393/RoomReservation-Go/raw/main/static/readme/logo.png",
    "url": "https://github.com/sarkartanmay393/RoomReservation-Go",
    "description": "Check room availability in desired dates, make reservation and get your reservation summary in Email. Technically a Golang based Web Application with Database Interaction",
    "madeby": "Go, Docker, Bootstrap, PostgreSQL",
    "demo": "http://192.46.213.243/"
  },
  {
    "title": "Blogosphere",
    "demo": "http://192.46.213.243:8081",
    "description": "Contains Javascript code of a blogging website using ReactJS, MongoDB, Express and Node",
    "url": "https://github.com/sarkartanmay393/Blogosphere-JS",
    "image": "https://github.com/sarkartanmay393/Blog-Platform-Web3/raw/master/public/blogosphere-logo.png",
    "madeby": "ReactJS, MongoDB, Express, Node",
  },
  {
    "title": "Food Truck",
    "madeby": "JavaScript, React",
    "description": "Contains a frontend only React project, I built it for a Internship assignment.",
    "url": "https://github.com/sarkartanmay393/FoodTruck-React",
    "demo": "https://foodtruckif.vercel.app/",
    "image": "https://github.com/sarkartanmay393/FoodTruck-React/blob/master/src/assets/food-truck.png?raw=true"
  },
  {
    "title": "Portfolio V1",
    "description": "This repo contains my own portfolio website made using Flutter, Firebase, and Github.",
    "url": "https://github.com/sarkartanmay393/Portfolio-V1/",
    "madeby": "Flutter, Firebase",
    "image": "https://github.com/sarkartanmay393/Portfolio-V1/blob/main/build/web/icons/Icon-maskable-512.png?raw=true",
    "demo": "https://portfolio-web-1ad94.web.app/"
  },
  {
    "title": "Gaze Weather",
    "madeby": "React, Firebase",
    "description": "Contains a weather interface with main stream informations about your location.",
    "demo": "http://gazeweather.web.app/",
    "url": "https://github.com/sarkartanmay393/Gaze-Weather-JS",
    "image": "https://img.icons8.com/clouds/100/null/landslide.png"
  },
  {
    "title": "Text Lead Tracker",
    "demo": "https://textlead-tracker-393.netlify.com",
    "url": "https://github.com/sarkartanmay393/TextLead-Tracker",
    "description": "Contains raw HTML, CSS and JS code of a Chrome Extension to save quickies.",
    "madeby": "HTML, CSS, JS",
  },
]

export default HomePage;
