import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Cadastro from "./components/pages/Cadastro";
import Header from "./components/layout/Header";
import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  function themeToggler() {
    if (theme === "light") {
      setTheme("npmdark"); //Alterando tema para a versão dark;
    } else {
      setTheme("light"); //Alterando tema para a versão light;
    }
  }

  return (
    <ThemeContext.Provider value={{ themeToggler }}>
      <div className="App" id={theme}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/" element={<Cadastro />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
