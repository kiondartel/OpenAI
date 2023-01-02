import React from "react";
import * as Styled from "./styles";
import Feature from "../../components/Feature/index";
function WhatGp3() {
  return (
    <Styled.Container>
      <Styled.Feature>
        <Feature />
      </Styled.Feature>
      <Styled.Heading>
        <h1>As possibilidades estão além da sua imaginação</h1>
        <p>Explore a biblioteca</p>
      </Styled.Heading>
      <Styled.ContainerGPT>
        <Feature />
        <Feature />
        <Feature />
      </Styled.ContainerGPT>
    </Styled.Container>
  );
}

export default WhatGp3;
