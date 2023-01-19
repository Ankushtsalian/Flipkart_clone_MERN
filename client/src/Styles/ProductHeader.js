import styled from "styled-components";

const StyledProductHeaderWrapper = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 1;
  font-weight: 900;
  font-size: large;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: 72px;
  opacity: 0.85;
  color: var(--color-black);
  background-color: var(--color-white-bg);
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 16%);
`;

const ProductMenuWrapper = styled.div`
  position: relative;
  width: 100%;
  width: 80%;
  left: -9999px;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: #0d0d0e;
  opacity: 0;
  visibility: hidden;
  transition-property: opacity, visibility;
  transition-duration: 0.3s;
  position: static;
  flex-direction: row;
  background: transparent;
  opacity: 1;
  visibility: visible;
  max-width: 1248px;
`;

const ProductMenuContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  & button {
    border: 0;
    padding: 0;
    background: transparent;
    cursor: pointer;
    line-height: 1;
    color: inherit;
    font-family: "Euclid Circular A";
    font-size: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    height: 100%;
    flex-direction: row;

    & svg {
      height: 15px;
      font-weight: bold;
    }
    & path {
      fill: var(--color-grey-grade4) !important;
    }
    :hover {
      color: var(--color-brand-blue);
      & svg {
        transform: rotate(180deg);
        height: 15px;
      }
      & path {
        fill: var(--color-brand-blue) !important;
      }
    }
  }
  :hover {
    & div {
      opacity: 1;
      visibility: visible;
      translate: 0 0;
    }
  }
`;
const ProductMenu = styled.div`
  /* min-width: 1248px; */
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 72px;
  left: 12%;
  right: 12%;
  /* padding: 6px 24px 10px; */
  background-color: var(--color-white-bg);
  box-shadow: 0 1px 2px 1px rgb(0 0 0 / 16%);
  opacity: 0;
  visibility: hidden;
  translate: 0 24px;
  transition: 0.3s;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  height: 560px;
  & :nth-child(even) {
    background-color: var(--color-grey-grade7);
  }
  :hover {
    & div {
      opacity: 1;
    }
  }
  & div {
    border: 0;
    padding: 0;
    cursor: pointer;
    line-height: 1;
    color: inherit;
    font-family: "Euclid Circular A";
    width: 100%;
    font-size: 16px;
  }
`;
export {
  StyledProductHeaderWrapper,
  ProductMenuWrapper,
  ProductMenuContainer,
  ProductMenu,
};
