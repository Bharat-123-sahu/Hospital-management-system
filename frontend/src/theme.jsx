// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // blue
    },
    secondary: {
      main: "#dc004e", // pink
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default theme;
