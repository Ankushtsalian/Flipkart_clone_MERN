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
{
  /* <ProductMenu>
        <div>
          Mobiles
          <div>Mi</div>
          <div>Realme</div>
          <div>Samsung</div>
          <div>Infinix</div>
          <div>OPPO</div>
          <div>Apple</div>
          <div>Vivo</div>
          <div>Honor</div>
          <div>Asus</div>
          <div>Poco X2</div>
          <div>realme Narzo 10</div>
          <div>Infinix Hot 9</div>
          <div>IQOO 3</div>
          <div>iPhone SE</div>
          <div>Motorola razr</div>
          <div>realme Narzo 10A</div>
          <div>Motorola g8 power lite</div>
          <a href="/">UX/U22I Design</a>
        </div>
        <div>
          Mobile Accessories
          <div>Mobile Cases</div>
          <div>Headphones & Headsets</div>
          <div>Power Banks</div>
          <div>Screenguards</div>
          <div>Memory Cards</div>
          <div>Smart Headphones</div>
          <div>Mobile Cables</div>
          <div>Mobile Chargers</div>
          <div>Mobile Holders</div>
          <div>Smart Wearable Tech</div>
          <div>Smart Watches</div>
          <div>Smart Glasses (VR)</div>
          <div>Smart Bands</div>
          <div>Health Care Appliances</div>
          <div>Bp Monitors</div>
          <div>Weighing Scale</div>
          <a href="/">UX/U22I Design</a>
        </div>
        <div>
          Mobiles
          <div>Mi</div>
          <div>Realme</div>
          <div>Samsung</div>
          <div>Infinix</div>
          <div>OPPO</div>
          <div>Apple</div>
          <div>Vivo</div>
          <div>Honor</div>
          <div>Asus</div>
          <div>Poco X2</div>
          <div>realme Narzo 10</div>
          <div>Infinix Hot 9</div>
          <div>IQOO 3</div>
          <div>iPhone SE</div>
          <div>Motorola razr</div>
          <div>realme Narzo 10A</div>
          <div>Motorola g8 power lite</div>
          <a href="/">UX/U22I Design</a>
        </div>
        <div>
          UX/UI Design Mobiles
          <div>Mi</div>
          <div>Realme</div>
          <div>Samsung</div>
          <div>Infinix</div>
          <div>OPPO</div>
          <div>Apple</div>
          <div>Vivo</div>
          <div>Honor</div>
          <div>Asus</div>
          <div>Poco X2</div>
          <div>realme Narzo 10</div>
          <div>Infinix Hot 9</div>
          <div>IQOO 3</div>
          <div>iPhone SE</div>
          <div>Motorola razr</div>
          <div>realme Narzo 10A</div>
          <div>Motorola g8 power lite</div>
          <a href="/">UX/U22I Design</a>
        </div>
        <div>
          UX/UI Design Mobiles
          <div>Mi</div>
          <div>Realme</div>
          <div>Samsung</div>
          <div>Infinix</div>
          <div>OPPO</div>
          <div>Apple</div>
          <div>Vivo</div>
          <div>Honor</div>
          <div>Asus</div>
          <div>Poco X2</div>
          <div>realme Narzo 10</div>
          <div>Infinix Hot 9</div>
          <div>IQOO 3</div>
          <div>iPhone SE</div>
          <div>Motorola razr</div>
          <div>realme Narzo 10A</div>
          <div>Motorola g8 power lite</div>
          <a href="/">UX/U22I Design</a>
        </div>
      </ProductMenu> */
}
