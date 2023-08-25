import { List, ListItem, ListItemText, type Theme } from "@mui/material";

interface GuestMessageListProps {
  theme: Theme,
  guestMessageList: { user: string; message: string; }[],
}

export default function GuestMessageList({ theme, guestMessageList }: GuestMessageListProps) {
  return (
    <List dense >
      {guestMessageList.map(guestBlock => (
        <ListItem key={guestBlock.user.slice(0, 8)}>
          <ListItemText
            primary={guestBlock.user}
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
                [theme.breakpoints.up("mobile")]: {
                  fontSize: "1rem",
                },
                [theme.breakpoints.up("tablet")]: {
                  fontSize: "1.4rem",
                },
              }
            }} />
        </ListItem>
      ))}
    </List>
  );
}