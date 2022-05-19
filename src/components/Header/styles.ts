import styled from "styled-components";

export const Container = styled.header`
  height: 5rem;
  width: 85%;
  margin: 1rem auto;
  background-color: var(--black200);
  border-radius: 0.5rem;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 920px) {
      justify-content: center;
    }
  }

  p {
    font-size: 1.5rem;
    height: auto;
    padding: 1rem;
    display: flex;
    align-items: center;
  }
  nav {
    padding-right: 3rem;
    height: auto;

    @media (max-width: 920px) {
      display: none;
    }
  }

  ul {
    list-style: none;
    display: flex;
  }
  li {
    margin-left: 1rem;
  }
  a {
    font-size: 1.25rem;
    font-weight: bold;
    height: auto;
    padding: 0.75rem 1.25rem;
    background-color: var(--black800);
    transition: all 0.3s;
    &:hover {
      background-color: var(--black200);
    }
    border-radius: 0.5rem;

  }
`;
