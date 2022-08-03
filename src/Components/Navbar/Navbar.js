import { Link } from "react-router-dom";
import { useState } from "react";

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

//Componente Menu Mobile
import MenuMobile from "../NavbarMobile/NavbarMobile";


function Header({ themeToggler, imgsrc, themebutton, openModalSign }) {
  
  //Abertura e Fechamento do menu para versão mobile

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
          themeToggler={themeToggler}
          openModalSign={openModalSign}
        />
      ) : null}
      <Container>
        
        <Link to="/">
          <Logo src={imgsrc} alt="Logo - Lumi" />
        </Link>

        <Center>
          
          <ToggleMode theme={themebutton} toggleTheme={themeToggler} />

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
          
          <IconStyle onClick={openModalSign}>
            <RiUser3Fill />
            <span>Login</span>
          </IconStyle>
          
        </NavButtons>
      </Container>
    </>
  );
}

export default Header;
