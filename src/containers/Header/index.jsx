import React from "react";
import * as Styled from "./styles";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
function Header() {
  return (
    <Styled.Container>
      <Styled.Content>
        <h1>Vamos construir juntos algo incrivel com OpenAi GPT-3</h1>
        <p>
          Inteligência Artificial é a inteligência demonstrada por máquinas ao
          executar tarefas complexas associadas a seres inteligentes, além de
          também ser um campo de estudo acadêmico, no qual o principal objetivo
          é de executar funções de modo autônomo.
        </p>
        <Styled.Input>
          <input type="emil" placeholder="Endereço Email" />
          <button type="button">Enviar</button>
        </Styled.Input>
        <Styled.People>
          <img src={people} alt="people" />
          <p>Mais de 1600 solicitaram acesso nas ultimas 24 horas</p>
        </Styled.People>
      </Styled.Content>
      <Styled.AiContainer>
        <img src={ai} />
      </Styled.AiContainer>
    </Styled.Container>
  );
}

export default Header;
