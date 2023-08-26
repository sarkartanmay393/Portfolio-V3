import { CardContent, Box, Typography, useTheme, Card, Avatar, Button, easing } from "@mui/material";
import type ClickableItemProps from "~/interfaces/clickableItem";

export default function ProjectCard({ props }: { props: ClickableItemProps }) {
  const theme = useTheme();

  return (
    <Card
      className="blogcard"
      sx={{
        boxShadow: 0,
        cursor: 'pointer',
        border: '0.1px solid black',
        backgroundColor: "transparent",
        transition: theme.transitions.create('background-color'),
        ':hover': {
          backgroundColor: theme.custom.clickableItem.backgroundColorlight
        },
      }}>
      <CardContent>
        <Box sx={{
          display: "grid",
          rowGap: "1rem",
          [theme.breakpoints.up("mobile")]: {
            padding: "0rem",
          },
          [theme.breakpoints.up("tablet")]: {
            padding: "0.6rem",
          },
        }}>
          <Avatar src={props.image}></Avatar>

          <Typography
            sx={{
              fontWeight: "700",
              lineHeight: "100%",
              color: theme.palette.text.primary,
              [theme.breakpoints.up("mobile")]: {
                fontSize: "2rem",
              },
              [theme.breakpoints.up("tablet")]: {
                fontSize: "2.4rem",
              },
            }}
          >
            {props.title}
          </Typography>

          <Typography
            sx={{
              fontWeight: "500",
              lineHeight: "100%",
              color: theme.palette.text.primary,
              [theme.breakpoints.up("mobile")]: {
                fontSize: "1.4rem",
              },
              [theme.breakpoints.up("tablet")]: {
                fontSize: "1.8rem",
              },
            }}
          >
            {props.description.substring(0, 192)}
          </Typography>

          <Box sx={{ display: 'flex', gap: '1rem', marginTop: '1.4rem', height: '3.6rem' }}>
            <Button variant="outlined" color="secondary" href={props.demo} sx={{
              ":hover": {
                borderWidth: '1.2px',
              },
              ":hover > .demo-btn": {
                fontWeight: 700,
              },
              transition: theme.transitions.create(["border-width", "font-weight"], {
                delay: 0,
                easing: easing.easeInOut,
                duration: "50ms",
              })
            }}>
              <Typography
                className="demo-btn"
                sx={{
                  fontWeight: "500",
                  lineHeight: "100%",
                  [theme.breakpoints.up("mobile")]: {
                    fontSize: "1.4rem",
                  },
                  [theme.breakpoints.up("tablet")]: {
                    fontSize: "1.6rem",
                  }
                }}
              >
                Demo
              </Typography>
            </Button>
            <Button variant="outlined" color="secondary" href={props.url} sx={{
              ":hover": {
                borderWidth: '1.2px',
              },
              ":hover > .code-btn": {
                fontWeight: 700,
              },
              transition: theme.transitions.create(["border-width", "font-weight"], {
                duration: "50ms",
                easing: easing.easeInOut,
                delay: 0,
              })
            }}>
              <Typography
                className="code-btn"
                sx={{
                  fontWeight: "500",
                  lineHeight: "100%",
                  [theme.breakpoints.up("mobile")]: {
                    fontSize: "1.4rem",
                  },
                  [theme.breakpoints.up("tablet")]: {
                    fontSize: "1.6rem",
                  },
                }}
              >
                Code
              </Typography>
            </Button>
          </Box>

        </Box>
      </CardContent>
    </Card >
  );
}
