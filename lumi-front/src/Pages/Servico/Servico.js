import React, { useEffect } from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import {
  Container,
  Data,
  Description,
  Main,
  Pictures,
  ProfilePicture,
  Sobre,
} from "./Style.Servico";

import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
//import fotoperfil from "../../Assets/userdefault.png";
import { useNavigate } from "react-router-dom";

const nome = "Marcos Aurelio";
const funcao = "Fotógrafo";
const desc ="Ensaios fotográficos | Mini-wedding | Pré-wedding | Festas infantis | Ensaios infantis. 2horas de Cobertura completa com click ilimitados e fotos, sendo elas editadas em alta resolução. Obs.: Não cobrimos taxa de deslocamento.";
const email = "marcosaurelio@gmail.com";
const phone = "8191234569";
const modalidade = 'Presencial';
const estado = 'PE';
const cidade = 'Recife';
const perfilteste = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";


const res = [
  {
    id: 1,
    imagem1: 'https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80',
    imagem2: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    imagem3: 'https://images.unsplash.com/photo-1504022462188-88f023db97bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    imagem4: 'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80',

  }

]


function Servico() {

  // const { id } = useParams();
  // console.log(id)
  
  // const [dados, setDados] = useState([]);


  let navigate = useNavigate();


  useEffect(() => {
    if (localStorage.getItem('token') === "" || localStorage.getItem('token') === null) {
        navigate("/");
    }
  }, [navigate]);


  return (
    <Main>
      <Container>
        <Sobre>
          <ProfilePicture>
            <img style={{borderRadius: '50%'}} src={perfilteste} alt="Foto Perfil" />
          </ProfilePicture>
          <Data>
            <aside>
              <h2>{nome}</h2>
              <span>{funcao}</span>
            </aside>
            <aside>
              <h3>Contato:</h3>
              <p>
                <span>E-mail: </span>
                {email}
              </p>
              <p>
                <span>Telefone: </span>
                {phone}
              </p>
            </aside>
            <aside>
              <h3>Disponibilidade:</h3>
              <p><span>Modalidade: </span>{modalidade}</p>
              <p><span>Local: </span>{cidade}, {estado}</p>
            </aside>
          </Data>
        </Sobre>
        <Description>
          <p>{desc}</p>
        </Description>
        {res.map((item) => {
          return (
            <Pictures key={item.id}>
              <CCarousel controls indicators>
                <CCarouselItem>
                  <CImage
                    src={item.imagem1}
                    alt="slide 1"
                  />
                </CCarouselItem>
                <CCarouselItem>
                  <CImage
                    src={item.imagem2}
                    alt="slide 2"
                  />
                </CCarouselItem>
                <CCarouselItem>
                  <CImage
                    src={item.imagem3}
                    alt="slide 3"
                  />
                </CCarouselItem>
                <CCarouselItem>
                  <CImage
                    src={item.imagem4}
                    alt="slide 4"
                  />
                </CCarouselItem>
              </CCarousel>
            </Pictures>
          );
        })}
      </Container>
    </Main>
  );
}

export default Servico;
