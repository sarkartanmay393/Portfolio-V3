/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Portrait from "~/assets/portrait.webp";

export default function AboutSection() {
  const theme = useTheme();
  const [resumeLink, setResumeLink] = useState("");

  useEffect(() => {
    const fetchResumeLink = async () => {
      try {
        const resp = await fetch("/api/resume", {
          method: "GET",
        });
        const json = await resp.json();
        // console.log(json);
        setResumeLink(json.data as string);
      } catch (err) {
        console.log(err);
      }
    };

    void fetchResumeLink();
  }, []);

  return (
    <Container>
      <Box
        sx={{
          gap: "1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          backgroundColor: theme.palette.background.default,
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Image
          alt="John Doe"
          src={Portrait}
          width={620}
          height={380}
          style={{
            borderRadius: "16px",
            aspectRatio: "auto",
            width: "620px",
            maxWidth: "100%",
            maxHeight: "auto",
          }}
        />

        <Typography
          variant="h4"
          align="center"
          sx={{
            fontSize: "2.2rem",
            fontWeight: "600",
            color: theme.palette.text.primary,
            marginTop: 1,
            marginBottom: 4,
          }}
        >
          Tanmay Sarkar
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: "2rem",
            color: theme.palette.text.secondary,
            textAlign: "start",
            marginBottom: "1rem",
          }}
        >
          I am a fourth-year student studying Computer Science and Engineering
          at Coochbehar Government Engineering College, and I will be graduating
          next month.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: "1.8rem",
            color: theme.palette.text.secondary,
            textAlign: "start",
            marginBottom: "1rem",
          }}
        >
          In my academic journey and more than 1 year of professional
          experience, I have honed my skills in frontend development using
          React, Next.js, Node, MongoDB, Express, and TypeScript over the past
          year. I have had the privilege of gaining valuable experience as a
          Frontend Developer Intern at School of Inspirational Leadership,
          Unreal Finance, and as an SDE Intern at Corider for 3 months and now
          at Cheerio as a Full Stack Developer Intern. In between, I have also
          done contractual roles at Mindcase and Organaise as a MERN Stack
          Developer.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: "1.8rem",
            color: theme.palette.text.secondary,
            textAlign: "start",
            marginBottom: "1rem",
          }}
        >
          At all these companies, I played an effective role in revamping their
          web application using React, TypeScript, Next.js, Python, and
          PostgreSQL, to a more user-friendly interface and equipped with minor
          functionalities to help users follow through. Moreover, I have
          hands-on experience in integrating Web Socket, WebRTC, and OpenAI API
          into applications, besides building simple CI/CD pipelines and hosting
          projects on cloud computers. I have hands-on experience with AWS while
          deploying projects on EC2, using S3 buckets, and running Databases in
          AWS RDS.
        </Typography>

        {/* <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            color: theme.palette.text.secondary,
            textAlign: "justify",
            marginBottom: "2rem",
          }}
        >
          In addition to my technical skills, I bring a proactive and
          collaborative approach to my work. My dedication to continuous
          learning and improvement is evident in my GitHub contributions,
          personal projects, and technical blog posts. I follow T-shaped
          learning where I know about various fields of technology but have a
          deep understanding of one particular topic, in my case that's Node.js.
        </Typography> */}

        {/* <Typography
          variant="h5"
          align="center"
          sx={{
            fontWeight: "700",
            color: theme.palette.text.primary,
            marginBottom: "1rem",
          }}
        >
          Resume Highlights
        </Typography>

        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "700",
              color: theme.palette.text.primary,
              marginBottom: "0.5rem",
            }}
          >
            Education
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              color: theme.palette.text.secondary,
              marginBottom: "0.5rem",
            }}
          >
            B.Tech in Computer Science and Engineering, Coochbehar Government
            Engineering College (Cum. CGPA: 8/10, Major GPA: 8.5/10)
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              color: theme.palette.text.secondary,
              marginBottom: "1rem",
            }}
          >
            Dhupguri High School (Grade: 80/100)
          </Typography>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "700",
              color: theme.palette.text.primary,
              marginBottom: "0.5rem",
            }}
          >
            Skills
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              color: theme.palette.text.secondary,
              marginBottom: "0.5rem",
            }}
          >
            <strong>Languages:</strong> JavaScript, TypeScript, Python, Java
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              color: theme.palette.text.secondary,
              marginBottom: "0.5rem",
            }}
          >
            <strong>Technologies:</strong> React.js, Node.js, Express.js,
            Next.js, Tailwind, Redux, Flask, Jest, Selenium
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              color: theme.palette.text.secondary,
              marginBottom: "0.5rem",
            }}
          >
            <strong>Database:</strong> MongoDB, PostgreSQL, Redis
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              color: theme.palette.text.secondary,
              marginBottom: "1rem",
            }}
          >
            <strong>Tools:</strong> Linux, Docker, Git, Jenkins, GitHub Actions,
            Cloud Provider (Linode, AWS), Supabase
          </Typography>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "700",
              color: theme.palette.text.primary,
              marginBottom: "0.5rem",
            }}
          >
            Experience
          </Typography>
          <Box
            component="ul"
            sx={{
              listStyleType: "disc",
              paddingLeft: "2rem",
              "& > li": {
                marginBottom: "1rem",
                "& > ul": {
                  listStyleType: "circle",
                  paddingLeft: "2rem",
                },
              },
            }}
          >
            <li>
              <Typography variant="body1" sx={{ fontWeight: "700" }}>
                Cheerio - Full Stack Engineer Intern (Apr 2024 - Present)
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary }}
              >
                <ul>
                  <li>
                    Assist the engineering team in fixing urgent product bugs
                  </li>
                  <li>
                    Used tools like Express, React Native, Tanstack, and Node.js
                  </li>
                </ul>
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ fontWeight: "700" }}>
                Corider - Software Engineer Intern (Dec 2023 - Mar 2024)
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary }}
              >
                <ul>
                  <li>Developed a Progressive Web App (PWA) using React</li>
                  <li>
                    Assisted senior engineer to take the product live ASAP
                  </li>
                  <li>
                    Used important libraries like Socket for in-app chat, React
                    Router, Redux, and Axios to enhance the app’s functionality
                    and performance
                  </li>
                </ul>
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ fontWeight: "700" }}>
                Unreal Finance - Frontend Developer (July - Nov 2023)
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary }}
              >
                <ul>
                  <li>
                    Integrated Ether.js with frontend components and encrypting
                    secrets
                  </li>
                  <li>
                    Maintained whole web app deployments and delivered to end
                    users securely
                  </li>
                  <li>
                    Implemented advanced finance UI components with little
                    animations
                  </li>
                </ul>
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ fontWeight: "700" }}>
                School of Inspirational Leadership - Frontend Developer Intern
                (March - July 2023)
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary }}
              >
                <ul>
                  <li>Implemented server-side functionalities using Next.js</li>
                  <li>Built web pages using Tailwind CSS from scratch</li>
                  <li>
                    Collaborated with fellow interns to improve digital
                    documents
                  </li>
                </ul>
              </Typography>
            </li>
          </Box>
        </Box> */}
        <Box
          sx={{
            marginTop: 2,
          }}
        >
          <Button
            component={Link}
            download
            disabled={resumeLink.length ? false : true}
            href={resumeLink}
            variant="contained"
            color="primary"
            sx={{
              height: 40,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              px: 3,
              textTransform: "none",
              fontWeight: "medium",
            }}
          >
            View Resume
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
