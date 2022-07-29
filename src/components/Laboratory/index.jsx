import { Container, Content } from "./styles";
import nlw_img from "../../assets/img/nlw.jpg";
import dtmoney_img from "../../assets/img/dtmoney.png";
import stc_img from "../../assets/img/home-cards-TC.png";

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
          <h2>Crud</h2>
          <img src={stc_img} alt="home do clone do googleglass" />
          <a href="https://github.com/JohnRSinx/StudioThalitaCouto">
            <p>Ver Projeto</p>
          </a>
        </div>
        
        
      </Content>
    </Container>
  );
}
