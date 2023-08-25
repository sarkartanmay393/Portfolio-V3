import SendIcon from '@mui/icons-material/Send';
import { type Dispatch, type SetStateAction } from "react";
import { TextField, Button, Typography, type Theme } from "@mui/material";

interface CustomTextFieldProps {
  theme: Theme,
  leavingMessage: string,
  setLeavingMessage: Dispatch<SetStateAction<string>>,
  handleSendButton: () => void,
}

export default function CustomTextField({ theme, leavingMessage, setLeavingMessage, handleSendButton }: CustomTextFieldProps) {
  return (
    <>
      <TextField
        id="guestbook-text-field"
        color="secondary"
        variant="outlined"
        label="Leave a message"
        value={leavingMessage}
        sx={{ width: '80%' }}
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
    </>
  );
}