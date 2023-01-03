import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 6rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    padding: 4rem;
  }

  @media (max-width: 550px) {
    padding: 4rem 2rem;
  }
`;

export const Heading = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 5rem;

  h1 {
    background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 62px;
    line-height: 75px;
    letter-spacing: -0.04rem;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 46px;
      line-height: 52px;
    }
  }

  @media (max-width: 550px) {
    h1 {
      font-size: 34px;
      line-height: 42px;
    }
  }
`;

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 990px) {
    flex-direction: column-reverse;
  }
`;

export const GroupA = styled.div`
  flex: 0.75;
  margin-right: 2rem;

  @media (max-width: 990px) {
    margin: 2rem 0;

    img {
      height: 250px;
    }
  }
`;
export const GroupB = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
