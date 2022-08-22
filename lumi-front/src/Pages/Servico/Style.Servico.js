import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 80%;
  height: 50rem;
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.grayOp};
  color: ${({ theme }) => theme.gray};
  transition: all 0.5s ease;
  box-shadow: ${({ theme }) => theme.shadow};

  @media screen and (min-width: 1500px) {
    width: 60rem;
  }
`;

export const Sobre = styled.div`
  width: 100%;
  height: 25%;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2%;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    height: 50%;
    flex-direction: column;
    h2 {
      margin-top: 0.2rem;
    }
  }
  
`;

export const ProfilePicture = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const Data = styled.aside`
  width: 70%;
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: row;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    
    aside {
      margin-bottom: 1rem;
      text-align: center;
    }
    p {
      margin-bottom: 0.2rem;
    }
  }
  @media screen and (max-width: 600px) {
    
    flex-direction: column;
  }
  h2 {
    color: ${({ theme }) => theme.gray};
    font-weight: 500;
    font-size: 1.1rem;
    transition: all 0.5s ease;
    margin-bottom: 0.2rem;
  }
  h3{
    color: ${({ theme }) => theme.gray};
    font-weight: 400;
    font-size: 1rem;
    transition: all 0.5s ease;
    margin-bottom: 0.5rem;
  }
  aside {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    display: flex;
    align-items:center;
    justify-content: center;
    p {
      font-size: 75%;
    }
  }
  span {
    color: ${({ theme }) => theme.purpleOP};
    transition: all 0.5s ease;
    font-weight: 450;
    font-size: 0.9rem;
    margin-top: 0.2rem;
    @media screen and (max-width: 520px) {
      font-size: 0.7rem;
    }
  }

  @media screen and (max-width: 900px){
    h2{
      font-size: 1rem;
    }
    h3{
      font-size: 0.9rem;
    }
    p{
      font-size: 72%;
    }
    span{
      font-size: 0.65rem;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  width: 90%;
  height: 15%;
  margin-top: 2%;
  margin-bottom: 2%;

  p {
    font-size: 0.8rem;
    text-align: justify;
    text-indent: 2rem;
  }
  @media screen and (max-width: 550px) {
    height: 15%;
  }
`;

export const Pictures = styled.div`
  border-radius: 12px;
  height: 50%;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
  background: ${({ theme }) => theme.grayOp};
  transition: all 0.5s ease;
  

  aside {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  div {
    width: 100%;
    height: 100%;
    text-align: center;
    div {
      width: 100%;
      height: 100%;
      position: relative;
      img {
        width: 90%;
        height: 90%;
        object-fit: cover;
        position: absolute;
        top: 5%;
        left: 5%;
        transform: translate (-5%, -5%);
        border-radius: 12px;
      }
    }
  }

  @media screen and (max-width: 960px) {
    width: 80%;
  }
  @media screen and (max-width: 800px) {
    width: 90%;
  }
  @media screen and (max-width: 550px) {
    height: 35%;
  }
  @media screen and (max-width: 450px) {
    height: 30%;
  }
  @media screen and (max-width: 370px) {
    height: 20%;
  }
`;
