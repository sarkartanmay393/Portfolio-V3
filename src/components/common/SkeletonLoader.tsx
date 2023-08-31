import { Grow, Skeleton, useTheme, type SxProps, type Theme } from "@mui/material";

interface LoaderProps {
  w: number | string,
  h: number,
  v: 'text' | 'rectangular' | 'rounded' | 'circular',
  sx?: SxProps<Theme>
}

export default function Loader({ w, h, v, sx }: LoaderProps) {
  const theme = useTheme();
  return (
    <Grow in={true} mountOnEnter unmountOnExit>
      <Skeleton width={w} variant={v} sx={{
        ...sx,
        [theme.breakpoints.up('mobile')]: {
          height: `${h}px`,
        },
        [theme.breakpoints.up('tablet')]: {
          height: `${h + 60}px`
        },
      }} animation="wave" >
      </Skeleton>
    </Grow >
  );
}