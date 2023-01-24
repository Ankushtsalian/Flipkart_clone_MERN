import styled from "styled-components";

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
  /* flex-wrap: wrap; */
`;

const AsideProductWrapper = styled.aside`
  min-width: 16.66%;
`;
const AsideProductContainer = styled.aside`
  /* max-width: 40%; */
  /* max-width: 100%; */
  background-color: #fff;
  /* flex-wrap: wrap; */
  /* margin: 0 auto; */
  overflow-x: hidden;
  /* max-height: 100%; */
  padding: 0 0 20px;
  /* margin-right: 20px; */
  /* border: 2px solid red; */
`;

const SectionProductWrapper = styled.aside`
  min-width: 80%;
`;

const SectionProductContainer = styled.section`
  /* max-width: 100%; */
  background-color: #fff;
  /* margin: 0 auto; */
  /* min-height: 100%; */
  padding: 20px;
  /* border: 2px solid red; */
`;

export {
  StyledProductMainWrapper,
  AsideProductContainer,
  AsideProductWrapper,
  SectionProductWrapper,
  SectionProductContainer,
};
