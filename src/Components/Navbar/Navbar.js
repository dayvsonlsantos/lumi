import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { RiHome6Fill, RiUser3Fill } from "react-icons/ri";
import { ToggleMode } from "../ToggleMode/ToggleMode";
import { TiGroup } from "react-icons/ti";
import { CgMenu } from "react-icons/cg";

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
} from "./NavbarDesign";

import MenuMobile from "../MenuMobile/MenuMobile";
import { useState } from "react";

function Header({ event, imgsrc, themebutton, openModal }) {
  const [menuMobileIsVisible, setMenuMobileisVisible] = useState(false);

  function openModalMenuMobile() {
    setMenuMobileisVisible(true);
  }

  function closeModalMenuMobile() {
    setMenuMobileisVisible(false);
  }

  return (
    <>
      {menuMobileIsVisible ? (
        <MenuMobile
          closeModalMenuMobile={closeModalMenuMobile}
          menuMobileIsVisible={menuMobileIsVisible}
          themebutton={themebutton}
          event={event}
          openModal={openModal}
        />
      ) : null}
      <Container>
        
        <Link to="/">
          <Logo src={imgsrc} alt="Logo - Lumi" />
        </Link>

        <Center>
          
          <ToggleMode theme={themebutton} toggleTheme={event} />

          <Search>
            
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
          
          <IconStyle onClick={openModal}>
            <RiUser3Fill />
            <span>Login</span>
          </IconStyle>
          
        </NavButtons>
      </Container>
    </>
  );
}

export default Header;
