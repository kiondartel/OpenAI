import * as Styled from "./styles";

import Article from "../components/Article/index";
import Brand from "../components/Brand/index";
import Cta from "../components/Cta/index";
import Feature from "../components/Feature/index";
import Navbar from "../components/Navbar/index";
import {
  Blog,
  Features,
  Footer,
  Possibility,
  WhatGp3,
  Header,
} from "../containers/index";

function App() {
  return (
    <Styled.Container>
      <Article />
      <Cta />
      <Navbar />
      <Feature />
      <Brand />
    </Styled.Container>
  );
}

export default App;
