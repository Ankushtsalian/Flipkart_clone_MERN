const ProductMobile = require("../Models/ProductMobile");

const distinctProducts = async function (schemaObjectArray, index) {
  const promises = schemaObjectArray.map(async (arr) => {
    const distinctProcuctResult = await ProductMobile.find().distinct(arr);
    return {
      [arr]: distinctProcuctResult,
    };
  });

  const distinctSchemaObjects = await Promise.all(promises);
  return distinctSchemaObjects;
};

module.exports = distinctProducts;

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
