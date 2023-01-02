import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 6rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 990px) {
    flex-direction: column;
  }

  @media (max-width: 700px) {
    padding: 4rem;
  }

  @media (max-width: 550px) {
    padding: 4rem 2rem;
  }
`;

export const Heading = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  text-align: left;
  margin-right: 5rem;
  h1 {
    background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-size: 34px;
    line-height: 45px;
    font-weight: 800;
  }
  p {
    color: #ff8a71;
    font-size: 16px;
    line-height: 30px;
    font-style: normal;
    margin-top: 2rem;
  }

  @media (max-width: 990px) {
    margin: 0 0 2rem 0;
  }

  @media (max-width: 550px) {
    h1 {
      font-size: 28px;
      line-height: 38px;
    }
  }
`;

export const FeaturesContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
