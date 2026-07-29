"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  typography: {
    fontFamily: "var(--ifdl-font-family-ifood-body, 'Google Sans', sans-serif)",
  },
  palette: {
    primary: {
      main: "#EB0033",
    },
  },
});

interface DesignSystemProviderProps {
  locale?: string;
  theme?: string;
  children: React.ReactNode;
}

export function DesignSystemProvider({
  children,
}: DesignSystemProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}