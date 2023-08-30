import Link from "next/link";
import type ClickableItemProps from "~/interfaces/clickableItem";
import { Avatar, Grow, ListItem, ListItemAvatar, ListItemButton, ListItemText, useTheme } from "@mui/material"

interface CraftDetailsProps extends ClickableItemProps {
  emoji: string;
  timeOut?: number;
}

export default function CraftItem({ craft }: { craft: CraftDetailsProps }) {
  const theme = useTheme();

  return (
    <Grow in={true} timeout={craft.timeOut} mountOnEnter unmountOnExit>
      <ListItem>
        <Link aria-label="craft item dedicated page" href={craft.url} style={{ width: '100%' }}>
          <ListItemButton sx={{
            borderRadius: theme.custom.clickableItem.borderRadius,
            backgroundColor: theme.custom.clickableItem.backgroundColor,
            ':hover': {
              backgroundColor: theme.custom.clickableItem.onHoverBackgroundColor,
            }
          }}>
            <ListItemAvatar aria-label="craft logo">
              <Avatar alt="craft logo">
                {craft.emoji}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={craft.title}
              secondary={craft.description}
              primaryTypographyProps={{
                fontWeight: "600",
                color: theme.palette.text.primary,
              }}
              secondaryTypographyProps={{
                fontWeight: "500",
                color: theme.palette.text.secondary,
              }}
              sx={{
                ".MuiListItemText-primary": {
                  [theme.breakpoints.up("mobile")]: {
                    fontSize: "2rem",
                  },
                  [theme.breakpoints.up("tablet")]: {
                    fontSize: "2.6rem",
                  },
                },
                ".MuiListItemText-secondary": {
                  [theme.breakpoints.up("mobile")]: {
                    fontSize: "1rem",
                  },
                  [theme.breakpoints.up("tablet")]: {
                    fontSize: "1.4rem",
                  },
                },
              }}
            />
          </ListItemButton>
        </Link>
      </ListItem>
    </Grow>
  );
}