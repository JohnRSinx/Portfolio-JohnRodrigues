import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background : #010101;
    --gray300: #eaebed;
    --blue: #0D1A2D;
    --black800:#121214;
}

* {
    margin : 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    @media (max-width:1080px){
        font-size: 93.75%;
    }
    @media (max-width:720px){
        font-size: 87.5%;
    }
    scroll-behavior: smooth;
}
body  {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    
    
}
body , input , textarea ,button {
    font-family: 'Baloo 2', cursive;
    font-weight: 400;
}
p , a , img { 
    color: var(--gray300);
    text-decoration: none;
}
h1  , h2 , h3 , h4 , strong , p {
    font-weight: 700;
    color: var(--gray300)
   
}

button, a{
    cursor: pointer;
}
[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}
`;
