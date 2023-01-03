import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid white;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 2rem;
  margin: 4rem;
  border-radius: 1rem;
  background: linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%);

  @media (max-width: 650px) {
    flex-direction: column;
  }

  @media (max-width: 550px) {
    margin: 4rem 2rem;
  }
`;

export const Content = styled.div`
  p {
    font-size: 12px;
    font-weight: 500;
    line-height: 30px;
    color: #000;
  }

  h3 {
    font-size: 24px;
    line-height: 45px;
    color: #000;
  }

  @media (max-width: 550px) {
    h3 {
      line-height: 32px;
      font-size: 18px;
    }
  }
`;

export const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  button {
    background: #000;
    color: #fff;
    border-radius: 40px;
    font-weight: bold;
    font-size: 18px;
    line-height: 30px;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    cursor: pointer;
  }

  @media (max-width: 650px) {
    margin: 2rem 0 0;
  }

  @media (max-width: 550px) {
    button {
      line-height: 28px;
      font-size: 14px;
    }
  }
`;
