import React from "react";

//Style
import {Service, Picture, About, ServName, ServFunction, Description, LampIcon} from "./Style.CardLine";

//Icon
import {MdLightbulbOutline} from "react-icons/md";
import { useNavigate } from "react-router-dom";

//Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CardLine({dados}){
    
    const url = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxfHx1c2VyfGVufDB8fHx8MTY1OTE3MjI5OA&ixlib=rb-1.2.1&q=80&w=1080";

    let navigate = useNavigate();

    const notify = (texto) =>
    toast(texto, { toastId: "toastFromCardLine" });

    function abrirServico (e){
        e.preventDefault();
        navigate("/servico");
        if (localStorage.getItem('token') === "" || localStorage.getItem('token') === null) {
            notify("Realize o Login")
        }     
    }


    return(

        <Service onClick={abrirServico}>
            
            <Picture src={url} alt="" />
            
            <About>
                <ServName>{dados.userFirstName} {dados.userLastName.split(' ').slice(0, 1).join(' ')}</ServName>
                <ServFunction>{dados.userServico}</ServFunction>
            </About>

            <Description>
                {dados.userServDescricao}
            </Description>
            
            <LampIcon><MdLightbulbOutline/></LampIcon>
            
        </Service>
    )
}

export default CardLine;