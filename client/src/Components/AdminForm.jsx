import React from "react";
import { filterValue } from "../Utils/productData";
import {
  AdminProductFormInput,
  AdminProductFormInputContainer,
  AdminProductFormRowContainer,
  AdminProductFormValue,
} from "../Styles/AdminProduct";

const AdminForm = () => {
  return (
    <>
      {filterValue.map((product, index) => (
        <AdminProductFormRowContainer key={product}>
          <AdminProductFormValue>
            <span>{product} : </span>
          </AdminProductFormValue>
          <AdminProductFormInputContainer>
            <AdminProductFormInput placeholder={product} />
          </AdminProductFormInputContainer>
        </AdminProductFormRowContainer>
      ))}
    </>
  );
};

export default AdminForm;
