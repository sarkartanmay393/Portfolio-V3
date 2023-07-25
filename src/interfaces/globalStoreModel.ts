import { type PaletteMode } from "@mui/material";
import { type Action } from "easy-peasy";

export default interface GlobalStoreModel {
  // theme-store
  theme: { mode: PaletteMode };

  // actions
  setTheme: Action<GlobalStoreModel, PaletteMode>;
}
