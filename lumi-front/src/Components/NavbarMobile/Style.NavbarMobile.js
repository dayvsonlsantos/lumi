import styled from "styled-components";

export const Container = styled.section`
  position: absolute;
  backdrop-filter: blur(3px);
  width 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(86,74,255);
  background: linear-gradient(90deg, rgba(86,74,255,0.7532387955182073) 11%, rgba(127,117,255,0.7616421568627451) 78%);
  transition: all 0.5s ease;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: ${({ theme }) => theme.textColor01};
    cursor: pointer;
  }
  
`;

export const MenuItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  width: 40%;
  > a{
    text-decoration: none;
    width: 100%;
  }
  @media(min-width: 1400px){
    width: 40rem;
  }
  @media(max-width: 800px){
    width: 60%;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.grayOp};
  width: 100%;
  padding: 1rem;
  border-radius: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.purpleOP};
  > span{
    margin-left: 1rem;
  }
`;
