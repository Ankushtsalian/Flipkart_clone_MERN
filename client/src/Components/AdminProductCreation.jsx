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
import { useDispatch, useSelector } from "react-redux";

const AdminProductCreation = () => {
  const { mobile } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(mobile);
  };

  return (
    <AdminProductFormWrapper>
      <div>
        <AdminProductFormHeader>Admin header</AdminProductFormHeader>
        <AdminProductFormContainer>
          <AdminProductForm onSubmit={handleSubmit}>
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
