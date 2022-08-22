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

//Axios
import { axiosInstance } from "../../service/axios";

function Delete({ closeModalDelete }) {

    const {setIsUserLogado} = useContext(UserContext);

    const notify = (texto) =>
    toast(texto, { toastId: "toastFromDelete" });

    let navigate = useNavigate();

    const deleteAccount = (e) =>{
        e.preventDefault();
        axiosInstance.delete("/api/user/").then((res) =>{
        console.log(res);
        if(res.status === 202){
            localStorage.removeItem("token");
            setIsUserLogado(false);
            navigate("/");
        }else{
            // console.log("Erro: ", res);
            <>{notify("Falha ao deletar sua conta")}</>;
        }
        
        })
    } 

  return (

    <Backdrop>
      <Container className="logout">
        <form>
          <FormTop>
            <h1 className="loghoutH1">Deletar a conta ?</h1>
            <CloseButton onClick={closeModalDelete}>
              <CgClose />
            </CloseButton>
          </FormTop>

        <div className="logoutbtn">
          <Submit onClick={closeModalDelete}>Cancelar</Submit>
          <Submit onClick={deleteAccount}>Deletar</Submit>
        </div>

        </form>
      </Container>
    </Backdrop>
  );
}

export default Delete;
