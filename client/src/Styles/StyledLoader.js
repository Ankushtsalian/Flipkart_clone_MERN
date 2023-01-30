import styled from "styled-components";
// loading LoaderWrapper
// loader-id LoaderContainer
// loader Loading

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  background: #1a1a1a;
  z-index: 1;
  opacity: 0.7;
  animation: loader-out 0.3s both;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;

const LoaderContainer = styled.div``;

const Loading = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 3px solid;
  border-color: #f9f9f9 #f9f9f9 transparent transparent;
  box-sizing: border-box;
  scale: 1.5;
  animation: rotation 1s linear infinite;

  & ::after,
  ::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 3px solid;
    border-color: transparent transparent #8f44fd #8f44fd;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-sizing: border-box;
    animation: rotationBack 0.5s linear infinite;
    transform-origin: center center;

    & ::before {
      width: 32px;
      height: 32px;
      border-color: #f9f9f9 #f9f9f9 transparent transparent;
      animation: rotation 1.5s linear infinite;
    }
    @keyframes appear {
      0% {
      }
      100% {
        opacity: 1;
        translate: 0 0;
      }
    }
  }
`;

export { LoaderWrapper, LoaderContainer, Loading };
