import styled, {keyframes} from "styled-components";

const rodar = keyframes`
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
`
export const LoadingContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: none;
`

export const Loading = styled.div`
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    border: 8px solid ${({ theme }) => theme.body};
    border-left: 8px solid ${({ theme }) => theme.purpleOP};

    animation-name: ${rodar};
    animation-duration: 1s;
    animation-iteration-count: infinite;
`