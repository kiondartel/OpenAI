import React from "react";
import * as Styled from "./styles";
import possibilityImage from "../../assets/possibility.png";
function Possibility() {
  return (
    <Styled.Container>
      <Styled.Image>
        <img src={possibilityImage} alt="possibility" />
      </Styled.Image>
      <Styled.PossibilityContent>
        <h4>Solicite acesso antencipado para começar</h4>
        <h1>
          As possibilidades são <br /> alem da sua imaginação
        </h1>
        <p>
          Lorem ipsum em design gráfico e editoração é um texto padrão em latim
          utilizado na produção gráfica para preencher os espaços de texto em
          publicações.
        </p>
        <h4>Solicite acesso antencipado para começar</h4>
      </Styled.PossibilityContent>
    </Styled.Container>
  );
}

export default Possibility;
