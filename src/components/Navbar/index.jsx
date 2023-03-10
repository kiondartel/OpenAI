import React, { useState } from "react";
import * as Styled from "./styles";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

function Navbar() {
  const [toogleMenu, setToggleMenu] = useState(false);

  return (
    <Styled.Container>
      <Styled.Links>
        <Styled.Logo>
          <img src={logo} alt="logo" />
        </Styled.Logo>
        <Styled.LinksContainer>
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">Whats is GPT3</a>
          </p>
          <p>
            <a href="#possibility">Open Ai</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </Styled.LinksContainer>
      </Styled.Links>
      <Styled.Sign>
        <p>Sing in</p>
        <button type="button">Sign up</button>
      </Styled.Sign>
      <Styled.Menu>
        {toogleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toogleMenu && (
          <Styled.MenuContainer>
            <Styled.MenuLinks>
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">Whats is GPT3</a>
              </p>
              <p>
                <a href="#possibility">Open Ai</a>
              </p>
              <p>
                <a href="#features">Case Studies</a>
              </p>
              <p>
                <a href="#blog">Library</a>
              </p>
              <Styled.SignLinks>
                <p>Sing in</p>
                <button type="button">Sign up</button>
              </Styled.SignLinks>
            </Styled.MenuLinks>
          </Styled.MenuContainer>
        )}
      </Styled.Menu>
    </Styled.Container>
  );
}

export default Navbar;
