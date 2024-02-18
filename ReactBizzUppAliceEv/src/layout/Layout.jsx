import { ThemeProvider, createTheme } from "@mui/material/styles";
import tmc from "twin-moon-color";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import useAutoLogin from "../hooks/useAutoLogin";
import Typography from "@mui/material/Typography";
import { node } from "prop-types";

const Layout = ({ children }) => {
  const finishAutoLogin = useAutoLogin();
  const [isDarkTheme, setDarkTheme] = useState(false);

  const themes = tmc({
    "text.headerColor": "!black",
    "text.headerActive": "*#010221",
    favActive: "*#FB0000",
  });

  const darkMode = createTheme(themes.dark);
  const lightMode = createTheme(themes.light);

  const handleThemeChange = (checked) => {
    setDarkTheme(checked);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkMode : lightMode}>
      <CssBaseline />
      <Header isDarkTheme={isDarkTheme} onThemeChange={handleThemeChange} />
      <Main>
        {finishAutoLogin ? (
          children
        ) : (
          <Typography variant="h3">Loading...</Typography>
        )}
      </Main>
      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
