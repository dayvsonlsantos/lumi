import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const LeftColumn = styled.aside`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MiddleColumn = styled.aside`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const RightColumn = styled.aside`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Row = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const Submit = styled.button`
  margin-bottom: 2rem;
  width: 8rem;
  border-radius: 12px;
  border: none;
  background-color: ${({ theme }) => theme.purpleOP};
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

export const ProfileInput = styled.input`
  border: none;
  border-radius: 12px;
  font-size: 0.8em;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.user_input};
  color: ${({ theme }) => theme.gray};
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

export const LabelToggle = styled.label`
  background-color: ${({ theme }) => theme.user_input};
  color: ${({ theme }) => theme.gray};
  transition: all 0.5s ease;
  margin-left: 0.8rem;
  border-radius: 12px;
  text-align: center;
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
