
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
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#skills">Habilidades</a>
              </li>
              <li>
                <a href="#laboratory">Laboratório</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    );
  }

  
  
