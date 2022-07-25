import "./Styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import LoginModal from "./Components/LoginModal/LoginModal";
import Navbar from "./Components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/Themes.js";
import { GlobalStyles } from "./GlocalStyles";
//Importanto logo do tema Light para a variável.
import logolight from "./Assets/logo/icon_lumi.svg"
//Importanto logo do tema dark para a variável.
import logodark from "./Assets/logo/icon_lumi_dark.svg"



function App() {
  const [theme, setTheme] = useState("light"); //Definindo tema padrão como light;

  const [logo, setLogo] = useState(logolight); //Definindo logo padrão como a light;

  const lightPurple = { color: "#7F75FF" };

  const darkPurple = {
    color: "#564AFF",
  };

  const [svgColor, setSvgColor] = useState(darkPurple); //Definindo a cor padrão dos SVGs como Roxo Escuro;

  //Salvando o tema da página ao recarregar:
  //Todo: completar explicação do código!!! link do video no telegram

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("npmdark");
  }, []);

  //Salvando o tema da logo da página ao recarregar:

  const setModeLogo = (modelogo) => {
    window.localStorage.setItem(logolight, modelogo);
    setLogo(modelogo);
  };

  useEffect(() => {
    const localLogo = window.localStorage.getItem(logolight);
    localLogo ? setLogo(localLogo) : setModeLogo(logodark);
  }, []);

  //Função de alteração entre temas (light/dark), chamada no botão darkmode:

  function themeToggler() {
    if (theme === "light") {
      setMode("npmdark"); //Alterando tema para a versão dark;
      setModeLogo(logodark); //Alterando logo para a versão dark;
      setSvgColor(lightPurple); //Alterando cor dos SVGs para a versão dark (Roxo claro);
    } else {
      setMode("light"); //Alterando tema para a versão light;
      setModeLogo(logolight); //Alterando logo para a versão light;
      setSvgColor(darkPurple); //Alterando cor dos SVGs para a versão light (Roxo escuro);
    }
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        {/* Enviando como prop: Função(themeToggler), logo, cor do svg */}
        <Navbar
          event={themeToggler}
          imgsrc={logo}
          svg_set_color={svgColor}
          themebutton={theme}
        />
        {/*
        <div className="backdrop">
          <LoginModal/>
        </div> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginModal />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
