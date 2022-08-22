import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

//CSS
import "./Styles/main.css";

//Pages
import Home from "./Pages/home/Home";
import Perfil from "./Pages/Perfil/Perfil";
import Equipe from "./Pages/Equipe/Equipe";
import Servico from "./Pages/Servico/Servico";
import NotFound from "./Pages/NotFound/NotFound";

//Componentes
import Navbar from "./Components/Navbar/Navbar";

//Temas e Cores
import { lightTheme, darkTheme } from "./Themes/Themes.js";
import { GlobalStyles } from "./GlobalStyles";

//Logos
import logolight from "./Assets/logo/icon_lumi.svg";
import logodark from "./Assets/logo/icon_lumi_dark.svg";
import Termos from "./Pages/Termos/Termos";
import Politica from "./Pages/Termos/Politica";

//UserContext
export const UserContext = React.createContext({});

function App() {
  
  //Definindo o tema padrão da página:
  const [theme, setTheme] = useState('light');
  const [logo, setLogo] = useState(logolight);
  const setMode = mode =>{
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const setModeLogo = modelogo =>{
    window.localStorage.setItem(logolight, modelogo);
    setLogo(modelogo);
  }

  //Mudar tema e logo

  const toggleTheme = () =>{
    if(theme === 'light'){
      setMode('dark')
      setModeLogo(logodark)
    }else{
      setMode('light')
      setModeLogo(logolight)
    }
  }

  //Definindo o tema padrão da página:

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme ? 
    setMode('dark') :
    localTheme ?
      setTheme(localTheme) :
      setMode('light');
  }, []);

  //Definindo a logo padrão da página:

  useEffect(() => {
    const localLogo = window.localStorage.getItem(logolight);
    localLogo ? setLogo(localLogo) : setModeLogo(logodark);
  }, []);


  //Para o userContext
  const [isUserLogado, setIsUserLogado] = useState(
    localStorage.getItem("token")
  );

  useEffect(() => {
    localStorage.getItem("token") &&
      setIsUserLogado(localStorage.getItem("token"));
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <UserContext.Provider value={{ isUserLogado, setIsUserLogado }}>
        <Router>
          <Navbar
            themeToggler={toggleTheme}
            imgsrc={logo}
            themebutton={theme}
          />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/servico" element={<Servico />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/termos-de-uso" element={<Termos />} />
            <Route path="/politicas-de-privacidade" element={<Politica />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
