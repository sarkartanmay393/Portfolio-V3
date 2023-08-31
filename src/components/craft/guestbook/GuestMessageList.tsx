import Image from 'next/image';
import { Box, Grow, List, ListItem, ListItemAvatar, ListItemText, Typography, type Theme, Collapse } from "@mui/material";
import { TransitionGroup } from 'react-transition-group';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Loader from '~/components/common/SkeletonLoader';
import type clientPromises from 'mongodb/mongodb';

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
      <Loader w="100%" h={50} responsiveHeight={10} v='rectangular' sx={{ borderRadius: theme.custom.clickableItem.borderRadius }} />
    );
  }

  return (
    <List>
      <TransitionGroup>
        {guestMessageList.map((guestBlock, i) => (
          <Collapse key={guestBlock._id.toString()}>
            <Grow in={true} timeout={i * 300} mountOnEnter unmountOnExit>
              <ListItem sx={{
                padding: 0,
                paddingY: '6px',
                border: 'px solid red',
                justifyContent: 'space-between',
              }}>
                <Box sx={{ display: 'flex', width: '70%' }}>
                  <ListItemAvatar aria-label='guest profic pic' sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {guestBlock.image ?
                      <Image width={32} height={32} src={guestBlock.image} alt={guestBlock.name + " guest profile photo"}
                        style={{ borderRadius: "50%", }}
                      /> :
                      <AccountCircleIcon titleAccess='guest profile pic placeholder' sx={{ width: 32, height: 32 }} />
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
          </Collapse>
        ))}
      </TransitionGroup>
    </List>
  );

}