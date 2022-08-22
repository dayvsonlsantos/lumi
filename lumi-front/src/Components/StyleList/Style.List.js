import styled from "styled-components";

export const Select = styled.select`
  border: none;
  width: 100%;
  font-size: 1rem;
  padding: 0.7rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.user_input};
  color: ${({ theme }) => theme.gray};
  transition: 0.5s ease;
  text-align: center;
  :focus-visible {
    outline: none;
  }
  cursor: pointer;
  pointer-events: ${(props) => props.editData};
`;
