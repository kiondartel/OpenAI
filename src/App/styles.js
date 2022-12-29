import styled from "styled-components";

export const Container = styled.div`
  @-webkit-keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @media screen and (max-width: 700px) {
    .section__padding {
      padding: 4rem;
    }

    .section__margin {
      margin: 4rem;
    }
  }

  @media screen and (max-width: 550px) {
    .section__padding {
      padding: 4rem 2rem;
    }

    .section__margin {
      margin: 4rem 2rem;
    }
  }
`;

export const Gradient = styled.div`
  background: -moz-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 90%
  );

  background: -webkit-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 90%
  );

  background: -o-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 90%
  );

  background: -ms-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 90%
  );

  background: radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 90%
  );
`;

export const GradientText = styled.div`
  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
  background-clip: text;
  -webkit-background-clop: text;
  -webkit-text-fill-color: transparent;
`;

export const SectionPadding = styled.section`
  padding: 4rem 6rem;
`;

export const SectionMargin = styled.section`
  margin: 4rem 6rem;
`;
