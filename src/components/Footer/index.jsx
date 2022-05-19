import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "phosphor-react";
import { Container } from "./styles";

export function Footer() {
  return (
    <Container id="contact">
      <div>
        <a href="https://www.instagram.com/johnrodrigues._/">
          <InstagramLogo size={60} color="#DEDEDE" weight="fill" />
        </a>
        
        <a href="https://www.linkedin.com/in/john-r-89643b127/">
          <LinkedinLogo size={60} color="#DEDEDE" weight="fill" />
        </a>
        <a href="https://github.com/JohnRSinx">
          <GithubLogo size={60} color="#DEDEDE" weight="fill" />
        </a>
        <a href="https://twitter.com/JohnSinx4">
          <TwitterLogo size={60} color="#DEDEDE" weight="fill" />
        </a>
      </div>
    </Container>
  );
}
