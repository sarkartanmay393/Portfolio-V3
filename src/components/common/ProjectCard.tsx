import Image from "next/image";
import { CardContent, Box, Typography, useTheme, Card, Button, easing, Grow, Skeleton } from "@mui/material";
import type ClickableItemProps from "~/interfaces/clickableItem";

interface ProjectCardProps extends ClickableItemProps {
  timeOut?: number,
}

export default function ProjectCard({ props }: { props: ProjectCardProps }) {
  const theme = useTheme();

  return (
    <Grow in={true} timeout={props.timeOut} mountOnEnter unmountOnExit>
      <Card
        className="blogcard"
        elevation={0}
        sx={{
          cursor: 'pointer',
          borderRadius: theme.custom.clickableItem.borderRadius,
          backgroundColor: theme.custom.clickableItem.backgroundColorlight,
          transition: theme.transitions.create('background-color'),
          ':hover': {
            backgroundColor: theme.custom.clickableItem.onHoverBackgroundColor
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
            {props.image &&
              <Image
                aria-label={props.title + " logo"}
                width={48} height={48}
                src={props.image ?? ""}
                alt={props.title}
                placeholder="empty"
                priority
                sizes="100vw"
                style={{
                  width: '48',
                  height: '48',
                  borderRadius: '50%',
                  objectFit: "cover"
                }}
              />
            }
            <Typography
              marginTop={props.image ? '' : '1rem'}
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
                lineHeight: "112%",
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
              <Button
                aria-label={"demo of " + props.title}
                variant="outlined" color="secondary" href={props.demo} sx={{
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
              <Button
                aria-label={"code view of " + props.title}
                variant="outlined" color="secondary" href={props.url} sx={{
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
    </Grow >
  );
}
