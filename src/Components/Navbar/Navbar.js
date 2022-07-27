import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { ToggleMode } from "../ToggleMode/ToggleMode";

import {Search, InputNav} from "../../themes/LocalStyles";

function Header({ event, imgsrc, svg_set_color, themebutton, openModal }) {
  return (
    <header className={styles.header}>
      
      <section className={styles.left}>
        <div className={styles.logo}>
          <Link to="/">
            {/* Utilizando a logo recebida como prop (imgsrc) */}
            <img src={imgsrc} alt="logo do website Lumi" />
          </Link>
        </div>
      </section>

      <section className={styles.center}>
       
        <div className={styles.changeModeDiv}>
          {/*
          
          Botão Darkmode (vindo do componente Toggle);
          onClick, recebe prop (event) -> Ativando a função (themeToggler) do componente App.js
          Prop theme, para alteração do botão (sol e lua) entre os modos dark e light.

          */}
          <ToggleMode theme={themebutton} toggleTheme={event} />
        </div>

        <Search>
          
          {/*
          Definindo a cor do SVG com o valor da prop (svg_set_color), encaminhada do componente App.js 
          */}

          <BiSearchAlt style={svg_set_color} />
          <InputNav />

        </Search>

      </section>


      <section className={styles.right}>
        
        <div className={styles.login}>
          <button onClick={openModal}>Login</button>
        </div>
        
      </section>
    </header>
  );
}

export default Header;
