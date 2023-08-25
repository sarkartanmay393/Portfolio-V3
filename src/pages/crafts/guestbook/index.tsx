import Layout from "~/layout/layout";

import { useState } from "react";
import { useSession } from "next-auth/react"
import CustomTextField from "~/components/craft/guestbook/CustomTextField";
import { Box, CircularProgress, Grid, Typography, useTheme } from "@mui/material";
import GuestMessageList from "~/components/craft/guestbook/GuestMessageList";
import { SignInButton } from "~/components/common/AuthButtons";

export default function GuestbookPage() {
  const theme = useTheme();
  const [leavingMessage, setLeavingMessage] = useState("");
  const [guestMessageList, setGuestMessageList] = useState<{
    user: string;
    message: string;
  }[]>([{
    user: "Tanmay Sarkar",
    message: "Hasdjfhakjsdhf"
  }]);

  const session = useSession();

  const handleSendButton = () => {
    setGuestMessageList((prev) => [...prev, {
      user: session.data?.user?.email ?? "noname",
      message: leavingMessage,
    }]);
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
        <Typography
          sx={{
            fontWeight: "600",
            color: theme.palette.text.primary,
            [theme.breakpoints.up("mobile")]: {
              fontSize: "2rem",
            },
            [theme.breakpoints.up("tablet")]: {
              fontSize: "3rem",
            },
          }}>
          Message on my guestbooks
        </Typography>
        <Box marginY="2rem" sx={{
          display: 'flex',
          gap: "1rem",
        }}>
          {session.status == "authenticated" ?
            <CustomTextField
              theme={theme}
              leavingMessage={leavingMessage}
              setLeavingMessage={setLeavingMessage}
              handleSendButton={handleSendButton}
            />
            : (
              session.status == "loading" ?
                <CircularProgress color="secondary" /> :
                <SignInButton theme={theme} />
            )
          }
        </Box>
        <Grid sx={{}}>
          <GuestMessageList theme={theme} guestMessageList={guestMessageList} />
        </Grid>
      </Box>
    </Layout >
  );
};