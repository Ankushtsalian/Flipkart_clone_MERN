import React from "react";
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
  return (
    <>
      {productCardDetail.map((value, index) => {
        return (
          <AdminProductFormRowContainer key={index}>
            <AdminProductFormValue>{value} : </AdminProductFormValue>
            <AdminProductFormInputContainer>
              <AdminProductFormInput
                placeholder={value}
                style={{ width: "100%" }}
              />
            </AdminProductFormInputContainer>
          </AdminProductFormRowContainer>
        );
      })}
    </>
  );
};

export default AdminProductCardDetail;
