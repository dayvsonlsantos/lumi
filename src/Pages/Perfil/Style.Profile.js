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
  width: 10rem;
  height: 10rem;
  background: ${({ theme }) => theme.grayOp};
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.135);
`;

export const ProfileSectionBG = styled.div`
  width: 80rem;
  height: 30rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
  background: ${({ theme }) => theme.grayOp};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  transition: all 0.5s ease;
  box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.135);
  @media (max-width: 1600px) and (min-width: 1161px) {
    width: 60rem;
    height: 20rem;
  }
  @media (max-width: 1160px) and (min-width: 951px) {
    width: 50rem;
    height: 20rem;
  }
  @media (max-width: 950px) and (min-width: 751px) {
    width: 40rem;
    height: 20rem;
  }
  @media (max-width: 750px) and (min-width: 551px) {
    width: 30rem;
    height: 20rem;
  }
  @media (max-width: 550px) {
    width: 20rem;
    height: 40rem;
  }
`;
