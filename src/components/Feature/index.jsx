import React from "react";
import * as Styled from "./styles";

function Feature({ title, text }) {
  return (
    <Styled.Container>
      <Styled.Title>
        <div />
        <h1>{title}</h1>
      </Styled.Title>
      <Styled.FeatureText>
        <p>{text}</p>
      </Styled.FeatureText>
    </Styled.Container>
  );
}

export default Feature;
