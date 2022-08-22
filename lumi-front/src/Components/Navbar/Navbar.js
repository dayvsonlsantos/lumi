import { useState, useContext } from "react";

//UseContext
import { UserContext } from "../../App";

//Link
import { Link } from "react-router-dom";

//Icones
import { BiSearchAlt } from "react-icons/bi";
import { RiHome6Fill, RiUser3Fill } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";
import { CgMenu } from "react-icons/cg";

//Modo escuro
import { ToggleMode } from "../ToggleMode/ToggleMode";

//Componentes
import {
  Container,
  Logo,
  Center,
  Search,
  SearchIcon,
  InputNav,
  NavButtons,
  IconStyle,
  MenuMobileIcon,
} from "./Style.Navbar";

import NavbarMobile from "../NavbarMobile/NavbarMobile";

//Modal
import LoginRegister from "../Modal/LoginRegister/LoginRegister";
import ForgetPassword from "../Modal/Password/ForgetPassword/ForgetPassword";
import CodeRecoverPW from "../Modal/Password/CodeRecoverPW/CodeRecoverPW";
import RecoverPassword from "../Modal/Password/RecoverPassword/RecoverPassword";
import { StyledContainer } from "../Modal/Styles.Modal";

//Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar({ themeToggler, imgsrc, themebutton }) {
  


    //Abrir e Fechar: NavbarMobile
    const [menuMobileIsVisible, setMenuMobileisVisible] = useState(false);

    function openModalMenuMobile() {setMenuMobileisVisible(true)}

    function closeModalMenuMobile() {setMenuMobileisVisible(false)}




  
    //Abrir e Fechar: Login / Register
    const [isModalSignOpen, setModalSignOpen] = useState(false);

    function openModalSign() {setModalSignOpen(true)}

    function closeModalSign() {setModalSignOpen(false)}

    



    //Abrir e Fechar: ForgetPassword
    const [isModalPassOpen, setModalPassOpen] = useState(false);

    function openModalPass(e) {
      e.preventDefault();
      setModalPassOpen(true);
      setModalSignOpen(false);
    }

    function closeModalPass() {setModalPassOpen(false)}

    



    //Abrir Fechar: CodeRecover
    const [isModalCodeOpen, setModalCodeOpen] = useState(false);

    function openModalCode(e) {
      e.preventDefault();
      setModalCodeOpen(true);
      setModalPassOpen(false);
    }

    function closeModalCode() {setModalCodeOpen(false)}




    
    //Abrir e Fechar: RecoverPassword
    const [isModalRecoverOpen, setModalRecoverOpen] = useState(false);

    function openModalRecover(e) {
      e.preventDefault();
      setModalRecoverOpen(true);
      setModalCodeOpen(false);
    }

    function closeModalRecover() {setModalRecoverOpen(false)}

    //Logado
    const {isUserLogado, setIsUserLogado} = useContext(UserContext);


    const notify = (texto) =>
    toast(texto, { toastId: "toastFromNav" });

    function desenvolvimento (){
      notify("Em Desenvolvimento")
    }

  return (
    <>

      <StyledContainer autoClose={2500} position="top-center" />

      {isModalSignOpen ? (
        <LoginRegister
          closeModalSign={closeModalSign}
          openModalPass={openModalPass}
          setIsUserLogado={setIsUserLogado}
        />
      ) : null}

      {isModalPassOpen ? (
        <ForgetPassword
          closeModalPass={closeModalPass}
          openModalCode={openModalCode}
        />
      ) : null}

      {isModalCodeOpen ? (
        <CodeRecoverPW
          closeModalCode={closeModalCode}
          openModalRecover={openModalRecover}
        />
      ) : null}

      {isModalRecoverOpen ? (
        <RecoverPassword closeModalRecover={closeModalRecover} />
      ) : null}

      {menuMobileIsVisible ? (
        <NavbarMobile
          closeModalMenuMobile={closeModalMenuMobile}
          menuMobileIsVisible={menuMobileIsVisible}
          themebutton={themebutton}
          themeToggler={themeToggler}
          openModalSign={openModalSign}
          isUserLogado={isUserLogado}
        />
      ) : null}

      <Container>

        <Link to="/">
          <Logo src={imgsrc} alt="Logo - Lumi" />
        </Link>

        <Center>
          <ToggleMode theme={themebutton} toggleTheme={themeToggler} />

          <Search onClick={desenvolvimento}>
            <SearchIcon>
              <BiSearchAlt />
            </SearchIcon>

            <InputNav />
          </Search>

          <MenuMobileIcon onClick={openModalMenuMobile}>
            <IconStyle>
              <CgMenu />
            </IconStyle>
          </MenuMobileIcon>
        </Center>

        <NavButtons>
          <Link to="/">
            <IconStyle>
              <RiHome6Fill />
              <span>Início</span>
            </IconStyle>
          </Link>

          <Link to="/equipe">
            <IconStyle>
              <TiGroup />
              <span>Devs</span>
            </IconStyle>
          </Link>

          {isUserLogado ? (
            <Link to="/perfil">
              <IconStyle >
                <RiUser3Fill />
                <span>Perfil</span>
              </IconStyle>
            </Link>
          ) : (        
            <IconStyle onClick={openModalSign}>
              <RiUser3Fill />
              <span>Login</span>
            </IconStyle>
          )}

        </NavButtons>
        
      </Container>
    </>
  );
}

export default Navbar;
