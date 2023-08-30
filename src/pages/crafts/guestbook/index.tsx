import Layout from "~/layout/layout";

import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react"
import CustomTextField from "~/components/craft/guestbook/CustomTextField";
import { Box, Breadcrumbs, Button, CircularProgress, Grid, Typography, useTheme } from "@mui/material";
import { SignInButton } from "~/components/common/AuthButtons";

import type clientPromises from 'mongodb/mongodb'
import GuestMessageList from "~/components/craft/guestbook/GuestMessageList";
import Link from "next/link";

interface GuestbookMessageType {
  _id: clientPromises.BSON.ObjectId;
  name: string;
  email: string;
  image: string;
  message: string;
  date: string;
}

export default function GuestbookPage() {
  const theme = useTheme();
  const session = useSession();

  const [message, setMessage] = useState("");
  const [guestMessageList, setGuestMessageList] = useState<GuestbookMessageType[]>();

  useEffect(() => {
    const fetchGuestbookMessages = async () => {
      const res = await fetch('/api/guestbook', { method: "GET" });
      const guestMessages = await res.json() as GuestbookMessageType[];
      return guestMessages;
    }

    void fetchGuestbookMessages().then((guestMessages) => {
      setGuestMessageList(guestMessages);
    });
  }, []);

  const handleSendButton = () => {
    const today = new Date().toDateString().split(" ");
    const currentGuestMessage = {
      name: session.data?.user?.name ?? "",
      image: session.data?.user?.image ?? "",
      email: session.data?.user?.email ?? "",
      date: `${today[2]} ${today[1]} ${today[3]}`,
      message: message,
    }

    const updateGuestbookMessages = async () => {
      const res = await fetch('/api/guestbook', {
        method: "POST",
        body: JSON.stringify(currentGuestMessage),
        headers: { "Content-Type": 'application/json' }
      });
      return res.json();
    }

    updateGuestbookMessages().then(({ insertedId }) => {
      const insertedMessageObj = {
        ...currentGuestMessage,
        _id: insertedId as clientPromises.BSON.ObjectId,
      } as GuestbookMessageType;
      setGuestMessageList(prev => {
        if (prev) { return [insertedMessageObj, ...prev] }
        else { return [insertedMessageObj] }
      });
    }).finally(() => {
      setMessage("");
    });
  }

  return (
    <Layout Title="guestbook | TSX">
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Breadcrumbs sx={{ [theme.breakpoints.up('tablet')]: { display: '' } }}>
          <Link href={"/crafts"}>crafts</Link>
          <Link href={"/crafts/guestbook"}>guestbook</Link>
        </Breadcrumbs>
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
        <Box marginY="2rem" sx={{ display: 'grid', gap: "1rem" }}>
          {session && session.status == "authenticated" ?
            <>
              <CustomTextField
                theme={theme}
                guestMessage={message}
                setGuestMessage={setMessage}
                handleSendButton={handleSendButton}
              />
              <Button
                size="large"
                disableRipple
                variant="text"
                sx={{
                  padding: 0,
                  width: '64px',
                  color: theme.palette.text.primary,
                  textTransform: "none",
                  ":hover": {
                    backgroundColor: 'transparent',
                    color: theme.palette.text.secondary,
                    fontSize: '1rem'
                  }
                }}
                onClick={() => { signOut().finally(() => { return }) }}
              >
                Sign Out
              </Button>
            </>
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