import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../../Pages/Home';
import Category from '../../Pages/Category';
import Item from '../../Pages/items';
import navbar from "../components/Navbar";

const MainRouter = () => {
  return (
    <Routes>
      <navbar />
      <Route path="/" element={<Home />}/>
      <Route path="/category/:categoryId" element={<Category />}/>
      <Route path="/item/:itemId"> element={<items />} 
      </Route>
      
    </Routes>
  );
};

export default MainRouter
