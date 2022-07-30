import styled from "styled-components";

//Navbar

export const Search = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  border-right: none;
  width: 40rem;
  height: 3rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.view_background};
  transition: all 0.5s ease;
`;

export const InputNav = styled.input.attrs({
  type: "search",
  name: "search",
  id: "search",
  placeholder: "Pesquisar serviço",
})`
      border: none;
      font-size: 1.1em;
      border-radius: 12px;
      padding: 0.5rem;
      margin-left: 1rem;
      width: 95%;
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

// ------------------------------------------------------------

//Background Icon

export const IconButton = styled.div`
  background-color: ${({ theme }) => theme.background_modal};
  width: 2.5em;
  height: 2.5em;
  border-radius: 100%;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

// ------------------------------------------------------------

// LoginModal e RegisterModal

export const ModalDiv = styled.div`
  background-color: ${({ theme }) => theme.background_modal};
  max-width: 50vw;
  min-height: 50vh;
  width: 100%;
  border-radius: 12px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Submit = styled.button`
  margin-bottom: 2rem;
  width: 8rem;
  border-radius: 12px;
  border: none;
  background-color: ${({ theme }) => theme.purple_variant};
  color: #e8f1f2;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.15rem;
  cursor: pointer;
  display: flex;
  align-self: center;
  justify-content: center;
  &:hover {
    color: #7d7d7d;
    background-color: #ffffff;
    transition: 0.5s ease;
  }
`;

// ------------------------------------------------------------
