import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { RiHome6Fill, RiUser3Fill } from "react-icons/ri";
import { ToggleMode } from "../ToggleMode/ToggleMode";
import { TiGroup } from "react-icons/ti";
import { CgMenuRight } from "react-icons/cg";

//Componentes
import {
  Container,
  SectionL,
  SectionC,
  Search,
  SVG,
  InputNav,
  SectionR,
  IconButton,
  SectionMenuMobile,
  HideDarkMode,
} from "./NavbarDesign";

import MenuMobile from "../MenuMobile/MenuMobile";
import { useState } from "react";

function Header({ event, imgsrc, themebutton, openModal }) {
  const [menuIsVisible, setMenuisVisible] = useState(false); //Estado inicial do modal, false, pois inicia-se fechado

  //Função para abertura e fechamento do modal Mudar Senha, Função enviada para o componente navbar
  function openModalMenuMobile() {
    setMenuisVisible(true);
  }

  //Função enviada para o componente modal
  function closeModalMenuMobile() {
    setMenuisVisible(false);
  }

  return (
    <>
      {menuIsVisible ? (
        <MenuMobile
          closeModalMenuMobile={closeModalMenuMobile}
          menuIsVisible={menuIsVisible}
          themebutton={themebutton}
          event={event}
          openModal={openModal}
        />
      ) : null}
      <Container>
        <Link to="/">
          <SectionL>
            <img src={imgsrc} alt="Logo - Lumi" />
          </SectionL>
        </Link>

        <SectionC>
          <HideDarkMode>
            <ToggleMode theme={themebutton} toggleTheme={event} />
          </HideDarkMode>
          <Search>
            <SVG>
              <BiSearchAlt />
            </SVG>
            <InputNav />
          </Search>
          <SectionMenuMobile>
            <IconButton>
              <CgMenuRight onClick={openModalMenuMobile} />
            </IconButton>
          </SectionMenuMobile>
        </SectionC>

        <SectionR>
          <Link to="/">
            <IconButton>
              <RiHome6Fill />
            </IconButton>
          </Link>

          <IconButton onClick={openModal}>
            <RiUser3Fill />
          </IconButton>

          <Link to="/equipe">
            <IconButton>
              <TiGroup />
            </IconButton>
          </Link>
        </SectionR>
      </Container>
    </>
  );
}

export default Header;
