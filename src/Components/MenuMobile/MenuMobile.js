import React from "react";
import { Container, MenuItems, SVGMenuMobile } from "./MenuMobileDesign";
import { CgClose } from "react-icons/cg";
import { RiHome6Fill, RiUser3Fill } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";
import { ToggleModeMobile } from "../ToggleMode/ToggleMode";
import { Link } from "react-router-dom";

const Size = { fontSize: "2rem" };

function MenuMobile({
  closeModalMenuMobile,
  menuIsVisible,
  themebutton,
  event,
  openModal,
}) {

  function AbrirLogin(){
    closeModalMenuMobile();
    openModal();
  }
  return (
    <Container menuIsVisible={menuIsVisible}>
      <CgClose size={45} onClick={closeModalMenuMobile} />
      <MenuItems>
        <Link to="/" onClick={closeModalMenuMobile}>
          <SVGMenuMobile>
            <RiHome6Fill style={Size} />
            <span>Inicio</span>
          </SVGMenuMobile>
        </Link>

        <SVGMenuMobile onClick={AbrirLogin}>
          <RiUser3Fill style={Size} />
          <span>Login</span>
        </SVGMenuMobile>

        <SVGMenuMobile>
          <ToggleModeMobile theme={themebutton} toggleTheme={event} />
        </SVGMenuMobile>

        <Link to="/equipe" onClick={closeModalMenuMobile}>
          <SVGMenuMobile>
            <TiGroup style={Size} />
            <span>Desenvolvedores</span>
          </SVGMenuMobile>
        </Link>
      </MenuItems>
    </Container>
  );
}

export default MenuMobile;
