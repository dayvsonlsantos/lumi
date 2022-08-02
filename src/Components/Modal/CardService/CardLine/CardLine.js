import React from "react";
import {Service, Picture, About, ServName, ServFunction, Description, LampIcon} from "./Style.CardLine";
import {MdLightbulbOutline} from "react-icons/md";

function ServiceModalLine(){
    const url = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxfHx1c2VyfGVufDB8fHx8MTY1OTE3MjI5OA&ixlib=rb-1.2.1&q=80&w=1080";
    
    const servicedescription = "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...";

    const providername = "Marcos Aurelio";

    const providerfunction = "Fotógrafo";

    return(
        <Service>
            
            <Picture src={url} alt="" />
            
            <About>
                <ServName>{providername}</ServName>
                <ServFunction>{providerfunction}</ServFunction>
            </About>

            <Description>
                {servicedescription}
            </Description>
            
            <LampIcon><MdLightbulbOutline/></LampIcon>
            
        </Service>
    )
}

export default ServiceModalLine;