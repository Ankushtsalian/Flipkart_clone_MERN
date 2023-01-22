import { Slider } from "@mui/material";
import React from "react";

const PriceRange = () => {
  const [value1, setValue1] = React.useState([20, 37]);

  const minDistance = 10;
  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <div style={{ padding: "5px", fontWeight: "bold" }}>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <span>PRICE</span>
          </div>
          <div>
            <span>CLEAR</span>
          </div>
        </div>
        <div>
          <div>
            <Slider
              getAriaLabel={() => "Minimum distance"}
              value={value1}
              onChange={handleChange1}
              valueLabelDisplay="auto"
              defaultValue={[20, 37]}
              //   getAriaValueText={valuetext}
              disableSwap
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ flexGrow: "2", minWidth: "30px", marginRight: "5px" }}>
            <input
              onChange={(e) => setValue1(e.target.value)}
              value={value1[0]}
              name="min"
              style={{
                maxWidth: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </div>

          <div style={{ flex: "1 1 0%", minWidth: "20px" }}>to</div>
          <div
            style={{
              flexGrow: "2",
              display: "flex",
              justifyContent: "flex-end",
              minWidth: "30px",
              marginLeft: "5px",
            }}
          >
            <input
              onChange={(e) => setValue1(e.target.value)}
              value={value1[1]}
              name="max"
              style={{
                maxWidth: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
