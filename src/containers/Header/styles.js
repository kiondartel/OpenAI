import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 6rem;
  display: flex;
  flex-direction: row;
  h1 {
    background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 1050px) {
    flex-direction: column;
  }

  @media (max-width: 650px) {
    h1 {
      font-size: 48px;
      line-height: 60px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (max-width: 490px) {
    h1 {
      font-size: 36px;
      line-height: 48px;
    }

    p {
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 5rem;

  h1 {
    font-weight: 800;
    font-size: 62px;
    line-height: 75px;
    letter-spacing: -0.04em;
  }

  p {
    color: #81afdd;
    font-size: 20px;
    line-height: 27px;
    font-weight: normal;
    font-style: normal;
    margin-top: 1.5rem;
  }

  @media (max-width: 1050px) {
    margin: 0 0 3rem;
  }
`;

export const Input = styled.div`
  width: 100%;
  margin: 2rem 0 1rem;
  display: flex;

  input {
    background: #052d56;
    border: 2px solid #031b34;
    flex: 2;
    width: 100%;
    min-height: 50px;
    font-size: 20px;
    line-height: 27px;
    padding: 0 1rem;
    outline: none;
    color: #fff;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  button {
    flex: 0.6;
    width: 100%;
    min-height: 50px;
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    background: #ff4820;
    border-radius: 5px 0px 0px 5px;
    color: #fff;
    cursor: pointer;
    outline: none;
    padding: 0 1rem;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    @media (max-width: 650px) {
      input {
        font-size: 16px;
        line-height: 24px;
      }

      button {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (max-width: 490px) {
      input {
        font-size: 12px;
        line-height: 16px;
      }

      button {
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
`;

export const People = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;

  img {
    width: 181px;
    height: 38px;
  }

  p {
    margin: 0 0 0 1rem;
    font-size: 12px;
    line-height: 38px;
    color: #ffffffff;
    text-align: center;
  }

  @media (max-width: 650px) {
    flex-direction: column;

    p {
      margin: 0;
    }
  }
`;

export const AiContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
`;
