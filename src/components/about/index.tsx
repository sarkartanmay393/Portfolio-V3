import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";

import Portrait from '~/assets/portrait.webp';

export default function AboutSection() {
  const theme = useTheme();

  return (
    <Box sx={{
      gap: '1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: "center",
    }}>
      <Box sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.up('mobile')]: {
          height: '180px',
        },
        [theme.breakpoints.up('tablet')]: {
          height: '280px',
        },
        [theme.breakpoints.up('tablet')]: {
          height: '340px',
        },
      }}>
        <Image
          fill
          priority
          aria-label="portrait of tanmay sarkar"
          alt="portrait of tanmay sarkar"
          src={Portrait}
          style={{ borderRadius: '8px' }}
        />
      </Box>
      
    </Box>
  );
}