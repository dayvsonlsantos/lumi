import React from "react";
import { Link } from "react-router-dom";
import { ErroPage } from "./Style.NotFound";

function NotFound (){
    return(
        <ErroPage>
            <h1>Erro 404</h1>
            <p>A página que você está procurando não existe.</p>
            <Link to="/">Voltar</Link>
        </ErroPage>
    )
}

export default NotFound;