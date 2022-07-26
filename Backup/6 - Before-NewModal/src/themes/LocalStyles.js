import styled from "styled-components";

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

export const Input = styled.input`
  margin: 1rem 0;
  border: none;
  border-radius: 12px;
  padding: 0.7rem 1rem;
  font-size: 0.9em;
  background: ${({ theme }) => theme.view_background};
  color: ${({ theme }) => theme.view_text};
  &:focus-visible {
    outline: none;
  }
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
    color: #7D7D7D;
    background-color: #ffffff;
    transition: 0.5s ease;
  }
`;
