import Layout from "~/layout/layout";

import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react"
import CustomTextField from "~/components/craft/guestbook/CustomTextField";
import { Box, Button, CircularProgress, Grid, Typography, useTheme } from "@mui/material";
import { SignInButton } from "~/components/common/AuthButtons";

import type clientPromises from 'mongodb/mongodb'
import GuestMessageList from "~/components/craft/guestbook/GuestMessageList";

const apiEndPoint = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : 'https://tanmaysarkar.vercel.app/api';

interface GuestbookMessageType {
  _id: clientPromises.BSON.ObjectId;
  name: string;
  email: string;
  image: string;
  message: string;
}

interface GuestbookPageProps {
  data: GuestbookMessageType[];
}

export default function GuestbookPage({ pageProps }: { pageProps: GuestbookPageProps }) {
  const theme = useTheme();
  const session = useSession();

  const [message, setMessage] = useState("");
  const [guestMessageList, setGuestMessageList] = useState<GuestbookMessageType[]>(pageProps.data);

  useEffect(() => {
    setGuestMessageList(pageProps.data);
  }, [pageProps]);

  const handleSendButton = () => {
    const currentGuestMessage = {
      name: session.data?.user?.name ?? "",
      image: session.data?.user?.image ?? "",
      email: session.data?.user?.email ?? "",
      message: message,
    }

    const updateGuestbookMessages = async () => {
      const res = await fetch(apiEndPoint + '/guestbook', {
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
      setGuestMessageList(prev => ([...prev, insertedMessageObj]));
    }).finally(() => {
      setMessage("");
    });
  }

  return (
    <Layout Title="guestbook">
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


export async function getServerSideProps() {
  const res = await fetch(apiEndPoint + '/guestbook', { method: "GET" });
  const guestMessages = await res.json() as GuestbookMessageType[];

  if (!guestMessages) {
    return {
      notFound: true,
      redirect: {
        destination: '/crafts',
        permanent: false,
      },
    };
  }

  return {
    props: { data: guestMessages }
  };
}