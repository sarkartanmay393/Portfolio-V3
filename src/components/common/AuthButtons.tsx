import { Button, type Theme, Typography } from "@mui/material";
import { signIn } from "next-auth/react"
import GitHubIcon from '@mui/icons-material/GitHub';

interface SignInButtonProps {
  theme: Theme,
}

export const SignInButton = ({ theme }: SignInButtonProps) => {
  const handleSignIn = () => {
    signIn().finally(() => { return });
  }

  return (
    <Button
      aria-label="Sign in with Github"
      fullWidth color="secondary" variant="contained" onClick={handleSignIn} startIcon={<GitHubIcon />} sx={{
        boxShadow: 0,
        ":hover": {
          boxShadow: 0
        },
      }}>
      <Typography sx={{
        height: '100%',
        fontWeight: "700",
        textTransform: 'none',
        [theme.breakpoints.up("mobile")]: {
          fontSize: "1.4rem",
        },
        [theme.breakpoints.up("tablet")]: {
          fontSize: "1.8rem",
        },
      }}>
        Sign In
      </Typography>
    </Button>
  );
}