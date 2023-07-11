import React, { createContext, useState } from "react";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [count, setCount] = useState({ qtyItems: 0, products: [] });
  console.log(count.products)

  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};