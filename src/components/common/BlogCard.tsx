import Link from "next/link";
import { CardContent, Box, Typography, useTheme, Card, Grow } from "@mui/material";
import type ClickableItemProps from "~/interfaces/clickableItem";
import CallMadeIcon from '@mui/icons-material/CallMade';

interface BlogCardProps extends ClickableItemProps {
  timeOut?: number,
}

export default function BlogCard({ props }: { props: BlogCardProps }) {
  const theme = useTheme();
  return (
    <Grow in={true} timeout={props.timeOut} mountOnEnter unmountOnExit>
      <Link style={{ textDecoration: 0 }} href={props.url ?? ""}>
        <Card
          className="blogcard"
          sx={{
            boxShadow: 0,
            cursor: 'pointer',
            borderRadius: theme.custom.clickableItem.borderRadius,
            backgroundColor: theme.custom.clickableItem.backgroundColorlight,
            transition: theme.transitions.create('background-color'),
            "&:hover": {
              backgroundColor: theme.palette.secondary.light,
            },
          }}>
          <CardContent>
            <Box sx={{
              display: "flex",
              alignItems: 'center',
              [theme.breakpoints.up("mobile")]: {
                padding: "0rem",
              },
              [theme.breakpoints.up("tablet")]: {
                padding: "1rem",
              },
            }}>
              <Box sx={{
                width: "85%",
                display: 'grid',
                gap: "1rem",
                alignItems: 'center',
              }}>
                <Typography
                  sx={{
                    fontWeight: "700",
                    lineHeight: "100%",
                    color: theme.palette.text.primary,
                    [theme.breakpoints.up("mobile")]: {
                      fontSize: "1.6rem",
                    },
                    [theme.breakpoints.up("tablet")]: {
                      fontSize: "2rem",
                    },
                    [theme.breakpoints.up("laptop")]: {
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
                    color: theme.palette.text.secondary,
                    [theme.breakpoints.up("mobile")]: {
                      display: 'none',
                    },
                    [theme.breakpoints.up("tablet")]: {
                      display: 'block',
                      fontSize: "1.4rem",
                    },
                    [theme.breakpoints.up("laptop")]: {
                      display: 'block',
                      fontSize: "1.8rem",
                    },
                  }}
                >
                  {props.description.substring(0, 192)}
                </Typography>
              </Box>
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: "15%",
              }}>
                <CallMadeIcon sx={{
                  [theme.breakpoints.up("mobile")]: {
                    fontSize: '2.6rem',
                  },
                  [theme.breakpoints.up("tablet")]: {
                    fontSize: '3.4rem',
                  },
                  [theme.breakpoints.up("laptop")]: {
                    fontSize: '4rem',
                  },
                }} />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Link >
    </Grow>
  );
}
