import { Checkbox } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAdminMobileProductInput } from "../Redux/Product-Store/Product-Slice";
import {
  AdminProductFormInput,
  AdminProductFormInputContainer,
  AdminProductFormRowContainer,
  AdminProductFormValue,
} from "../Styles/AdminProduct";

const AdminProductCardDetail = () => {
  const productCardDetail = [
    "productDescription",
    "productAbsolutePrice",
    "productMaxPrice",
    "productDiscount",
    "isFlipkartAssuredProduct",
    "isFreeDeliveryEligible",
    "isBankOfferEligible",
  ];

  const { mobile } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  console.log(mobile);
  return (
    <>
      {productCardDetail.map((value, index) => {
        return (
          <AdminProductFormRowContainer key={index}>
            <AdminProductFormValue>{value} : </AdminProductFormValue>
            <AdminProductFormInputContainer>
              {value.startsWith("is") ? (
                <Checkbox
                  name={value}
                  onChange={(event) =>
                    dispatch(handleAdminMobileProductInput(event.target))
                  }
                />
              ) : (
                <AdminProductFormInput
                  placeholder={value}
                  name={value}
                  onChange={(event) =>
                    dispatch(handleAdminMobileProductInput(event.target))
                  }
                />
              )}
            </AdminProductFormInputContainer>
          </AdminProductFormRowContainer>
        );
      })}
    </>
  );
};

export default AdminProductCardDetail;
