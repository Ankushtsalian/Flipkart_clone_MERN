import { Input } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productFile } from "../Redux/Product-Store/Product-Slice";
import {
  AdminProductFormInputContainer,
  AdminProductFormRowContainer,
  AdminProductFormValue,
} from "../Styles/AdminProduct";

const AdminProductFile = () => {
  const {} = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handleFileInput = (event) => {
    const imageFile = event.target.files[0];
    let formData = new FormData();
    formData = { ...formData, ["image"]: imageFile };
    // console.log(formData);
    dispatch(productFile(formData));
  };
  return (
    <AdminProductFormRowContainer>
      <AdminProductFormValue>productImage : </AdminProductFormValue>
      <AdminProductFormInputContainer>
        <Input name="productImage" type="file" onChange={handleFileInput} />
      </AdminProductFormInputContainer>
    </AdminProductFormRowContainer>
  );
};

export default AdminProductFile;
