import { Container, Content } from "./styles";
import nlw_img from "../../assets/img/nlw.jpg";
import dtmoney_img from "../../assets/img/dtmoney.png";
import glass_img from "../../assets/img/glass.png";

export function Laboratory() {
  return (
    <Container id="laboratory">
      <h1>Laboratório</h1>
    
     
      <Content>
        <div className="card">
          <h2>BootCamp Nlw</h2>
          <img src={nlw_img} alt="imagem do widget feito no bootcamp" />
          <a href="https://github.com/JohnRSinx/NlwReturnImpulse">
            <p>Ver Projeto </p>
          </a>
        </div>
        <div className="card">
          <h2>Dt Money</h2>
          <img src={dtmoney_img} alt="pagina inicial do app dtmoney" />
          <a href="https://github.com/JohnRSinx/Dt-Money-">
            <p>Ver Projeto</p>
          </a>
        </div>
        <div className="card">
          <h2>Clone GoogleGlass</h2>
          <img src={glass_img} alt="home do clone do googleglass" />
          <a href="https://github.com/JohnRSinx/GoogleGlass">
            <p>Ver Projeto</p>
          </a>
        </div>
        
        
      </Content>
    </Container>
  );
}
