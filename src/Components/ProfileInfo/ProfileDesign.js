import styled from "styled-components";

export const ProfileBG = styled.div`
  margin-top: 2rem;
  width: 10rem;
  height: 10rem;
  background: ${({ theme }) => theme.view_background};
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
  background: ${({ theme }) => theme.view_background};
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

export const ProfileInput = styled.input`
  border: none;
  border-radius: 12px;
  font-size: 0.8em;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.user_input};
  color: ${({ theme }) => theme.user_input_value};
  transition: all 0.5s ease;
  &:focus-visible {
    outline: none;
  }
  text-align: center;
`;

export const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.fontColor};
  transition: all 0.5s ease;
`;

export const Span = styled.span`
  font-size: 0.6rem;
  color: ${({ theme }) => theme.purpleOP};
  margin-left: 0.8rem;
  transition: all 0.5s ease;
`;

export const UserDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LabelToggle = styled.label`
  background-color: ${({ theme }) => theme.user_input};
  color: ${({ theme }) => theme.user_input_value};
  transition: all 0.5s ease;
  margin-left: 0.8rem;
  border-radius: 12px;
  text-align: center;
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const RadioButton = styled.input`
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  background-color: ${({ theme }) => theme.user_input};
  margin: 0em;
  font: inherit;
  color: ${({ theme }) => theme.purpleOP};
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid ${({ theme }) => theme.purpleOP};
  border-radius: 50%;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em ${({ theme }) => theme.purpleOP};
  }

  &:checked::before {
    transform: scale(1);
  }
`;

export const H2 = styled.h2`
  font-size: 0.9em;
  font-weight: 400;
  color: ${({ theme }) => theme.user_input_value};
`;
