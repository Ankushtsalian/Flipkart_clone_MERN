import styled from "styled-components";

const StyledProductMainWrapper = styled.nav`
  min-width: 978px;
  width: 100%;
  padding: 10px;
  min-height: 50vh;
  max-width: 1680px;
  display: grid;
  grid-template-columns: 1fr 5fr;
  margin: 0 auto;
  gap: 50px;
  position: relative;
  min-height: 100%;
  top: 3rem;
  flex: 0 0 auto;
  flex-wrap: wrap;
`;

const AsideWrapper = styled.aside`
  min-width: 100%;
  max-width: 100%;
  background-color: #fff;
  flex-wrap: wrap;
  margin: 0 auto;
  overflow-x: hidden;
  min-height: 100%;
  padding: 20px;
  margin-right: 50px;
`;

const SectionWrapper = styled.section`
  min-width: 100%;
  background-color: #fff;
  margin: 0 auto;
  min-height: 100%;
  padding: 20px;
`;

export { StyledProductMainWrapper, AsideWrapper, SectionWrapper };
