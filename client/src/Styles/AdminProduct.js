import styled from "styled-components";

const AdminProductListContainer = styled.section`
  padding: 10px 0;
  font-weight: bold;
  width: 100%;
`;

const AdminProductListSection = styled.section`
  font-size: 18px;
  padding: 1rem;
  border-bottom: 1px solid var(--color-white);
`;
const AdminProductMain = styled.section`
  min-width: 978px;
  width: 100%;
  padding: 10px 10px;
  font-size: 13px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0 auto;
  gap: 10px;
  min-height: 100%;
  margin-bottom: 30px;
  flex: 0 0 auto;
`;

export { AdminProductListContainer, AdminProductListSection, AdminProductMain };
