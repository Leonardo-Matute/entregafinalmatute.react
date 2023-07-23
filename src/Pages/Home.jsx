import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import { productsData } from "../json/Products";
import { Navbar } from "react-bootstrap";

const Home = () => {
  return (
    <div>
        <Navbar />
      <ItemListContainer productsData={productsData} />
    </div>
  );
};

export default Home;