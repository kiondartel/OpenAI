import styled from "styled-components";

export const Container = styled.div`
  margin: 4rem 6rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: #031b34;
  filter: drop-shadow(0px 4px 4px);

  @media (max-width: 700px) {
    margin: 4rem;
  }

  @media (max-width: 550px) {
    margin: 4rem 2rem;
  }
`;

export const Feature = styled.div`
  display: flex;
  margin: 0;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 4rem 0 2rem;
  h1 {
    background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 34px;
    font-weight: 800;
    line-height: 45px;
    max-width: 510px;
  }
  p {
    font-family: "Monrope", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: #ff8471;
  }
`;

export const ContainerGPT = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 2rem;
`;
