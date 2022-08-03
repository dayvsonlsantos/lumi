import styled from "styled-components";

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: $backDrop;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
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

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    @media screen and (max-height: 800px) {
      overflow-y: scroll;
      overflow-x: hidden;
      padding: 1rem;
    }
  }

  @media screen and (min-width: 900px) {
    width: 450px;
  }

  @media only screen and (max-width: 550px) {
    min-width: 80%;
    label {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.65rem;
    }
  }

  @media only screen and (min-width: 551px) and (max-width: 700px) {
    min-width: 60%;
    label {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.65rem;
    }
  }
`;

export const FormTop = styled.div`
  display: flex;
  margin-bottom: 1rem;
  position: relative;

  h1 {
    font-size: 1.8rem;
    margin: auto;
    color: #ffffff;
    font-weight: 500;
    
    @media only screen and (min-width: 551px) and (max-width: 700px) {
        font-size: 1.4rem;
    }
    @media only screen and (max-width: 900px) {
        font-size: 1.6rem;
    }
    @media only screen and (max-width: 500px) {
        font-size: 1.2rem;
    }
    @media only screen and (max-width: 350px) {
        font-size: 1rem;
        text-align: center;
    }
  }
`;

export const CloseButton = styled.div`
  left: 90%;
  position: absolute;
  display: flex;
  align-self: center;
  border: none;
  cursor: pointer;
  background: none;
  > svg {
    color: #ffffff;
    font-size: 1.5rem;
  }
`;

export const Submit = styled.button`
  margin-top: 1rem;
  margin-bottom: 1rem;
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
  @media only screen and (min-width: 550px) and (max-width: 800px) {
    width: 7rem;
    padding: 0.5rem 3rem;
    font-size: 0.7rem;
  }
  @media only screen and (max-width: 550px) {
    width: 5rem;
    padding: 0.5rem 3rem;
    font-size: 0.65rem;
  }
`;

export const InputGroup = styled.div`
  > label {
    color: #ffffff;
  }
  > input {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 1rem 0;
    width: 100%;
    border: none;
    border-radius: 12px;
    padding: 0.7rem 1rem;
    font-size: 0.9em;
    :focus-visible {
      outline: none;
    }
    :invalid[focused="true"] ~ span {
      display: block;
    }
    @media screen and (min-width: 550px) and (max-width: 800px) {
      padding: 0.4rem 0.5rem;
      margin: 0.6rem 0;
    }
    @media only screen and (max-width: 550px) {
      padding: 0.4rem 0.5rem;
      margin: 0.6rem 0;
    }
  }
  > span {
    font-size: 0.8rem;
    background-color: #7f75ff;
    border-radius: 12px;
    padding: 0.5rem;
    color: white;
    margin-bottom: 0.5rem;
    text-align: justify;
    display: none;

    @media screen and (max-width: 550px) {
      font-size: 0.65rem;
    }
    @media screen and (max-height: 800px) {
      font-size: 0.65rem;
    }
  }
`;
