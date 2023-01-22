import React from "react";

const PriceRange = () => {
  return (
    <div style={{ border: "1px solid black", padding: "5px" }}>
      --------ASIDE PRODUCT--------
      <div>
        <div>
          <span>PRICE</span>
        </div>
        <div>
          <div>SLIDER</div>
        </div>
        <div>
          <div>
            <input name="min" />
          </div>
          <div>
            <span> to</span>
          </div>
          <div>
            <input name="max" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
