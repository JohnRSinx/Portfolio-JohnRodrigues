import styled from "styled-components"

export const Container = styled.main ` 
height: auto;
display : flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;

width: 85%;
margin: 1rem auto;
background-color: var(--blue);
border-radius: 0.5rem
;

div {
    width: 40%;
    padding: 3rem;
    @media (max-width:750px){
        width: 100%;
    }
    
}

h1 { 
    font-size: 4rem;
    @media (max-width:1000px){
        font-size:2rem;
    }
}
h2  {
    font-size: 1.5rem;
}
p { 
    padding-top: 2rem;
    font-size: 18px;
    
}

img{
    padding: 2rem;
    border-radius: 10rem;
    max-height: 480px;
    max-width: 100%;
    @media (max-width:100%) {
        display: block;
    }
   }
`;


