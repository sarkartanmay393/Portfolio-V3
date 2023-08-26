import { Box, useTheme } from "@mui/material";
import { useStoreActions } from "~/store/typedHooks";

export const ThemeToggle = () => {
  const theme = useTheme();
  const setTheme = useStoreActions((state) => state.setTheme);

  const handleThemeToggle = () => {
    setTheme(theme.palette.mode === "light" ? "dark" : "light");
  }

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      [theme.breakpoints.down('laptop')]: {
        backgroundColor: theme.palette.mode == 'light' ? theme.palette.secondary.light : 'transparent',
        padding: "0.4rem",
        borderRadius: '50%',
      },
    }}>
      <input
        id="toggle"
        aria-label=""
        className="toggle"
        type="checkbox"
        onClick={handleThemeToggle}
      />
      </Box>
  );
};
