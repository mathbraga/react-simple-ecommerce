import { client, Query, Field } from "@tilework/opus";

const prepareQuery = () => {
  const currencyFields = ["label", "symbol"];
  const currency = new Field("currency", true).addFieldList(currencyFields);
  const pricesFields = [currency, "amount"];
  const prices = new Field("prices", true).addFieldList(pricesFields);
  const itemsFields = ["displayValue", "value"];
  const items = new Field("items", true).addFieldList(itemsFields);
  const attributesFields = ["name", "type", items];
  const attributes = new Field("attributes", true).addFieldList(
    attributesFields
  );
  const productFields = [
    "id",
    "name",
    "category",
    "inStock",
    "gallery",
    "description",
    attributes,
    prices,
    "brand",
  ];
  const products = new Field("products", true).addFieldList(productFields);
  const query = new Query("categories", true).addFieldList(["name", products]);

  return query;
};

const queryAllProducts = async () => {
  const query = prepareQuery();
  const result = await client.post(query);

  return result;
};

export default queryAllProducts;
