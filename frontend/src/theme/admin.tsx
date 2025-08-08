import { createTheme } from "@mui/material";

const APP_BAR_BG_COLOR = '#121212';

export const adminTheme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
      },
    },
    dark: {
      palette: {
        mode: 'dark',
      },
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: APP_BAR_BG_COLOR,
        },
      },
    }
  }
});
