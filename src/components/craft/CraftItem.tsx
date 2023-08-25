import Link from "next/link";
import type ClickableItemProps from "~/interfaces/clickableItem";
import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText, useTheme } from "@mui/material"

interface CraftDetailsProps extends ClickableItemProps {
  emoji: string;
}

export default function CraftItem(craft: CraftDetailsProps) {
  const theme = useTheme();

  return (
    <Link href={craft.url}>
      <ListItem>
        <ListItemButton sx={{
          ...theme.custom.clickableItem,
        }}>
          <ListItemAvatar>
            <Avatar>
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
      </ListItem>
    </Link>
  );
}