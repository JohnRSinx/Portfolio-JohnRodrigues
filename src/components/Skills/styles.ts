import styled from "styled-components";

export const Container = styled.section `
max-width: 85%;
margin: 0.5rem auto;
background-color: var(--black200);
border-radius: 0.5rem;
align-items: center;


h1 { 
    padding: 1rem 3rem;
    font-size: 2.5rem;
    text-align: center;
}

`
export const Content = styled.div  `
display: flex;
flex-wrap: wrap;
text-align: center;

&&:last-child  {
    margin-right: 2rem;
}

div {
    
    width: 45%;
    align-items: center;
    flex : 1 1 200px;
    border: 3px solid #494949;
    margin-left: 2rem;
    margin-bottom: 2rem;

    
}

p {
    padding: 1rem;
}
`
