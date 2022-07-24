import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { Toggle } from "./Toggle";

const Search = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  border-right: none;
  width: 40rem;
  height: 3rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.view_background};
  transition: all .5s ease;
`;

const Input = styled.input.attrs({
  type: "search",
  name: "search",
  id: "search",
  placeholder: "Pesquisar serviço",
})`
  border: none;
  font-size: 1.1em;
  border-radius: 12px;
  padding: 0.5rem;
  margin-left: 1rem;
  width: 95%;
  background-color: ${({ theme }) => theme.view_background};
  color: ${({ theme }) => theme.view_text};
  transition: all .5s ease;
  &:focus-visible {
    outline: none;
  }
  &&::placeholder {
    color: "${({ theme }) => theme.view_text};"
    opacity: 0.7;
  }
`;

function Header({ event, imgsrc, svg_set_color, themebutton}) {
  return (
    <header className={styles.header}>
      <section className={styles.left}>
        <div className={styles.icon}>
          <Link to="/">
            {/* Utilizando a logo recebida como prop (imgsrc) */}
            <img src={imgsrc} alt="logo do website Lumi" />
          </Link>
        </div>
      </section>
      <section className={styles.center}>
        <div className={styles.darkmode}>
          {/* Botão Darkmode | onClick, recebe prop (event) -> Ativando a função (themeToggler) do componente App.js */}
          <button>
            <Toggle theme={themebutton} toggleTheme={event}/>
          </button>
        </div>
        <Search>
          {/* Definindo a cor do SVG com o valor da prop (svg_set_color), encaminhada do componente App.js */}
          <BiSearchAlt style={svg_set_color} />
          <Input />
        </Search>
      </section>
      <section className={styles.right}>
        <div className={styles.login}>
          <button className={styles.box_shadow}>
            <a href="./Login.js">Login</a>
          </button>
        </div>
        <div className={styles.register}>
          <button className={styles.box_shadow}>
            <a href="./Cadastro.js">
              <img src="./assets/icon_register.svg" alt="Registro" />
              Cadastro
            </a>
          </button>
        </div>
      </section>
    </header>
  );
}

export default Header;
