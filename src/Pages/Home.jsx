import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import { ProductsData } from "../json/Products";
import { Navbar } from "react-bootstrap";

const Home = () => {
  return (
    <div>
        <Navbar />
      <ItemListContainer productsData={ProductsData} />
    </div>
  );
};

export default Home;