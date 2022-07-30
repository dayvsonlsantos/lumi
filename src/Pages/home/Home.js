import ServiceModalLine from "../../Components/Modal/ServiceModal/Line/ServiceModalLine";
import {Main} from "./HomeDesign";

function Home({svgColor}){
    return(
        <Main>
            <ServiceModalLine svgColor={svgColor}/>
        </Main>
    )
}

export default Home;