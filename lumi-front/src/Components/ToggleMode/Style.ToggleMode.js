import styled from "styled-components";

export const DarkMode = styled.div`
  display: flex;
  width: 5%;
  align-items: center;
  justify-content: center;
  background: none;
  cursor: pointer;
  @media (max-width: 1200px) {
    display: none;
  }
  > svg{
    color: ${({ theme }) => theme.purpleOP};
    font-size: 2rem;
  }
`;

export const DarkModeMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  cursor: pointer;
  width: 100%;
  height: 100%;

  > div{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    > span{
      margin-left: 1rem;
    }
    > svg{
      color: ${({ theme }) => theme.purpleOP};
      font-size: 2rem;
    }
  }
  
`;