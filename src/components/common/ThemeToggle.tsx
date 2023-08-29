import { Box, useTheme } from "@mui/material";
import { type Dispatch, type SetStateAction } from "react";
import { useStoreActions } from "~/store/typedHooks";

interface ThemeToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const ThemeToggle = ({ isDarkMode, setIsDarkMode }: ThemeToggleProps) => {
  const theme = useTheme();
  const setTheme = useStoreActions((state) => state.setTheme);

  const handleThemeToggle = () => {
    setTheme(theme.palette.mode === "light" ? "dark" : "light");
    setIsDarkMode(!isDarkMode);
  }

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      [theme.breakpoints.down('laptop')]: {
        // backgroundColor: theme.palette.mode == 'light' ? theme.palette.secondary.light : 'transparent',
        // padding: "1px",
        // borderRadius: '50%',
      },
    }}>
      <input
        id="toggle"
        aria-label=""
        className="toggle"
        type="checkbox"
        onClick={handleThemeToggle}
        checked={isDarkMode}
        onChange={() => { return }}
      />
    </Box>
  );
};
