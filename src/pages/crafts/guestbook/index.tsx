import Layout from "~/layout/layout";
import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Grid, List, ListItem, ListItemText, TextField, Typography, useTheme } from "@mui/material";
import { useState } from "react";

export default function GuestbookPage() {
  const theme = useTheme();
  const [leavingMessage, setLeavingMessage] = useState("");
  const [guestMessageList, setGuestMessageList] = useState(["asdfa", 'asdfasdf', 'asdfasd']);

  const handleSendButton = () => {
    setGuestMessageList(prev => [...prev, leavingMessage]);
    setLeavingMessage("");
  }

  return (
    <Layout Title="Crafts">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography sx={{
          fontWeight: "600",
          color: theme.palette.text.primary,
          [theme.breakpoints.up("mobile")]: {
            fontSize: "2rem",
          },
          [theme.breakpoints.up("tablet")]: {
            fontSize: "3rem",
          },
        }}>Message on my guestbooks</Typography>
        <Box marginY="2rem" sx={{
          display: 'flex',
          gap: "1rem",
        }}>
          <TextField
            id="guestbook-text-field"
            color="secondary"
            variant="outlined"
            label="Leave a message"
            value={leavingMessage}
            sx={{ width: '90%' }}
            onChange={(e) => setLeavingMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                handleSendButton();
              }
            }}
          />
          <Button type="submit" onClick={handleSendButton} variant="outlined" color="secondary" endIcon={<SendIcon />}>
            <Typography sx={{
              fontWeight: "700",
              textTransform: 'none',
              color: theme.palette.secondary.main,
              [theme.breakpoints.up("mobile")]: {
                fontSize: "1rem",
              },
              [theme.breakpoints.up("tablet")]: {
                fontSize: "1.4rem",
              },
            }}>Send</Typography>
          </Button>
        </Box>
        <Grid sx={{}}>
          {guestMessageList.map(msg => (
            <List key={msg.slice(0, 8)} dense >
              <ListItem>
                <ListItemText
                  primary={msg}
                  secondary={msg}
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
            </List>
          ))}
        </Grid>
      </Box>
    </Layout >
  );
};