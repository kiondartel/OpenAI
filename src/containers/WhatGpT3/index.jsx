import React from "react";
import * as Styled from "./styles";
import Feature from "../../components/Feature/index";
function WhatGp3() {
  return (
    <Styled.Container>
      <Styled.Feature>
        <Feature
          title="O que é GPT-3"
          text="Generative Pre-Training Transformer 3 é um modelo de linguagem autorregressivo que usa aprendizagem profunda para produzir texto semelhante ao humano."
        />
      </Styled.Feature>
      <Styled.Heading>
        <h1>As possibilidades estão além da sua imaginação</h1>
        <p>Explore a biblioteca</p>
      </Styled.Heading>
      <Styled.ContainerGPT>
        <Feature
          title="ChatBots"
          text='O GPT-3 foi usado por Jason Rohrer em um projeto de chatbot com tema retrô chamado "Project December", que é acessível online e permite que os usuários conversem com vários IAs usando a tecnologia GPT-3'
        />
        <Feature
          title="Base de conhecimento"
          text="O GPT-3 é usado em certos produtos da Microsoft para traduzir linguagem convencional em código formal de computador."
        />
        <Feature
          title="Educação"
          text="O GPT-3, especificamente o modelo Codex, é a base do GitHub Copilot, um software de geração e conclusão de código que pode ser usado em vários editores de código e IDEs."
        />
      </Styled.ContainerGPT>
    </Styled.Container>
  );
}

export default WhatGp3;
