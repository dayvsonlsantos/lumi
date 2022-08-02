import React from "react";

import { Container, MenuItems, Icon } from "./Style.MenuMobile";

//Icones dos botões
import { CgClose } from "react-icons/cg";
import { RiHome6Fill, RiUser3Fill } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";

//Modo escuro
import { ToggleModeMobile } from "../ToggleMode/ToggleMode";

//Importando Link
import { Link } from "react-router-dom";

function MenuMobile({
  closeModalMenuMobile,
  menuMobileIsVisible,
  themebutton,
  themeToggler,
  openModalSign,
}) {

  const Size = { fontSize: "2rem" };

  function AbrirLogin(){
    closeModalMenuMobile();
    openModalSign();
  }
  return (

    <Container menuMobileIsVisible={menuMobileIsVisible}>
      
      <CgClose size={45} onClick={closeModalMenuMobile}/>
      
      <MenuItems>
        <Link to="/" onClick={closeModalMenuMobile}>
          <Icon>
            <RiHome6Fill style={Size} />
            <span>Inicio</span>
          </Icon>
        </Link>

        <Icon onClick={AbrirLogin}>
          <RiUser3Fill style={Size} />
          <span>Login</span>
        </Icon>

        <Icon>
          <ToggleModeMobile theme={themebutton} toggleTheme={themeToggler} />
        </Icon>

        <Link to="/equipe" onClick={closeModalMenuMobile}>
          <Icon>
            <TiGroup style={Size} />
            <span>Desenvolvedores</span>
          </Icon>
        </Link>
      </MenuItems>
    </Container>
  );
}

export default MenuMobile;
