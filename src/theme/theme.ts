import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F18701"
    },
    secondary: {
      main: "#3d348b"
    }
  },
  typography: {
    fontFamily: "sans-serif",
    h1: {
      fontSize: "100px",
      fontWeight: 900
    }
  }
});
