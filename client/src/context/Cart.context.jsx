import { createContext, useContext, useState } from "react";

export const cartContext = createContext();

export const useCart = () => {
  const context = useContext(cartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
};
