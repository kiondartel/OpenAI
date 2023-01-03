import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #031b34;

  @media (max-width: 550px) {
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #031b34;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  height: 100%;
  p {
    font-size: 11px;
    line-height: 35px;
    color: #fff;
    font-weight: bold;
  }

  h3 {
    font-size: 25px;
    line-height: 30px;
    color: #fff;
    font-weight: 800;
    margin-bottom: 5rem;
    cursor: pointer;
  }
  p:last-child {
    cursor: pointer;
  }

  @media (max-width: 550px) {
    h3 {
      font-size: 18px;
      line-height: 25px;
    }
  }
`;
