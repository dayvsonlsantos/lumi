import styled from "styled-components";

export const Decribe = styled.section`
  label {
    color: ${({ theme }) => theme.gray};
    font-size: 1.1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  textarea {
    border: none;
    font-size: 1rem;
    border-radius: 12px;
    width: 100%;
    height: 7rem;
    background: ${({ theme }) => theme.user_input};
    color: ${({ theme }) => theme.gray};
    padding: 0.8rem;
    pointer-events: ${(props) => props.editData};
    :focus-visible {
      outline: none;
    }
    text-indent: 1.5rem;
  }

  div {
    color: ${({ theme }) => theme.gray};
    font-size: 0.9rem;
    text-align: center;
    margin-bottom: 1rem;
  }
`;
