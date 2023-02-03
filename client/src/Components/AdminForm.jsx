import React from "react";
import { filterValue } from "../Utils/productData";
import {
  AdminProductFormInput,
  AdminProductFormInputContainer,
  AdminProductFormRowContainer,
  AdminProductFormValue,
} from "../Styles/AdminProduct";
import { useDispatch, useSelector } from "react-redux";
import { handleAdminMobileProductInput } from "../Redux/Product-Store/Product-Slice";

const AdminForm = () => {
  const { mobile } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  return (
    <>
      {filterValue.map((product, index) => (
        <AdminProductFormRowContainer key={product}>
          <AdminProductFormValue>
            <span>{product} : </span>
          </AdminProductFormValue>
          <AdminProductFormInputContainer>
            <AdminProductFormInput
              placeholder={product}
              name={product}
              onChange={(event) =>
                dispatch(handleAdminMobileProductInput(event.target))
              }
            />
          </AdminProductFormInputContainer>
        </AdminProductFormRowContainer>
      ))}
    </>
  );
};

export default AdminForm;
