import styled from "styled-components";

const StyledProductHeaderWrapper = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 1;
  font-size: large;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: 40px;
  opacity: 1;
  color: var(--color-black);
  background-color: var(--color-white-bg);
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 16%);
`;

const ProductMenuWrapper = styled.div`
  position: relative;
  width: 100%;
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
  justify-content: center;
  flex-grow: 1;

  & button {
    font-weight: bold;

    border: 0;
    padding: 0;
    background: transparent;
    cursor: pointer;
    line-height: 1;
    color: inherit;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    height: 100%;

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
  justify-content: space-between;
  position: absolute;
  top: 40px;
  left: 12%;
  right: 12%;
  background-color: var(--color-white-bg);
  box-shadow: 0 1px 2px 1px rgb(0 0 0 / 16%);
  opacity: 0;
  visibility: hidden;
  translate: 0 24px;
  transition: 0.3s;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 0 20px;

  & div {
    width: 100%;
    & div {
      padding: 20px;
      cursor: pointer;
      line-height: 1;
      color: inherit;
      font-weight: bold;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-weight: normal;
      & li {
        padding: 5px;

        font-weight: normal;
      }
      & li:hover {
        font-weight: bold;
        color: var(--color-brand-blue);
      }
      & span {
        font-weight: bold;
        padding-bottom: 10px;
      }
    }
  }
  & > :nth-child(even) {
    background-color: var(--color-grey-grade7);
  }
`;
export {
  StyledProductHeaderWrapper,
  ProductMenuWrapper,
  ProductMenuContainer,
  ProductMenu,
};
