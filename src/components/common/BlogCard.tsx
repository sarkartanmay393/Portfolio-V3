import Link from "next/link";
import { CardContent, Box, Typography, useTheme, Card } from "@mui/material";
import type BlogCardProps from "~/interfaces/clickableItem";

export default function BlogCard({ props }: { props: BlogCardProps }) {
  const theme = useTheme();

  return (
    <Link style={{ textDecoration: 0 }} href={props.url ?? ""}>
      <Card
        className="blogcard"
        sx={{
          boxShadow: 0,
          cursor: 'pointer',
          border: '0.1px solid black',
          backgroundColor: "transparent",
          transition: theme.transitions.create('background-color'),
          "&:hover": {
            backgroundColor: theme.palette.secondary.light,
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
              padding: "1rem",
            },
          }}>
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
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}
