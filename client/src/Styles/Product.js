import styled from "styled-components";

const ProductMainContainer = styled.div`
  max-width: var(--width-max);
  margin: 0 auto;
`;

const StyledProductMainWrapper = styled.nav`
  min-width: 978px;
  /* max-width: 1500px; */
  width: 100%;
  padding: 0 10px 10px;
  /* max-width: 1680px; */
  font-size: 13px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  margin: 0 auto;
  gap: 10px;
  position: relative;
  min-height: 100%;
  top: 7rem;
  margin-bottom: 30px;
  flex: 0 0 auto;
`;

const AsideProductWrapper = styled.aside`
  min-width: 16.66%;
  max-width: 16.66%;
`;
const AsideProductContainer = styled.aside`
  background-color: #fff;
  overflow-x: hidden;
  padding: 0 0 20px;
`;

const SectionProductWrapper = styled.section`
  min-width: 80%;
`;

const SectionProductContainer = styled.div`
  background-color: #fff;
  padding: 10px 20px 20px 0;
`;

export {
  StyledProductMainWrapper,
  AsideProductContainer,
  AsideProductWrapper,
  SectionProductWrapper,
  ProductMainContainer,
  SectionProductContainer,
};
