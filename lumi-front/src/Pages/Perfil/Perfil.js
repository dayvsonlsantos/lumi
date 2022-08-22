import React, { useEffect, useState } from "react";

//Componentes
import { ProfileContainer, ProfileBG, Deletebtn } from "./Style.Profile";

//Icones
import CardUser from "../../Components/CardUser/CardUser";

//Imagem
import profilePicture from "../../Assets/userdefault.png"


import { useNavigate } from "react-router-dom";


import "react-toastify/dist/ReactToastify.css";
import Delete from "../../Components/Modal/Delete";
import { Loading, LoadingContainer } from "../../Components/Loader";


function Perfil() {

  let navigate = useNavigate();


  useEffect(() => {
    if (localStorage.getItem('token') === "" || localStorage.getItem('token') === null) {
        navigate("/");
    }
  }, [navigate]);


//Abrir Fechar: CodeRecover
const [isDeleteOpen, setDeleteOpen] = useState(false);

function openModalDelete(e) {
  e.preventDefault();
  setDeleteOpen(true);
}

function closeModalDelete() {setDeleteOpen(false)}

const [ready, setReady] = useState(false);

  return (
    <>
    {isDeleteOpen ? (
        <Delete
          closeModalDelete={closeModalDelete}
        />
      ) : null}
    
    { ready ?
      <ProfileContainer>
        <ProfileBG>
          <img src={profilePicture} alt="Foto Perfil" />
        </ProfileBG>
        <CardUser setReady={setReady}/>
        <Deletebtn onClick={openModalDelete}>Deletar a conta</Deletebtn>
      </ProfileContainer>
    : <><LoadingContainer><Loading/></LoadingContainer><CardUser setReady={setReady}/></>}
    </>
 
    
  );
}

export default Perfil;
