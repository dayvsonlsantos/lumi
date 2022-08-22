import React, {useContext} from "react";

//Botão Fechar
import { CgClose } from "react-icons/cg";

//Componentes
import { Backdrop, Container, FormTop, CloseButton, Submit } from "./Styles.Modal";

//UseContext
import { UserContext } from "../../App";

//useNavigate
import { useNavigate } from "react-router-dom";

//Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Logout({ closeModalSair }) {

    //Notify
    const notify = (texto) => toast(texto);

    const sair = (e) => {
        e.preventDefault();
    
        localStorage.removeItem("token");
        setIsUserLogado(false);
        navigate("/");
        <>{notify("Você saiu")}</>
      }
    
    
      const {setIsUserLogado} = useContext(UserContext);
    
      let navigate = useNavigate();

  return (

    <Backdrop>
      <Container className="logout">
        <form>
          <FormTop>
            <h1 className="loghoutH1">Deseja sair ?</h1>
            <CloseButton onClick={closeModalSair}>
              <CgClose />
            </CloseButton>
          </FormTop>

        <div className="logoutbtn">
          <Submit onClick={closeModalSair}>Cancelar</Submit>
          <Submit onClick={sair}>Sair</Submit>
        </div>

        </form>
      </Container>
    </Backdrop>
  );
}

export default Logout;
