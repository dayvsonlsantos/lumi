import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProfileBG = styled.div`
  margin-top: 2rem;
  width: 15rem;
  height: 15rem;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  box-shadow: ${({ theme }) => theme.shadow};
  img{
    width: 100%;
  }
`;

export const Deletebtn = styled.button`
  color: red;
  font-size: 1.15rem;
  font-weight: 400;
  cursor: pointer;
  margin-top: 2.5rem;
  padding: 1rem 1.5rem;
  display: flex;
  align-self: center;
  justify-content: center;
  border-radius: 12px;
  border: none;
  transition: all 0.5s ease;
  background: ${({ theme }) => theme.grayOp};
  box-shadow: ${({ theme }) => theme.shadow};
  &:hover{
    background: red;
    color: white;
    transition: all 0.5s ease;
  }
`