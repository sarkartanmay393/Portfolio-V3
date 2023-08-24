import { useTheme } from "@mui/material";
import { useStoreActions } from "~/store/typedHooks";

export const ThemeToggle = () => {
  const theme = useTheme();
  const setTheme = useStoreActions((state) => state.setTheme);

  const handleThemeToggle = () => {
    setTheme(theme.palette.mode === "light" ? "dark" : "light");
  }

  return (
    <input
      id="toggle"
      aria-label=""
      className="toggle"
      type="checkbox"
      onClick={handleThemeToggle}
    />
  );
};
