import "./Styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/Themes.js";
import { GlobalStyles } from "./GlocalStyles";
//Importanto logo do tema Light para a variável.
import logolight from "./Assets/logo/icon_lumi.svg";
//Importanto logo do tema dark para a variável.
import logodark from "./Assets/logo/icon_lumi_dark.svg";
import Modal from "./Components/Modal/Modal";

function App() {
  //Cores padrões nos modos light e dark, dos icones SVGs

  const lightPurple = { color: "#7F75FF" };

  const darkPurple = { color: "#564AFF" };

  const [svgColor, setSvgColor] = useState(darkPurple); //Definindo a cor padrão dos SVGs como Roxo Escuro;

  //Cores padrões do input e do seu value - Usaremos no model de registro;

  const light_inputColor = "#F3F3F3"
  const dark_inputColor = "#201B2C"

  const light_inputValueColor = "#7D7D7D"
  const dark_inputValueColor = "#ffffff"

  //Definindo a cor padrão dos input e value como light:
  const [inputColor, setInputColor] = useState(light_inputColor);
  const [inputValueColor, setInputValueColor] = useState(light_inputValueColor);
  

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

  const [logo, setLogo] = useState(logolight); //Definindo logo padrão como a light;

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

  const [theme, setTheme] = useState("light"); //Definindo tema padrão como light;

  function themeToggler() {
    if (theme === "light") {
      setMode("npmdark"); //Alterando tema para a versão dark;
      setModeLogo(logodark); //Alterando logo para a versão dark;
      setSvgColor(lightPurple); //Alterando cor dos SVGs para a versão light (Roxo claro);

      //Alterando a cor do input e value para dark:
      setInputColor(dark_inputColor);
      setInputValueColor(dark_inputValueColor);
    } else {
      setMode("light"); //Alterando tema para a versão light;
      setModeLogo(logolight); //Alterando logo para a versão light;
      setSvgColor(darkPurple); //Alterando cor dos SVGs para a versão dark (Roxo escuro);

      //Alterando a cor do input e value para light:
      setInputColor(light_inputColor);
      setInputValueColor(light_inputValueColor);
    }
  }

  //Fechar Login / Cadastro

  const [isModalOpen, setModalOpen] = useState(false); //Estado inicial do modal, false, pois inicia-se fechado

  //Função para abertura e fechamento do modal Login/Cad
  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        {/* 
        Enviando como prop: 
          - Função(themeToggler)
          - logo
          - cor do svg 
          - tema do botão (sol ou lua)
          - Abrir modal de login/cad 
        */}

        <Navbar
          event={themeToggler}
          imgsrc={logo}
          svg_set_color={svgColor}
          themebutton={theme}
          openModal={openModal}
        />

        {/* 
        Abertura do modal de login, passando prop para fechamento do modal 
        */}

        {isModalOpen ? <Modal closeModal={closeModal} inputColor={inputColor} inputValueColor={inputValueColor} /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
