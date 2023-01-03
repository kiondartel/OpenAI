import React from "react";
import * as Styled from "./styles";
import Article from "../../components/Article";

function Blog() {
  return (
    <Styled.Container>
      <Styled.Heading>
        <h1>
          Muita coisa está acontecendo, <br />
          estamos falando sobre isso.
        </h1>
      </Styled.Heading>
      <Styled.BlogContainer>
        <Styled.GroupA>
          <Article />
        </Styled.GroupA>
        <Styled.GroupB>
          <Article />
          <Article />
          <Article />
          <Article />
        </Styled.GroupB>
      </Styled.BlogContainer>
    </Styled.Container>
  );
}

export default Blog;
