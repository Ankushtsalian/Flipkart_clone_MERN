import React from "react";
import { ProductMenu } from "../Styles/ProductHeader";
const prod = [
  {
    Mobiles: [
      "Mi",
      "Realme",
      "Samsung",
      "Infinix",
      "OPPO",
      "Apple",
      "Vivo",
      "Honor",
      "Asus",
      "Poco X2",
      "realme Narzo 10",
      "Infinix Hot 9",
      "IQOO 3",
      "iPhone SE",
      " Motorola razr",
      "realme Narzo 10A",
      "Motorola g8 power lite",
    ],
  },
  {
    Accessories: [
      "Mobile Cases",
      "Headphones & Headsets",
      "Power Banks",
      "Screenguards",
      "Memory Cards",
      "Smart Headphones",
      "Mobile Cables",
      "Mobile Chargers",
      "Mobile Holders",
      "Smart Wearable Tech",
      "Smart Watches",
      "Smart Glasses (VR)",
      "Smart Bands",
      "Health Care Appliances",
      "Bp Monitors",
      "Weighing Scale",
    ],
  },
];
const ProductList = () => {
  return (
    <>
      <ProductMenu>
        {[...prod, ...prod, prod[0]].map((p, i) => {
          return (
            <div key={i}>
              <div>
                <span>{Object.keys(p)}</span>
                <ul>
                  {Object.values(p)
                    .flat()
                    .map((arr, i) => (
                      <li key={i}> {arr}</li>
                    ))}
                </ul>
              </div>
            </div>
          );
        })}
      </ProductMenu>
    </>
  );
};

export default ProductList;
