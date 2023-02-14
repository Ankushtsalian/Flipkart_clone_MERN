const ProductMobile = require("../Models/ProductMobile");
const {
  MobileSchemaLayout,
  MobileCardSchemaLayout,
} = require("./schemaLayouts");

const distinctProducts = async function (schemaObjectArray) {
  const promises = schemaObjectArray.map(async (arr) => {
    const distinctProcuctResult = await ProductMobile.find().distinct(arr);
    return {
      [arr]: distinctProcuctResult,
    };
  });

  const distinctSchemaObjects = await Promise.all(promises);
  return distinctSchemaObjects;
};

const createDistinctQuery = () => {
  let distinctSchemaQuery = {};
  let addToSetQuery = {};

  ProductMobile.schema.eachPath(function (path) {
    if (MobileCardSchemaLayout.includes(path))
      distinctSchemaQuery[path] = `$${path}`;
  });
  ProductMobile.schema.eachPath(function (path) {
    /**
     *  AIM :to acheive
     *  // productType: {
        //   $addToSet: "$productType",
        // },
     */
    let pathres = {};
    pathres["$addToSet"] = `$${path}`;
    if (MobileSchemaLayout.includes(path)) addToSetQuery[path] = pathres;
  });
  return { distinctSchemaQuery, addToSetQuery };
};
module.exports = { distinctProducts, createDistinctQuery };

// const distinctProducts = async function (schemaObjectArray, index) {
//   if (index === schemaObjectArray.length) {
//     return distinctSchemaObjects;
//   }
//   const distinctProcuctResult = await ProductMobile.find().distinct(
//     schemaObjectArray[index]
//   );
//   distinctSchemaObjects.push({
//     [schemaObjectArray[index]]: distinctProcuctResult,
//   });

//   return await distinctProducts(schemaObjectArray, index + 1);
// };

// let completedArray = [];
/**--------------------USING STATICS INSTANCE NEEDS REFRACTOR------- */

// const mapArray = async (array, index) => {
//   if (index === array.length) return;
//   val = {
//     [array[index]]: `$${array[index]}`,
//   };
//   const result = await ProductMobile.selectDistinctDataInSchema(val);
//   completedArray.push(...result);

//   await mapArray(array, index + 1);
// };
/**--------------------USING STATICS INSTANCE NEEDS REFRACTOR------- */
