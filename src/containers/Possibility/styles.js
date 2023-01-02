import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 6rem;
  display: flex;
  flex-direction: row;

  @media (max-width: 950px) {
    flex-direction: column;
  }

  @media (max-width: 700px) {
    padding: 4rem;
  }

  @media (max-width: 550px) {
    padding: 4rem 2rem;
  }
`;

export const Image = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-right: 2rem;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 950px) {
    margin: 1rem 0;
  }
`;

export const PossibilityContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  h1 {
    background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 34px;
    line-height: 45px;
    font-weight: 800;
    margin: 1rem 0;
  }

  h4 {
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: #71e5ff;
  }

  h4:last-child {
    color: #ff8a71;
  }

  p {
    font-size: 16px;
    line-height: 30px;
    color: #81afdd;
    margin-bottom: 2rem;
  }

  @media (max-width: 950px) {
    margin-top: 2rem;
  }
`;
