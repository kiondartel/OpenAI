import React from "react";
import * as Styled from "./styles";

function Cta() {
  return (
    <Styled.Container>
      <Styled.Content>
        <p>Solicite acesso antencipado para começar</p>
        <h3>Registre hoje e comece a explorar infinitas possibilidades</h3>
      </Styled.Content>
      <Styled.Btn>
        <button type="button">Vamos começar</button>
      </Styled.Btn>
    </Styled.Container>
  );
}

export default Cta;
