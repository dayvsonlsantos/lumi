import React from "react";

//Componentes
import {ProfileContainer, ProfileBG, ProfileSectionBG} from "./Style.Profile";
import { CardUser } from "../../Components/CardUser/CardUser";

//Icones
import { RiUser3Fill } from "react-icons/ri";

function Perfil(){

    return (
        <ProfileContainer>
            <ProfileBG>
                <RiUser3Fill/>
            </ProfileBG>
            <ProfileSectionBG>
                <CardUser/>
            </ProfileSectionBG>
        </ProfileContainer>      
    )
}

export default Perfil;