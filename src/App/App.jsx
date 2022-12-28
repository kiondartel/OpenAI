import * as Styled from "./styles";
import Global from "../styles/globalstyles";
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
      <Styled.Gradient>
        <Navbar />
        <Header />
      </Styled.Gradient>
      <Brand />
      <WhatGp3 />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
      <Global />
    </Styled.Container>
  );
}

export default App;
