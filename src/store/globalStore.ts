import { type PaletteMode } from "@mui/material";
import type GlobalStoreModel from "~/interfaces/globalStoreModel";

import { action, createStore } from "easy-peasy";

const globalStore = createStore<GlobalStoreModel>({
  theme: { mode: "dark" },

  setTheme: action((state, payload: PaletteMode) => {
    state.theme.mode = payload;
  }),
});

export default globalStore;
