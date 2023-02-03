import React from "react";
import { StyledButton } from "../Styles/Button";
import {
  AdminProductForm,
  AdminProductFormContainer,
  AdminProductFormHeader,
  AdminProductFormWrapper,
} from "../Styles/AdminProduct";
import AdminProductCardDetail from "./AdminProductCardDetail";
import AdminProductFile from "./AdminProductFile";
import AdminForm from "./AdminForm";

const AdminProductCreation = () => {
  return (
    <AdminProductFormWrapper>
      <div>
        <AdminProductFormHeader>Admin header</AdminProductFormHeader>
        <AdminProductFormContainer>
          <AdminProductForm>
            <AdminForm />
            <AdminProductFile />

            <AdminProductCardDetail />

            <StyledButton type="submit">Submit</StyledButton>
          </AdminProductForm>
        </AdminProductFormContainer>
      </div>
    </AdminProductFormWrapper>
  );
};

export default AdminProductCreation;
