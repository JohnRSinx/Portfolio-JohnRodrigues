
import { AppWindow } from "phosphor-react";
import { Container } from "./styles";


export function Header() {
  
    return (
      <Container>
        <div>
          <p>
            <AppWindow size="3rem" weight="fill" />
            John Rodrigues 
          </p>
          <nav>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#laboratory">Laboratory</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    );
  }

  
  
