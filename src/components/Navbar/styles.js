import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6rem;
  p {
    color: #ffffff;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    text-transform: capitalize;

    margin: 0 1rem;
    cursor: pointer;
  }
  button {
    padding: 0.5rem 1rem;
    color: #fff;
    background: #ff4820;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    border-radius: 5px;
    border: 0;
    outline: none;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    padding: 2rem 4rem;
  }

  @media (max-width: 550px) {
    padding: 2rem;
  }
`;

export const Logo = styled.div`
  margin-right: 2rem;

  img {
    width: 62px;
    height: 16px;
  }
`;

export const Links = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1050px) {
    display: none;
  }
`;

export const Sign = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 550px) {
    display: none;
  }
`;

export const Menu = styled.div`
  margin-left: 1rem;
  display: none;
  position: relative;

  svg {
    cursor: pointer;
  }

  @media (max-width: 1050px) {
    display: flex;
  }

  @media (max-width: 550px) {
    top: 20px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  text-align: end;
  background: #031b34;
  padding: 2rem;
  position: absolute;
  top: 40px;
  right: 0;
  margin-top: 1rem;
  min-width: 210px;
  border-radius: 5px;
  box-shadow: 0 0 5 rgba(0, 0, 0, 0.2);

  p {
    margin: 1rem 0;
  }
`;

export const MenuLinks = styled.div``;

export const SignLinks = styled.div`
  display: none;

  @media (max-width: 550px) {
    display: block;
  }
`;
