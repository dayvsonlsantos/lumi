import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

//CSS
import "./Styles/main.css";

//Pages
import Home from "./Pages/home/Home";
import Perfil from "./Pages/Perfil/Perfil";
import Equipe from "./Pages/Equipe/Equipe";

//Componentes
import Navbar from "./Components/Navbar/Navbar";

//Temas e Cores
import { lightTheme, darkTheme } from "./themes/Themes.js";
import { GlobalStyles } from "./GlobalStyles";

//Logos
import logolight from "./Assets/logo/icon_lumi.svg";
import logodark from "./Assets/logo/icon_lumi_dark.svg";

//Modal
import LoginRegister from "./Components/Modal/LoginRegister/LoginRegister";
import ForgetPassword from "./Components/Modal/Password/ForgetPassword/ForgetPassword";
import CodeRecoverPW from "./Components/Modal/Password/CodeRecoverPW/CodeRecoverPW";
import RecoverPassword from "./Components/Modal/Password/RecoverPassword/RecoverPassword";

function App() {
  
  //! Funções: 
  
    //Fechar e abrir Login / Cadastro

      const [isModalSignOpen, setModalSignOpen] = useState(false); //Estado inicial do modal, false, pois inicia-se fechado

      //Função para abertura e fechamento do modal Login/Cad, Função enviada para o componente navbar
      function openModalSign() {
        setModalSignOpen(true);
      }

      //Função enviada para o componente modal
      function closeModalSign() {
        setModalSignOpen(false);
      }
    
    //-----------------------------------------------------------------------
      

    //Fechar e abrir ForgetPassword
      
      const[IsModalPassOpen, setModalPassOpen] = useState(false);

      //Função para abertura e fechamento do modal ForgetPassword, Função enviada para o componente Modal.
      function openModalPass(e){
        e.preventDefault();
        setModalPassOpen(true);
        setModalSignOpen(false);
      }

      //Função enviada para o modal ForgetPassword
      function closeModalPass(){
        setModalPassOpen(false);
      }
    
    //-----------------------------------------------------------------------



    //Fechar e abrir ForgetPassword
      
      const[IsModalCodeOpen, setModalCodeOpen] = useState(false);

      //Função para abertura e fechamento do modal ForgetPassword, Função enviada para o componente Modal.
      function openModalCode(e){
        e.preventDefault();
        setModalCodeOpen(true);
        setModalPassOpen(false);
      }

      //Função enviada para o modal ForgetPassword
      function closeModalCode(){
        setModalCodeOpen(false);
      }
  
    //-----------------------------------------------------------------------


    //Fechar e abrir RecoverPassword
      
    const[IsModalRecoverOpen, setModalRecoverOpen] = useState(false);

      //Função para abertura e fechamento do modal RecoverPassword, Função enviada para o componente ForgetPassword.
      function openModalRecover(e){
        e.preventDefault();
        setModalRecoverOpen(true);
        setModalCodeOpen(false);
      }

      //Função enviada para o modal RecoverPassword
      function closeModalRecover(){
        setModalRecoverOpen(false);
      }

    //-----------------------------------------------------------------------


    /* Temas e Cores: */
        

          //Definindo o tema padrão da página:
            
            const [theme, setTheme] = useState("light");

            //Salvando o tema da página ao recarregar:
              const setMode = (mode) => {
                window.localStorage.setItem("theme", mode);
                setTheme(mode);
              };

              useEffect(() => {
                const localTheme = window.localStorage.getItem("theme");
                localTheme ? setTheme(localTheme) : setMode("npmdark");
              }, []);

          //-----------------------------------------------------------------------



          //Definindo a logo padrão da página:

            const [logo, setLogo] = useState(logolight);

            //Salvando o tema da *logo* ao recarregar:
              const setModeLogo = (modelogo) => {
                window.localStorage.setItem(logolight, modelogo);
                setLogo(modelogo);
              };
            
              useEffect(() => {
                const localLogo = window.localStorage.getItem(logolight);
                localLogo ? setLogo(localLogo) : setModeLogo(logodark);
              }, []);

          //-----------------------------------------------------------------------

    //-----------------------------------------------------------------------
      

    //*Função de alteração entre temas (light/dark), chamada no botão darkmode:

      function themeToggler() {
        if (theme === "light") {
          setMode("npmdark"); //Alterando tema para a versão dark;
          setModeLogo(logodark); //Alterando logo para a versão dark;

        } else {
          setMode("light"); //Alterando tema para a versão light;
          setModeLogo(logolight); //Alterando logo para a versão light;
        }
      }

    //*-----------------------------------------------------------------------

  //!----------------------------------------------------------------------- 

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>

        <Navbar
          themeToggler={themeToggler} //Função(themeToggler)
          imgsrc={logo} //logo
          themebutton={theme} //tema do botão (sol ou lua)
          openModalSign={openModalSign} //Abrir modal de login/cad 
        />

        {isModalSignOpen ? <LoginRegister closeModalSign={closeModalSign} openModalPass={openModalPass} /> : null}

        {IsModalPassOpen ? <ForgetPassword closeModalPass={closeModalPass} openModalCode={openModalCode}/> : null}

        {IsModalCodeOpen ? <CodeRecoverPW closeModalCode={closeModalCode} openModalRecover={openModalRecover} /> : null}

        {IsModalRecoverOpen ? <RecoverPassword closeModalRecover={closeModalRecover} /> : null}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/equipe" element={<Equipe />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;