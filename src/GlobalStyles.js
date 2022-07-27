import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    body{
        background-color: ${(props) => props.theme.body};
        transition: all .5s ease;
    }
    h1{
        color: ${({ theme }) => theme.fontColor};
        transition: all .5s ease;
    }
    
`;
