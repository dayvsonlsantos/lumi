import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

//CSS
import "./Styles/main.scss";

//Pages
import Home from "./Pages/home/Home";

//Componentes
import Navbar from "./Components/Navbar/Navbar";

//Temas e Cores
import { lightTheme, darkTheme } from "./themes/Themes.js";
import { GlobalStyles } from "./GlobalStyles";

//Logos
import logolight from "./Assets/logo/icon_lumi.svg";
import logodark from "./Assets/logo/icon_lumi_dark.svg";

//Modal
import Modal from "./Components/Modal/Modal";
import ForgetPassword from "./Components/Modal/ForgetPassword/ForgetPassword";
import CodeRecoverPW from "./Components/Modal/CodeRecoverPW/CodeRecoverPW";
import RecoverPassword from "./Components/Modal/RecoverPassword/RecoverPassword";

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

          //Cores padrões nos modos light e dark, dos icones SVGs

            const lightPurple = { color: "#7F75FF" };
            const darkPurple = { color: "#564AFF" };

            //Definindo a cor padrão dos SVGs como darkPurple;
            const [svgColor, setSvgColor] = useState(darkPurple); 

          //-----------------------------------------------------------------------


          //* Usados em RegisterModal e LoginModal: */

                //Cores padrões nos modos light e dark, do input

                  const light_inputColor = "#F3F3F3"
                  const dark_inputColor = "#201B2C"

                  //Definindo a cor padrão do input como light:
                    const [inputColor, setInputColor] = useState(light_inputColor);

                  //Salvando o tema do input ao recarregar a página:
                    const setModeInput = (modeInput) => {
                      window.localStorage.setItem(light_inputColor, modeInput);
                      setInputColor(modeInput)
                    }
                  
                    useEffect(() => {
                      const LocalInput = window.localStorage.getItem(light_inputColor);
                      LocalInput ? setInputColor(LocalInput) : setModeInput(dark_inputColor);
                    }, []);
                  
                //-----------------------------------------------------------------------



                //Cores padrões nos modos light e dark, dos *valores* input:

                  const light_inputValueColor = "#7D7D7D"
                  const dark_inputValueColor = "#ffffff"
                
                  //Definindo a cor padrão do *valor* input como light:
                    const [inputValueColor, setInputValueColor] = useState(light_inputValueColor);

                  //Salvando o tema do *valor* input ao recarregar a página:
                    const setModeValueInput = (modeValueFromInput) => {
                      window.localStorage.setItem(light_inputValueColor, modeValueFromInput);
                      setInputValueColor(modeValueFromInput)
                    }
                  
                    useEffect(() => {
                      const LocalValueFromInput = window.localStorage.getItem(light_inputValueColor);
                      LocalValueFromInput ? setInputValueColor(LocalValueFromInput) : setModeValueInput(dark_inputValueColor);
                    }, []);

                //-----------------------------------------------------------------------

          //*-----------------------------------------------------------------------
        

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
          setSvgColor(lightPurple); //Alterando cor dos SVGs para a versão light (Roxo claro);

          //Alterando a cor do input e value para dark:
          setModeInput(dark_inputColor);
          setModeValueInput(dark_inputValueColor);
        } else {
          setMode("light"); //Alterando tema para a versão light;
          setModeLogo(logolight); //Alterando logo para a versão light;
          setSvgColor(darkPurple); //Alterando cor dos SVGs para a versão dark (Roxo escuro);

          //Alterando a cor do input e value para light:
          setModeInput(light_inputColor);
          setModeValueInput(light_inputValueColor);
        }
      }

    //*-----------------------------------------------------------------------

  //!----------------------------------------------------------------------- 

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>

        <Navbar
          event={themeToggler} //Função(themeToggler)
          imgsrc={logo} //logo
          svg_set_color={svgColor} //cor do svg para a navbar
          themebutton={theme} //tema do botão (sol ou lua)
          openModal={openModalSign} //Abrir modal de login/cad 
        />

        {/* 
          Abrir LoginModal e RegisterModal:
          - Se modal estiver aberto, enviar a função para fechar (closeModal) 
          - Enviar a cor para o input e p/ o seu valor
          - 
        */}
        {isModalSignOpen ? <Modal closeModalSign={closeModalSign} inputColor={inputColor} inputValueColor={inputValueColor}  openModalPass={openModalPass} /> : null}

        {/* 
          Abrir Modal ForgetPassword:
          - Se modal estiver aberto, enviar a função para fechar (closeModalPass) 
          - Enviar a cor para o input e p/ o seu valor
        */}
        {IsModalPassOpen ? <ForgetPassword closeModalPass={closeModalPass} inputColor={inputColor} inputValueColor={inputValueColor} openModalCode={openModalCode}/> : null}

        {/* 
          Abrir Modal CodeRecoverPW:
          - Se modal estiver aberto, enviar a função para fechar (closeModalCode) 
          - Enviar a cor para o input e p/ o seu valor
        */}
        {IsModalCodeOpen ? <CodeRecoverPW closeModalCode={closeModalCode} inputColor={inputColor} inputValueColor={inputValueColor} openModalRecover={openModalRecover} /> : null}


        {/* 
          Abrir Modal RecoverPassword:
          - Se modal estiver aberto, enviar a função para fechar (closeModal) 
          - Enviar a cor para o input e p/ o seu valor
        */}
        {IsModalRecoverOpen ? <RecoverPassword closeModalRecover={closeModalRecover} inputColor={inputColor} inputValueColor={inputValueColor} /> : null}

        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
