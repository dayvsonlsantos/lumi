import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 20%;
  padding: 0.5rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid ${({ theme }) => theme.grayOp};
  transition: all 0.5s ease;
  box-sizing: border-box;
  overflow: auto;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  display: flex;
  widght: 20%;
  height: 100%;
  align-self: center;
  justifiy-content: center;
  flex-direction: row;
  @media (max-width: 800px) {
    width: 90%;
    margin: auto;
  }
`;

export const Center = styled.section`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 800px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  border-right: none;
  width: 100%;
  height: 3rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.grayOp};
  transition: all 0.5s ease;
  margin-left: 1rem;
  @media (max-width: 800px) {
    width: 80%;
    margin-left: 0;
  }
  @media (min-width: 801px) && (max-width: 1200px) {
    width: 100%;
  }
`;

export const SearchIcon = styled.div`
  color: ${({ theme }) => theme.purpleOP};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  font-size: 1.2rem;
`;

export const InputNav = styled.input.attrs({
  type: "search",
  name: "search",
  id: "search",
  placeholder: "Encontrar o serviço que preciso",
})`
        border: none;
        font-size: 1rem;
        border-radius: 12px;
        padding: 0.5rem 0.8rem;
        width: 100%;
        background-color: ${({ theme }) => theme.grayOp};
        color: ${({ theme }) => theme.gray};
        transition: all .5s ease;
        &:focus-visible {
          outline: none;
        }
        &&::placeholder {
          color: "${({ theme }) => theme.gray};"
          opacity: 0.7;
        }`;

export const NavButtons = styled.section`
  display: flex;
  width: 25rem;
  height: 100%;
  align-self: center;
  justify-content: center;
  flex-direction: row;
  > a {
    text-decoration: none;
  }
  @media (max-width: 1400px){
    width: 30%;
  }
  @media (max-width: 1199px) {
    display: none;
  }
`;

export const IconStyle = styled.div`
  background-color: ${({ theme }) => theme.purpleOP};
  color: ${({ theme }) => theme.svgVariant};
  font-size: 1.4rem;
  transition: all 0.5s ease;
  width: 5em;
  height: 2em;
  margin-left: 1rem;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.120);
  padding: 1.2rem;

  >svg{
    color: ${({ theme }) => theme.grayOp};
    transition: all 0.5s ease;
  }

  > span {
    font-size: 0.65em;
    margin-left: 0.5rem;
    color: ${({ theme }) => theme.grayOp};
    transition: all 0.5s ease;
  }
  @media (max-width: 800px) {
    width: 2.5em;
    margin-left: 0;
  }
`;

export const MenuMobileIcon = styled.section`
  display: flex;
  width: 10%;
  height: 100%;
  margin-left: 1rem;
  align-self: center;
  justify-content: center;
  @media (min-width: 1200px) {
    display: none;
  }
`;
