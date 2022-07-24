import "./App-2.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Cadastro from "./components/pages/Cadastro";
import Header from "./components/layout-2/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
