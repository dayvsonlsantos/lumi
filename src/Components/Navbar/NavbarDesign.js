import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 20%;
  padding: 0.5rem;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 1px solid ${({ theme }) => theme.view_background};
  transition: all 0.5s ease;
  box-sizing: border-box;
  overflow: auto;
  @media (max-width: 560px){
    flex-direction: column;
  }
`;

export const SectionL = styled.section`
  display: flex;
  widght: 20%;
  height: 100%;
  align-self: center;
  justifiy-content: center;
  flex-direction: row;
  @media (max-width: 560px){
    width: 100%;
    > img{
      display: block;
      margin: auto;
    }
  }
`;

export const SectionC = styled.section`
  display: flex;
  width: 60%;
  height: 100%;
  align-self: center;
  justifiy-content: center;
  @media(max-width: 1150px){
    width: 70%;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  border-right: none;
  width: 90%;
  height: 3rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.view_background};
  transition: all 0.5s ease;
  margin-left: 1rem;
  @media (max-width: 1151px){
    width: 100%;
  }
`;

export const SVG = styled.div`
  color: ${({ theme }) => theme.purpleOP};
  display: flex;
  align-items: center;
  justify-content: center;
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
        background-color: ${({ theme }) => theme.view_background};
        color: ${({ theme }) => theme.view_text};
        transition: all .5s ease;
        &:focus-visible {
          outline: none;
        }
        &&::placeholder {
          color: "${({ theme }) => theme.view_text};"
          opacity: 0.7;
        }
      `;

export const SectionR = styled.section`
  display: flex;
  width: 20%;
  height: 100%;
  align-self: center;
  justify-content: space-around;
  flex-direction: row;
  @media (min-width: 1200px){
    width: 15rem;
  }
  @media(max-width: 1150px){
    display:none;
  }
`;

export const IconButton = styled.div`
  background-color: ${({ theme }) => theme.background_modal};
  width: 2em;
  height: 2em;
  border-radius: 100%;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  color: ${({ theme }) => theme.svgVariant};
  font-size: 1.4rem;
`;

export const SectionMenuMobile = styled.section`
  display: flex;
  width: 20%;
  margin-left: 1rem;
  height: 100%;
  align-self: center;
  justify-content: center;
  @media(min-width: 1151px){
    display:none;
  }
`;

export const HideDarkMode = styled.div`
  display: flex;
  width: 10%;
  align-self: center;
  justifiy-content: center;
  @media (max-width: 1150px){
    display: none;
  }
`