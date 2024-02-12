import Link from "next/link";
import Image from "next/image";
import { CardContent, Box, Typography, useTheme, Card, Grow } from "@mui/material";

import CallMadeIcon from '@mui/icons-material/CallMade';
import type ClickableItemProps from "~/interfaces/clickableItem";
import { CustomChip } from "./Chips";

import VisibilityIcon from '@mui/icons-material/Visibility';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

interface BlogCardProps extends ClickableItemProps {
  timeOut?: number,
}

const whichMonth = (number: string) => {
  switch (number) {
    default: {
      return "";
    }
    case "01": {
      return 'January';
    }
    case "02": {
      return 'February';
    }
    case "03": {
      return 'March';
    }
    case "04": {
      return 'April';
    }
    case "05": {
      return 'May';
    }
    case "06": {
      return 'June';
    }
    case "07": {
      return 'July';
    }
    case "08": {
      return 'August';
    }
    case "09": {
      return 'September';
    }
    case "10": {
      return 'October';
    }
    case "11": {
      return 'November';
    }
    case "12": {
      return 'December';
    }
  }

}

export default function BlogCard({ props }: { props: BlogCardProps }) {
  const theme = useTheme();

  const parsedDate = props?.publishedAt?.split('T')[0]?.split('-');
  const formattedDate = `${whichMonth(parsedDate?.at(1) ?? "").slice(0, 3)} ${parsedDate?.at(2)}`;

  return (
    <Grow in={true} timeout={props.timeOut} mountOnEnter unmountOnExit>
      <Link style={{ textDecoration: 0 }} href={props.url ?? ""} target="_blank">
        <Card
          className="blogcard"
          elevation={0}
          sx={{
            width: '100%',
            cursor: 'pointer',
            backgroundImage: 'none',
            borderRadius: theme.custom.clickableItem.borderRadius,
            backgroundColor: 'transparent',
            transition: theme.transitions.create('background-color'),
            "&:hover": {
              backgroundColor: theme.palette.secondary.light,
            },
          }}>
          <CardContent>
            <Box sx={{
              display: "flex",
              alignItems: 'center',
              justifyContent: 'space-between',
              [theme.breakpoints.up("mobile")]: {
                padding: "0rem",
                flexDirection: 'column',
                gap: '1.6rem'
              },
              [theme.breakpoints.up("tablet")]: {
                padding: "1rem",
                flexDirection: 'row',
                gap: 0
              },
            }}>
              <Box sx={{
                display: 'grid',
                alignItems: 'center',
                [theme.breakpoints.up("mobile")]: {
                  width: '100%',
                },
                [theme.breakpoints.up("tablet")]: {
                  width: '30%',
                },
                [theme.breakpoints.up("desktop")]: {
                  width: "25%",
                },
              }}>
                <Image
                  aria-label={props.title}
                  priority
                  width={240} height={128}
                  style={{
                    width: '100%', height: '100%',
                    borderRadius: theme.custom.clickableItem.borderRadius,
                    border: `0.1px solid ${theme.palette.primary.main}`
                  }}
                  src={props.image ?? ""}
                  alt={props.title}
                  placeholder="empty"
                />

              </Box>
              <Box sx={{
                display: 'grid',
                alignItems: 'center',
                [theme.breakpoints.up("mobile")]: {
                  width: '100%',
                  gap: "0.6rem",
                },
                [theme.breakpoints.up("tablet")]: {
                  width: '65%',
                  gap: "0.6rem",
                },
                [theme.breakpoints.up("desktop")]: {
                  width: '60%',
                  gap: "0.6rem",
                },
              }}>
                <Typography
                  sx={{
                    fontWeight: "700",
                    lineHeight: "100%",
                    color: theme.palette.text.primary,
                    [theme.breakpoints.up("mobile")]: {
                      fontSize: "1.4rem",
                    },
                    [theme.breakpoints.up("tablet")]: {
                      fontSize: "1.6rem",
                    },
                    [theme.breakpoints.up("laptop")]: {
                      fontSize: "2rem",
                    },
                  }}
                >
                  {props.title}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "600",
                    lineHeight: "112%",
                    color: theme.palette.text.secondary,
                    [theme.breakpoints.up("mobile")]: {
                      whiteSpace: 'normal',
                      // overflowX: 'clip',
                      fontSize: "1.2rem",
                    },
                    [theme.breakpoints.up("tablet")]: {
                      display: 'block',
                      fontSize: "1.3rem",
                      whiteSpace: 'normal',

                    },
                    [theme.breakpoints.up("laptop")]: {
                      display: 'block',
                      fontSize: "1.4rem",
                    },
                  }}
                >
                  {props.description.substring(0, 120)}
                </Typography>
                <Box sx={{
                  marginTop: '6px',
                  display: 'flex',
                  gap: '6px'
                }}>
                  <CustomChip label={formattedDate} variant="filled" icon={<CalendarMonthIcon />} />
                  <CustomChip label={`${props.readTimeInMinutes} mins read`} variant="filled" icon={<AccessTimeIcon />} />
                  <CustomChip label={`${props.views} views`} variant="filled" icon={<VisibilityIcon />} />
                </Box>
              </Box>

              <Box sx={{
                display: 'none',
                justifyContent: 'center',
                alignItems: 'center',
                [theme.breakpoints.up('desktop')]: {
                  width: "10%",
                  display: 'flex',
                },
              }}>
                <CallMadeIcon titleAccess="blog refer link" sx={{
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
