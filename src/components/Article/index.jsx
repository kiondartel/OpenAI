import React from "react";
import * as Styled from "./styles";

function Article({ imgUrl, date, title }) {
  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <img src={imgUrl} />
      </Styled.ImageContainer>
      <Styled.Content>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Confira todo Artigo</p>
      </Styled.Content>
    </Styled.Container>
  );
}

export default Article;
