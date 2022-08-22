import { useEffect, useState } from "react";
import CardLine from "../../Components/CardService/CardLine/CardLine";
import {Main} from "./Style.Home";

//Axios
import { axiosInstance } from "../../service/axios";
import { Loading, LoadingContainer } from "../../Components/Loader";


function Home(){

    const [ready, setReady] = useState(false);
    const [servidores, setServidores] = useState([]);

    useEffect(() => {
        axiosInstance.get("/user/list").then((res) => {
            setServidores(res.data.user);
            setReady(true)
        })
    }, [])

    return(
        <>
        {ready ?
        <Main style={{flexDirection: "column"}}>
            {/* {servidores.map(servidor => {
                return(<p>{servidor}</p>)
            })} */}
            {servidores.map((servidor) => (  
                <div key={servidor.userCPF}>
                    <CardLine dados={servidor}/>  
                </div>
            ))}
        </Main>
         : <LoadingContainer><Loading/></LoadingContainer>}
        </>
    )
}

export default Home;