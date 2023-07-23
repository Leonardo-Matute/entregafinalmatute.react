import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Category from '../Pages/Category';
import Navbar from '../NavBar/NavBar';
import items from '../Pages/Item';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} /> {}
      <Route path="/" element={<Home />} />
      <Route path="/category/:categoryId" element={<Category />} />
      <Route path="/items/:itemId" element={<items />} />
    </Routes>
  );
};

export default MainRouter;