import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Cadastro from "./components/pages/Cadastro";
import Header from "./components/layout/Header";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  lightTheme,
  darkTheme,
} from "./components/themes/Themes.js";
import { GlobalStyles } from "./GlocalStyles";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("npmdark") : setTheme("light");

  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Header event={() => themeToggler()}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Cadastro />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
