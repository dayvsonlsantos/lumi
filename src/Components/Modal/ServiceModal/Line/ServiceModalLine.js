import React from "react";
import {Img, Service, AsideRowPicture, AsideRowDesc, AsideCol, ServiceName, ServiceFunction, SvgSize, AsideIcon} from "./ServiceDesignLine";
import {MdLightbulbOutline} from "react-icons/md";

function ServiceModalLine({svgColor}){
    const url = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxfHx1c2VyfGVufDB8fHx8MTY1OTE3MjI5OA&ixlib=rb-1.2.1&q=80&w=1080";
    
    const servicedescription = "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...";

    const serviceName = "Marcos Aurelio";

    const serviceFunction = "Fotógrafo";

    return(
        <Service>
            <AsideRowPicture>
                <Img src={url} alt="" />
            </AsideRowPicture>
            <AsideCol>
                <ServiceName>{serviceName}</ServiceName>
                <ServiceFunction>{serviceFunction}</ServiceFunction>
            </AsideCol>
            <AsideRowDesc>
                {servicedescription}
            </AsideRowDesc>
            <AsideIcon>
                <SvgSize><MdLightbulbOutline/></SvgSize>
            </AsideIcon>
        </Service>
    )
}

export default ServiceModalLine;