import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    body{
        background-color: ${(props) => props.theme.body};
        transition: all .5s ease;
    }
    
`;
