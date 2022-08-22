import styled from "styled-components";

export const FooterS = styled.footer`
    widht: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #ffffff;
    opacity: 0.9;
    padding: 1.5rem;
    border-radius: 12px 12px 0 0;
    margin-top: 4rem;

    h1{
        margin-bottom: 1rem;
        font-weight: 400;
    }

    p{
        text-align: center;
        margin-bottom: 1.5rem;
        font-size: 0.9rem;
        width: 80%;

        @media screen and (max-width: 800px){
            text-align: justify;
            text-indent: 1.5rem;
        }

        @media screen and (max-width: 700px){
            font-size: 0.8rem;
        }

        @media screen and (max-width: 500px){
            font-size: 0.7rem;
        }

    }

    a{
        text-decoration: none;
        color: #ffffff;
        margin-bottom: 1.5rem;
        font-weight: 400;

        img{
            border-radius: 12px;
        }
    }

    div{
        display: flex;
        align-self: center;
        justify-content: space-around;

        @media screen and (max-width: 400px) {
            flex-direction: column;
        }
        
        a.termos{
            text-align: center;
            padding: 0.1rem 0.5rem;
            margin-top: 1rem;
            margin-bottom: 0;
        }  
    }

    
    span{
        font-weight: 250;
        text-align: center;
        font-size: 0.9rem;
        @media screen and (max-width: 700px){
            font-size: 0.8rem;
        }
    }
`