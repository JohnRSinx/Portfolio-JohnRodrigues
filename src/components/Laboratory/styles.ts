import styled from "styled-components";

export const Container = styled.section`
max-width: 85%;
margin: 1rem auto;
background-color: var(--black200);
border-radius: 0.5rem;


h1 {
    padding: 1rem 3rem;
    font-size: 2.5rem;
    text-align: center;
}

`

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content:center;
    align-items: center;
    &&:last-child  {
    margin-right: 1rem;}

    .card {
        display: flex;
        flex-direction: column;
        width : 50%;
        align-items: center;
        flex : 1 1 200px;
        margin: 1rem 0 1rem 1rem;
        justify-content:center;

        img {
        max-width: 300px;
        height: 300px; 
        border-radius: 0.5rem;
        object-fit: cover;
        width: 100%;
        }

        h2 {
            display: inline-block;
            padding: 0.5rem 1rem;
            margin: 0.5rem;
            background-color: var(--black800);
            border-radius: 0.25rem;
        
            
        }
    
        p { 
            display: inline-block;
            border-radius: 0.5rem;
            margin: 0.25rem;
            text-align: center;
            padding: 0.5rem 1.25rem;
            
            background-color: var(--black800);
            transition: all 0.3s;
            &:hover { background-color:var(--black200)}
            @media (max-width:780px) {
                font-size:1rem;
            }
        }
            
            
        
    }
    
`