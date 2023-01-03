import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;

  margin: 1rem;

  @media (max-width: 550px) {
    h1 {
      font-size: 14px;
      line-height: 22px;
    }

    p {
      font-size: 12px;
      line-height: 20px;
    }
  }
`;

export const Title = styled.div`
  flex: 1;
  max-width: 180px;
  margin-right: 2rem;

  h1 {
    font-weight: 800;
    font-size: 20px;
    letter-spacing: -0.04rem;
    color: #fff;
  }

  div {
    width: 38px;
    height: 3px;
    background: linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 0.25rem;
  }

  @media (max-width: 550px) {
    h1 {
      font-size: 14px;
      line-height: 22px;
    }
  }
`;

export const FeatureText = styled.div`
  flex: 2;
  max-width: 390px;
  display: flex;
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
  }

  @media (max-width: 550px) {
    margin: 1rem 0;
    p {
      font-size: 12px;
      line-height: 20px;
    }
  }
`;
