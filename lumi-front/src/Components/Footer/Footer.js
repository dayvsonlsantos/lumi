import React from "react";

//Style
import { FooterS } from "./Style.Footer";

function Footer (){
    return(
        <FooterS>
            
            <h1>Lumos</h1>

            <p>O Lumos é um grupo composto por quatro programadores fascinados em desenvolvimento de aplicações web. A equipe foi formada aleatoriamente para o desenvolvimento do projeto final do Start fornecido pela Rede Cidadã, em 2022.</p>

            
            
                <a href="https://github.com/Start-Lumos" target="_blank" rel="noreferrer"><img align="center" alt="Lumos-github" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></img></a>
                

            <span>Copyright @2022 Lumos. Designed By <a href="https://www.linkedin.com/in/dayvsonlimasantos/" rel="noreferrer" target="_blank" >Dayvson Lima</a></span>

            <div>
            <a className="termos" href="/termos-de-uso">Termos de uso</a>
            <a className="termos" href="/politicas-de-privacidade">Politicas de Privacidade</a>
            </div>


            
        </FooterS>
    )
}

export default Footer;