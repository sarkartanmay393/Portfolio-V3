import { Grow, Skeleton, useTheme, type SxProps, type Theme } from "@mui/material";

interface LoaderProps {
  w: number | string,
  h: number,
  v: 'text' | 'rectangular' | 'rounded' | 'circular',
  sx?: SxProps<Theme>
  responsiveHeight: number
}

export default function Loader({ w, h, v, sx, responsiveHeight }: LoaderProps) {
  const theme = useTheme();
  return (
    <Grow in={true} mountOnEnter unmountOnExit>
      <Skeleton width={w} variant={v} sx={{
        ...sx,
        [theme.breakpoints.up('mobile')]: {
          height: `${h}px`,
        },
        [theme.breakpoints.up('tablet')]: {
          height: `${h + responsiveHeight}px`
        },
        [theme.breakpoints.up('laptop')]: {
          height: `${h + responsiveHeight / 2}px`
        },
      }} animation="wave" >
      </Skeleton>
    </Grow >
  );
}