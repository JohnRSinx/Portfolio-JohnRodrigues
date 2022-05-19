import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background : #323232;
    --gray800: #494949;
    --gray500: #959595;
    --gray300: #DEDEDE;
    --black200: #414345;
    --black800: #292929;
    --gray900: #32332;
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
    font-family: 'Manrope', sans-serif;
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
