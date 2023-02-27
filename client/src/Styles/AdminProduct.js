import { Input } from "@mui/material";
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

const AdminProductFormWrapper = styled.div`
  padding: 10px;
`;
const AdminProductFormContainer = styled.div`
  margin: 10px;
  width: 100%;
  display: grid;
`;

const AdminProductForm = styled.form`
  margin: 0 auto;
  padding: 20px;
  box-shadow: var(--box-shadow-dark);
`;
const AdminProductFormRowContainer = styled.div`
  display: flex;
  width: 700px;
  justify-content: space-between;
`;
const AdminProductFormValue = styled.div`
  margin: 10px;
  width: 35%;
  font-weight: bold;
  padding-top: 15px;
  font-size: 14px;

  /* text-align: center; */
`;
const AdminProductFormInputContainer = styled.div`
  margin: 10px;
  width: 70%;
  box-shadow: var(--box-shadow-dark);
  padding: 10px 0 0 10px;
`;

const AdminProductFormInput = styled(Input)`
  width: 100%;
`;
const AdminProductFormHeader = styled.div`
  box-shadow: var(--box-shadow-dark);
  padding: 20px 10px;
  width: 280px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;
export {
  AdminProductListContainer,
  AdminProductFormHeader,
  AdminProductListSection,
  AdminProductMain,
  AdminProductFormWrapper,
  AdminProductFormContainer,
  AdminProductForm,
  AdminProductFormRowContainer,
  AdminProductFormValue,
  AdminProductFormInputContainer,
  AdminProductFormInput,
};
