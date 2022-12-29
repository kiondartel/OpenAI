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
`;

export const Sign = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

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
`;

export const Menu = styled.div``;
