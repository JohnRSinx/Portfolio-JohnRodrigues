import { Container } from "./styles";
import myProfile_img from "../../assets/img/curriculo2.jpg";

export function About() {
  return (
    <Container id="about">
      <div>
        <h1>John Rodrigues </h1>
        <h2>Front-End Developer</h2>
        <p>
        Olá, meu nome é John Rodrigues e sou Front end Developer. Com 1 anos e 
        6 meses  de experiência em html , css , javascript , typescript e 
        reactjs, tenho paixão por desafios, resolução de problemas, fazer a
        diferença, etc. <br />Meu objetivo é Desenvolvedor Front End , e para isso, 
        tenho desenvolvido habilidades em Reactjs e Typescript. Sou capaz de 
        colaborar e trabalhar em conjunto com colegas de trabalho para atingir 
        objetivos comuns , o que me permite entregar resultados de qualidade e 
        atender às expectativas dos meus clientes e colegas de trabalho. <br />Além 
        disso, tenho forte interesse em Nextjs e  Inteligencia artificial. Estou 
        sempre buscando me atualizar e aprender novas habilidades para me manter
        em constante evolução profissional.<br />Se você está em busca de um 
        profissional comprometido, proativo e com habilidades em Desenvolvedor 
        Fron End, entre em contato comigo para discutirmos possíveis 
        oportunidades de colaboração. <br /> Obrigado pela visita ao meu perfil!
        </p>
      </div>
      <img src={myProfile_img} alt="foto-minha" />
    </Container>
  );
}
