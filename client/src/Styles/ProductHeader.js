import styled from "styled-components";

const StyledProductHeaderWrapper = styled.nav`
  position: fixed;
  width: 100%;

  z-index: 1;
  font-weight: 900;
  font-size: large;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 72px;
  opacity: 0.85;
  color: var(--color-black);
  background-color: var(--color-white-bg);
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 16%);
`;

const ProductMenuWrapper = styled.div`
  position: fixed;
  width: 100%;
  width: 80%;

  left: -9999px;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #0d0d0e;
  opacity: 0;
  visibility: hidden;
  transition-property: opacity, visibility;
  transition-duration: 0.3s;
  :hover {
  }
  @media (max-width: 500px) {
    opacity: 1;
    visibility: visible;
    left: 0;
  }
  @media (min-width: 500px) {
    position: static;
    flex-direction: row;
    background: transparent;
    opacity: 1;
    visibility: visible;
  }
`;
const ProductMenuContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  :hover {
    & button {
      opacity: 1;
    }
    & div {
      opacity: 1;
      visibility: visible;
      translate: 0 0;
    }
  }

  & button {
    border: 0;
    padding: 0;
    background: transparent;
    cursor: pointer;
    line-height: 1;
    color: inherit;
    font-family: "Euclid Circular A";
    font-size: 20px;
    width: 10%;
    :hover {
    }
    @media (min-width: 500px) {
      font-size: 16px;
      height: 100%;
      flex-direction: row;
      :hover {
      }
    }
  }
`;
const ProductMenu = styled.div`
  display: grid;
  margin-bottom: 28px;
  :hover {
    & button {
      opacity: 1;
    }
  }
  & button {
    border: 0;
    padding: 0;
    background: transparent;
    cursor: pointer;
    line-height: 1;
    color: inherit;
    font-family: "Euclid Circular A";
    font-size: 20px;
    width: 10%;

    display: flex;
    align-items: center;
    /* gap: 4px; */
    padding: 0 24px;
    height: 100%;

    opacity: 1;
    height: 60px;
    @media (min-width: 500px) {
      font-size: 16px;
    }
  }
  @media (min-width: 500px) {
    position: absolute;
    top: 58px;
    left: 50%;
    width: 280px;
    padding: 6px 24px 10px;
    margin-bottom: 0;
    place-items: start;
    --tw-bg-opacity: 1;
    background-color: var(--color-white-bg);
    box-shadow: 0px 8px 10px gray, -10px 8px 15px gray, 10px 8px 15px gray;
    border: 1px solid #fff;
    opacity: 0;
    visibility: hidden;
    translate: 0 24px;
    transition: 0.3s;
  }
`;
export {
  StyledProductHeaderWrapper,
  ProductMenuWrapper,
  ProductMenuContainer,
  ProductMenu,
};
