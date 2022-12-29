import React from "react";
import * as Styled from "./styles";
import { google, slack, atlassian, dropbox, shopify } from "./imports";

function Brand() {
  return (
    <Styled.Container>
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </Styled.Container>
  );
}

export default Brand;
