import SendIcon from '@mui/icons-material/Send';
import { type Dispatch, type SetStateAction } from "react";
import { TextField, Button, Typography, type Theme, Box } from "@mui/material";

interface CustomTextFieldProps {
  theme: Theme,
  guestMessage: string,
  setGuestMessage: Dispatch<SetStateAction<string>>,
  handleSendButton: () => void,
}

export default function CustomTextField({ theme, guestMessage, setGuestMessage, handleSendButton }: CustomTextFieldProps) {

  return (
    <Box sx={{ width: '100%', display: 'flex', gap: "1rem", }}>
      <TextField
        id="guestbook-text-field"
        color="secondary"
        variant="outlined"
        label="Leave a message"
        value={guestMessage}
        sx={{ width: '80%' }}
        onChange={(e) => setGuestMessage(e.target.value)}
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
  );
}