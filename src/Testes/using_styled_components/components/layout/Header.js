import styles from "./Header.module.css";
import logo from "../assets/icon_lumi.svg";
import { Link } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";

const Search = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  border-right: none;
  width: 40rem;
  height: 3rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.view_background};
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
  &:focus-visible {
    outline: none;
  }
  &&::placeholder {
    color: ${({ theme }) => theme.view_text};
    opacity: 0.7;
  }
`;

function Header({ event }) {
  return (
    <header className={styles.header}>
      <section className={styles.left}>
        <div className={styles.icon}>
          <Link to="/">
            <img src={logo} alt="logo do website Lumi" />
          </Link>
        </div>
      </section>
      <section className={styles.center}>
        <div className={styles.darkmode}>
          <button onClick={event}>
            <MdOutlineDarkMode />
          </button>
        </div>
        <Search>
          <BiSearchAlt />
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
