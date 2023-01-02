import React from "react";
import Feature from "../../components/Feature/index";
import * as Styled from "./styles";

const featuresData = [
  {
    title: "Improving end distrusts instantly.",
    text: " Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações.",
  },
  {
    title: "Become the tended active",
    text: "Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações.",
  },
  {
    title: "Message or am nothing",
    text: "Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações.",
  },
  {
    title: "Really boy law county",
    text: "Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações.",
  },
];

function Features() {
  return (
    <Styled.Container>
      <Styled.Heading>
        <h1>
          O Futuro é Agora e Você Só Precisa Concretizá-lo. Entre no futuro
          hoje. Faça acontecer.
        </h1>
        <p>Solicite acesso antecipado para começar</p>
      </Styled.Heading>
      <Styled.FeaturesContainer>
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </Styled.FeaturesContainer>
    </Styled.Container>
  );
}

export default Features;
