import styled from "styled-components";

export const ErroPage = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1{
        font-size: 10rem;
        text-align: center;
        color: ${({ theme }) => theme.purpleOP};
        transition: 0.5s ease;
    }
    p{
        text-align: center;
        color: ${({ theme }) => theme.gray};
        font-size: 1.2rem;
    }

    @media only screen and (min-width: 650px) and (max-width: 850px) {
        p{
            font-size: 0.9rem;
        }
        h1{
            font-size: 9rem;
        }
    }
    @media only screen and (max-width: 649px) {
        p{
            font-size: 0.7rem;
        }
        h1{
            font-size: 6rem;
        }
    }

    a{
        text-decoration: none;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        width: 9rem;
        border-radius: 12px;
        border: none;
        background-color: ${({ theme }) => theme.purpleOP};
        transition: 0.5s ease;
        color: #e8f1f2;
        padding: 1rem;
        text-transform: uppercase;
        font-weight: 500;
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
        @media only screen and (min-width: 551px) and (max-width: 800px) {
            width: 7rem;
            padding: 0.5rem 3rem;
            font-size: 0.7rem;
        }
        @media only screen and (max-width: 550px) {
            width: 5rem;
            padding: 0.5rem 3rem;
            font-size: 0.65rem;
        }   
    }
`