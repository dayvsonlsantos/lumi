import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Card = styled.div`
  margin: 2rem;
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  text-align: justify;
  flex-direction: column;
  background-color: #ffffff;
  color: #000000;

  h1 {
    font-size: 2.4rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  h2 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
  h3 {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
  h4 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    margin-left: 1.2rem;
  }
  h5 {
    font-size: 1.1rem;
    margin: 1.5rem;
  }
  p {
    font-size: 1rem;
    text-indent: 1.2rem;
    margin-bottom: 1.4rem;
  }
  li {
    margin-left: 2rem;
  }
`;
