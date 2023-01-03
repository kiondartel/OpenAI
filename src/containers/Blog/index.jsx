import React from "react";
import * as Styled from "./styles";
import Article from "../../components/Article/index";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
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
          <Article
            imgUrl={blog01}
            date="Jan 3, 2023"
            title="GPT-3 e Open AI são o futuro. Vamos explorar como é?"
          />
        </Styled.GroupA>
        <Styled.GroupB>
          <Article
            imgUrl={blog02}
            date="Jan 3, 2023"
            title="GPT-3 e Open AI são o futuro. Vamos explorar como é?"
          />
          <Article
            imgUrl={blog03}
            date="Jan 3, 2023"
            title="GPT-3 e Open AI são o futuro. Vamos explorar como é?"
          />
          <Article
            imgUrl={blog04}
            date="Jan 3, 2023"
            title="GPT-3 e Open AI são o futuro. Vamos explorar como é?"
          />
          <Article
            imgUrl={blog05}
            date="Jan 3, 2023"
            title="GPT-3 e Open AI são o futuro. Vamos explorar como é?"
          />
        </Styled.GroupB>
      </Styled.BlogContainer>
    </Styled.Container>
  );
}

export default Blog;
