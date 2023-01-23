import { Slider } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handlePriceChange } from "../Redux/Auth-Store/Auth-Slice";

const PriceRange = () => {
  // const [priceRange, setPriceRange] = React.useState([20, 37]);
  const { priceRange } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const minDistance = 10;

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      dispatch(
        handlePriceChange([
          Math.min(newValue[0], priceRange[1] - minDistance),
          priceRange[1],
        ])
      );
    } else {
      dispatch(
        handlePriceChange([
          priceRange[0],
          Math.max(newValue[1], priceRange[0] + minDistance),
        ])
      );
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
              value={priceRange}
              onChange={handleChange}
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
              onChange={(e) => handlePriceChange(e.target.value)}
              value={priceRange[0]}
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
              onChange={(e) => handlePriceChange(e.target.value)}
              value={priceRange[1]}
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
