import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import { productsData } from "../json/Products";
import { useParams } from "react-router-dom";
const Category = () => {
  const {categoryId} = useParams()

  const productsFilteredByCategory = productsData.filter(products => products.category === categoryId);

  return <ItemListContainer productsData={productsFilteredByCategory} />;
};

export default Category;