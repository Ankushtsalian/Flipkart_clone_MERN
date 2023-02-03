import React from "react";
import {
  AsideProductContainer,
  AsideProductWrapper,
  ProductMainContainer,
  SectionProductContainer,
  SectionProductWrapper,
} from "../Styles/Product";

const AdminProduct = () => {
  return (
    <ProductMainContainer>
      <div
        style={{
          minWidth: "978px",
          /* max-width: 1500px, */
          width: "100%",
          padding: " 0 10px 10px",
          /* max-width: 1680px, */
          fontsize: "13px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",

          margin: "0 auto",
          gap: "10px",
          minHeight: "100%",
          marginBottom: "30px",
          flex: "0 0 auto",
        }}
      >
        <AsideProductWrapper>
          <AsideProductContainer></AsideProductContainer>
        </AsideProductWrapper>
        <SectionProductWrapper>
          <SectionProductContainer></SectionProductContainer>
        </SectionProductWrapper>
      </div>
    </ProductMainContainer>
  );
};
// <div
//   style={{
//     minHeight: "80vh",
//     maxWidth: "var(--width-max)",
//     margin: "0 auto",
//     paddingTop: "5px",
//   }}
// >
//   <div
//     style={{
//       minHeight: "80vh",
//       Width: "100%",
//       margin: "0 auto",
//       backgroundColor: "var(--color-border-grey)",
//       wordWrap: "break-word",
//     }}
//   ></div>
// </div>

export default AdminProduct;
