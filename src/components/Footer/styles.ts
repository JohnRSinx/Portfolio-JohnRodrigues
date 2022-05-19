import styled from "styled-components";

export const Container = styled.footer`
  max-width: 85%;
  margin: 0.5rem auto;
  background-color: var(--black200);
  border-radius: 0.5rem;

  div {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin: 1rem;
    flex-wrap: wrap;
  }
  a {
    display: flex;
    justify-content: center;
    margin: 0.5rem;
    padding: 0.5rem;
    background-color: var(--black800);
    transition: all 0.3s;
    &:hover {
      background-color: var(--black200);
    }
    border-radius: 0.5rem;
  }
`;
