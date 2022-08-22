import React from "react";

//Componentes
import { Container, MenuItems, Icon } from "./Style.NavbarMobile";

//Icones dos botões
import { CgClose } from "react-icons/cg";
import { RiHome6Fill, RiUser3Fill } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";

//Modo escuro
import { ToggleModeMobile } from "../ToggleMode/ToggleMode";

//Importando Link
import { Link } from "react-router-dom";

function NavbarMobile({
  closeModalMenuMobile,
  menuMobileIsVisible,
  themebutton,
  themeToggler,
  openModalSign,
  isUserLogado,
}) {

  const size = { fontSize: "2rem" };

  const abrirLogin = () => {
    closeModalMenuMobile();
    openModalSign();
  }

  return (

    <Container menuMobileIsVisible={menuMobileIsVisible}>
      
      <CgClose size={45} onClick={closeModalMenuMobile}/>
      
      <MenuItems>
        
          <Link to="/" onClick={closeModalMenuMobile}>
            <Icon>
              <RiHome6Fill style={size} />
              <span>Inicio</span>
            </Icon>
          </Link>

          {isUserLogado ?(
            <Link to="/perfil">
              <Icon onClick={closeModalMenuMobile}>
                <RiUser3Fill style={size} />
                <span>Perfil</span>
              </Icon>
            </Link>
          ) : (        
            <Icon onClick={abrirLogin}>
              <RiUser3Fill style={size} />
              <span>Login</span>
            </Icon>
          )}

          <Icon>
            <ToggleModeMobile theme={themebutton} toggleTheme={themeToggler} />
          </Icon>

          <Link to="/equipe" onClick={closeModalMenuMobile}>
            <Icon>
              <TiGroup style={size} />
              <span>Desenvolvedores</span>
            </Icon>
          </Link>
          
      </MenuItems>

    </Container>
  );
}

export default NavbarMobile;
