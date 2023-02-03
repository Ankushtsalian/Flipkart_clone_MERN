import { Input } from "@mui/material";
import React from "react";
import { filterValue } from "../Utils/productData";

const AdminProductCreation = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div>
        <div>Admin header</div>
        <div style={{ margin: "10px", width: "100%", display: "grid" }}>
          <form
            style={{
              margin: "0 auto",
              padding: "20px",
              //   width: "70%",
              border: "1px solid black",
            }}
          >
            {filterValue.map((product, index) => (
              <div
                style={{
                  display: "flex",
                  width: "700px",
                  //   border: "1px solid black",
                  justifyContent: "space-between",
                }}
                key={product}
              >
                <div
                  style={{ margin: "10px", width: "30%", fontWeight: "bold" }}
                >
                  <span>{product} : </span>
                </div>
                <div style={{ margin: "10px", width: "70%" }}>
                  <Input placeholder={product} style={{ width: "100%" }} />
                </div>
              </div>
            ))}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminProductCreation;
