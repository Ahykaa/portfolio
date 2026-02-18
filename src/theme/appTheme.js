import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#e53935" },
    background: { default: "#f3f7fb", paper: "#ffffff" },
    text: { primary: "#272829", secondary: "#45505b" },
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: '"Poppins", "Roboto", sans-serif',
    h1: { fontFamily: '"Raleway", sans-serif', fontWeight: 700 },
    h2: { fontFamily: '"Raleway", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Raleway", sans-serif', fontWeight: 700 },
  },
});
