import React from "react";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { productsData } from "../json/Products";
// eslint-disable-next-line
import { useParams } from "react-router-dom";

const item = () => {
  const { itemId } = useParams();
  const productsFilteredById = productsData.filter(
    (products) => products.id === parseInt(itemId)
  );

  console.log(productsFilteredById);

  return <ItemDetailContainer productsData={productsFilteredById} />;
};

export default item;
//sd
