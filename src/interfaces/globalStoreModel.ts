import { type PaletteMode } from "@mui/material";
import { type Action } from "easy-peasy";

export default interface GlobalStoreModel {
  // theme-store
  theme: { mode: PaletteMode };
  introDetails: Record<string, never>;

  // actions
  setTheme: Action<GlobalStoreModel, PaletteMode>;
  setIntroDetails: Action<GlobalStoreModel, Record<string, never>>;
}
