import { Input } from "@mui/material";
import React from "react";
import {
  AdminProductFormInputContainer,
  AdminProductFormRowContainer,
  AdminProductFormValue,
} from "../Styles/AdminProduct";

const AdminProductFile = () => {
  return (
    <AdminProductFormRowContainer>
      <AdminProductFormValue>productImage : </AdminProductFormValue>
      <AdminProductFormInputContainer>
        <Input type="file" />
      </AdminProductFormInputContainer>
    </AdminProductFormRowContainer>
  );
};

export default AdminProductFile;
