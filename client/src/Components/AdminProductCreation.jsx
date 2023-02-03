import React from "react";
import { filterValue } from "../Utils/productData";

const AdminProductCreation = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div>
        <div>Admin header</div>
        <form>
          {filterValue.map((product, index) => (
            <div
              style={{
                display: "flex",
                width: "700px",
                // border: "1px solid black",
                justifyContent: "space-between",
              }}
              key={product}
            >
              <div style={{ margin: "10px", width: "30%", fontWeight: "bold" }}>
                <span>{product} : </span>
              </div>
              <div style={{ margin: "10px", width: "70%" }}>
                <input />
              </div>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default AdminProductCreation;
