import styled from "styled-components";

export const Service = styled.div`
  width: 70%;
  height: 20%;
  border-radius: 12px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.grayOp};
  color: ${({ theme }) => theme.gray};
  transition: all 0.5s ease;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadow};
  @media (min-width: 1600px) {
    width: 70rem;
  }
  @media (max-width: 1150px) {
    width: 40%;
    height: 40%;
    flex-direction: column;
  }
  @media (max-width: 800px) {
    width: 60%;
    height: 60%;
  }
  @media (max-width: 550px) {
    width: 80%;
    height: 80%;
  }
`;

export const Picture = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 1rem 1rem;
  width: 15%;
  height: 15%;
  align-items: center;
  border-radius: 100%;
  box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.135);
  @media (max-width: 1150px) {
    width: 30%;
  }
`;

export const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 20%;
  @media (max-width: 1150px) {
    width: 80%;
  }
`;

export const ServName = styled.h2`
  color: ${({ theme }) => theme.gray};
  font-weight: 500;
  font-size: 1.2rem;
  text-align: center;
  transition: all 0.5s ease;
  @media (min-width: 1900px) {
    font-size: 1.4rem;
  }
`;

export const ServFunction = styled.h2`
  color: ${({ theme }) => theme.purpleOP};
  transition: all 0.5s ease;
  font-weight: 450;
  font-size: 0.9rem;
  margin-top: 0.2rem;
  text-align: center;
  @media (min-width: 1900px) {
    font-size: 1rem;
  }
`;

export const Description = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 50%;
  padding: 0 1rem;
  height: 100%;
  font-size: 0.8rem;
  text-align: justify;
  @media (min-width: 1900px) {
    font-size: 1rem;
  }
  @media (max-width: 1150px) {
    width: 60%;
    margin: auto;
    margin: 4%;
  }
`;

export const LampIcon = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  width: 10%;  
  font-size: 1.3rem;
  color: ${({ theme }) => theme.purpleOP};
  @media (min-width: 1900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 1150px) {
    margin-bottom: 5%;
  }
`;
