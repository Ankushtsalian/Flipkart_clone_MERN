const ProductMobile = require("../Models/ProductMobile");

let distinctSchemaObjects = [];

const distinctProducts = async function (schemaObjectArray, index) {
  if (index === schemaObjectArray.length) {
    return "distinctSchemaObjects";
  }
  const distinctProcuctResult = await ProductMobile.find().distinct(
    schemaObjectArray[index]
  );
  distinctSchemaObjects.push({
    [schemaObjectArray[index]]: distinctProcuctResult,
  });

  await distinctProducts(schemaObjectArray, index + 1);
};

module.exports = distinctProducts;
