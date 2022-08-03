import styled from "styled-components";

export const InputToggle = styled.input`
  background: ${({ theme }) => theme.purpleVariant};
  width: 3rem;
  height: 1.5rem;
  appearance: none;
  border-radius: 50px;
  box-shadow: inset 0px 0px 16px 1px rgba(0, 0, 0, 0.24);
  cursor: pointer;

  position: relative;
  
  &:before {
    background: ${({ theme }) => theme.grayOp};
    content: '';
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50px;
    position: absolute;
    box-shadow: 0px 4px 8px 1px rgba(0, 0, 0, 0.24);
    transform: scale(1.1);
    top: 0;
    left: 0;
    transition: .5s ease;
  }

  &:checked {
    background: #7f75ff;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.17);
  }

  &:checked:before{
    left: 1.5rem;
    transition: 0.5s ease;
  }
`;
