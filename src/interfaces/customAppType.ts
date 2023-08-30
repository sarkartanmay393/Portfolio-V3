import { type SxProps, type Theme } from "@mui/material";

export default interface CAppType {
  Title: string;
  children: JSX.Element;
  props?: SxProps<Theme>;
}
