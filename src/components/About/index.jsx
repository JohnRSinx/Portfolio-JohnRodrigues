import { Container } from "./styles";
import myProfile_img from "../../assets/img/curriculo.jpg";

export function About() {
  return (
    <Container id="about">
      <div>
        <h1>John Rodrigues </h1>
        <h2>Front-End Developer</h2>
        <p>
          Olá me chamo John , tenho 24 anos e entrei no mundo da  programação no final de 2021,quando um amigo me apresentou um curso, desde  então venho estudando e me aperfeiçoando.Meu foco hoje é o conhecimento pois me apaixonei pela área e não existe outra profissão que eu queira seguir.
        </p>
      </div>
      <img src={myProfile_img} alt="foto-minha" />
    </Container>
  );
}
