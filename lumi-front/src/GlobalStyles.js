import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    body{
        background-color: ${(props) => props.theme.body};
        transition: all .5s ease;
    }

    footer{
        background-color: ${({ theme }) => theme.purpleOP};
        transition: all 0.5s ease;
    }
    
`;
