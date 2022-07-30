import styled from "styled-components";

export const Service = styled.div`
  width: 70%;
  height: 20%;
  border-radius: 12px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.view_background};
  color: ${({ theme }) => theme.view_text};
  transition: all 0.5s ease;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.135);
  @media(min-width: 1600px){
    width: 70rem;
  }
  @media(min-width: 1900px){
    width: 90rem;
  }
  @media(max-width: 1150px){
    width: 40%;
    height: 40%;
    flex-direction: column;
  }
  @media(max-width: 800px){
    width: 60%;
    height: 60%;
  }
  @media(max-width: 550px){
    width: 80%;
    height: 80%;
  }
`;

export const AsideRowPicture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 20%;
  margin-right: auto;
  @media(max-width: 1150px){
    width: 60%;
    margin: auto;
  }
`;

export const AsideCol = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  flex-direction: column;
  width: 20%;
  @media(max-width: 1150px){
    width: 80%;
    align-items: center;
  }
`;

export const AsideRowDesc = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 45%;
  height: 100%;
  font-size: 0.8rem;
  text-align: justify;
  @media(min-width: 1900px){
    font-size: 1rem;
  }
  @media(max-width: 1150px){
    width: 60%;
    margin: auto;
    margin: 4%;
  }
  
`;

export const AsideIcon = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  width: 15%;
  @media(max-width: 1150px){
    margin-bottom: 2%;
  }
`;

export const Img = styled.img`
  display: block;
  margin: 1rem 1rem;
  width: 50%;
  height: 50%;
  align-items: center;
  border-radius: 100%;
  box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.135);
`;

export const ServiceName = styled.h2`
  color: ${({ theme }) => theme.view_text};
  font-weight: 500;
  font-size: 1.2rem;
  transition: all 0.5s ease;
  @media(min-width: 1900px){
    font-size: 1.6rem;
  }
`;

export const ServiceFunction = styled.h2`
  color: ${({ theme }) => theme.purpleOP};
  transition: all 0.5s ease;
  font-weight: 450;
  font-size: 0.9rem;
  margin-top: 0.2rem;
  @media(min-width: 1900px){
    font-size: 1.2rem;
  }
`;

export const SvgSize = styled.div`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.purpleOP};
  @media(min-width: 1900px){
    font-size: 1.6rem;
  }
`;
