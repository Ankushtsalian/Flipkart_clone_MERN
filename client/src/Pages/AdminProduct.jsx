import React from "react";
import AdminProductCreation from "../Components/AdminProductCreation";
import AdminSidebar from "../Components/AdminSidebar";
import {
  AdminProductListContainer,
  AdminProductListSection,
  AdminProductMain,
} from "../Styles/AdminProduct";
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
      <AdminProductMain>
        <AsideProductWrapper>
          <AsideProductContainer>
            <AdminProductListContainer>
              <AdminProductListSection>Products</AdminProductListSection>
              <AdminSidebar />
            </AdminProductListContainer>
          </AsideProductContainer>
        </AsideProductWrapper>
        <SectionProductWrapper>
          <SectionProductContainer>
            <AdminProductCreation />
          </SectionProductContainer>
        </SectionProductWrapper>
      </AdminProductMain>
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
