import Image from 'next/image';
import { Box, Grow, List, ListItem, ListItemAvatar, ListItemText, Skeleton, Typography, type Theme } from "@mui/material";
import type clientPromises from 'mongodb/mongodb';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface GuestMessageListProps {
  theme: Theme,
  guestMessageList?:
  {
    _id: clientPromises.BSON.ObjectId;
    name: string;
    email: string;
    image: string;
    message: string;
    date: string;
  }[]
}

export default function GuestMessageList({ theme, guestMessageList }: GuestMessageListProps) {

  if (!guestMessageList) {
    return (
      <Skeleton width="100%" height={84}>
      </Skeleton>
    );
  }

  return (
    <List>
      {guestMessageList.map((guestBlock, i) => (
        <Grow key={guestBlock._id.toString()} in={true} timeout={i * 300} mountOnEnter unmountOnExit>
          <ListItem sx={{
            padding: 0,
            paddingY: '6px',
            border: 'px solid red',
            justifyContent: 'space-between',
          }}>
            <Box sx={{ display: 'flex', width: '70%' }}>
              <ListItemAvatar sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {guestBlock.image ?
                  <Image width={32} height={32} src={guestBlock.image} alt={guestBlock.name + " guest profile photo"}
                    style={{ borderRadius: "50%", }}
                  /> :
                  <AccountCircleIcon sx={{ width: 32, height: 32 }} />
                }
              </ListItemAvatar>
              <ListItemText
                primary={guestBlock.name}
                secondary={guestBlock.message}
                primaryTypographyProps={{
                  fontWeight: "500",
                  color: theme.palette.text.primary,
                }}
                secondaryTypographyProps={{
                  fontWeight: "500",
                  color: theme.palette.text.primary,
                }}
                sx={{
                  ".MuiListItemText-primary": {
                    opacity: '60%',
                    [theme.breakpoints.up("mobile")]: {
                      fontSize: "1.4rem",
                    },
                    [theme.breakpoints.up("tablet")]: {
                      fontSize: "1.8rem",
                    },
                  },
                  ".MuiListItemText-secondary": {
                    letterSpacing: '0.5px',
                    [theme.breakpoints.up("mobile")]: {
                      fontSize: "1rem",
                    },
                    [theme.breakpoints.up("tablet")]: {
                      fontSize: "1.4rem",
                    },
                  }
                }} />
            </Box>
            <Typography
              sx={{
                translate: '-16px 0',
                opacity: '60%',
                [theme.breakpoints.up("mobile")]: {
                  fontSize: "0.8rem",
                },
                [theme.breakpoints.up("tablet")]: {
                  fontSize: "1rem",
                },
              }}>{guestBlock.date}</Typography>
          </ListItem>
        </Grow>
      ))}
    </List>
  );

}