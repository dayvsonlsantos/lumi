import styles from "./Header.module.css";
import logo from "../assets/icon_lumi.svg";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineDarkMode } from "react-icons/md";

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
        <aside className="search">
          <BiSearchAlt />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Pesquisar serviço"
          />
        </aside>
      </section>
      <section className={styles.right}>
        <div className={styles.login}>
          <button className={styles.box_shadow}>
            <a href="./login.html">Login</a>
          </button>
        </div>
        <div className={styles.register}>
          <button className={styles.box_shadow}>
            <a href="./cadastro.html">
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
