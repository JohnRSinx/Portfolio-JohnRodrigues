import { Atom, FileCss, FileHtml, FileJs } from "phosphor-react";
import { Container, Content } from "./styles";

export function Skills() {
  const color_gray = "var(--gray300)";
  return (
    <Container id="skills">
      <h1>Habilidades</h1>
      <Content>
        <div>
          <FileHtml size={150} color={color_gray} weight="fill" />
          <p>
            Linguagem de Marcação de HiperTexto é o bloco de construção mais
            básico da web. Define o significado e a estrutura do conteúdo da
            web.{" "}
          </p>
        </div>
        <div>
          <FileCss size={150} color={color_gray} weight="fill" />
          <p>
            Cascading Style Sheets ou Folhas de Estilo em Cascata é uma
            linguagem de estilo (en-US) usada para descrever a apresentação de
            um documento escrito em HTML ou em XML.
          </p>
        </div>
        <div>
          <FileJs size={150} color={color_gray} weight="fill" />
          <p>
            É uma linguagem leve, interpretada e baseada em objetos com funções
            de primeira classe, mais conhecida como a linguagem de script para
            páginas Web.
          </p>
        </div>
        <div>
          <Atom size={150} color={color_gray} weight="fill" />
          <p>
            É uma biblioteca para construção de interfaces de usuário. React não
            é um framework – nem mesmo é exclusivo para web. É utilizado com
            outras bibliotecas para renderização em certos ambientes.
          </p>
        </div>
      </Content>
    </Container>
  );
}
