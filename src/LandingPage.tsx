import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  Container,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#22223b",
    },
    secondary: {
      main: "#9a8c98",
    },
    background: {
      default: "#f8f8f8",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

const LandingPage: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Your Name
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 10, textAlign: "center" }}>
        <Avatar
          alt="Your Name"
          src="/assets/profilePic.png"
          sx={{ width: 180, height: 180, margin: "0 auto", boxShadow: 3 }}
        />
        <Typography variant="h3" sx={{ mt: 4, fontWeight: 700 }}>
          Software Engineer
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, color: "text.primary" }}>
          I'm obsessed with solving problems — the big, messy, real-world kind —
          using equal parts curiosity, code, and good design. Whether it's
          untangling complex data or streamlining someone's day-to-day, I love
          digging into what people actually need and crafting experiences that
          are as useful as they are beautiful.
        </Typography>
      </Container>
    </ThemeProvider>
  );
};

export default LandingPage;
