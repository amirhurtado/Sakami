import { createContext, useContext, useState } from "react";

export const productsContext = createContext();

export const useProducts = () => {
  const context = useContext(productsContext);

  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }

  return context;
};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  return (
    <productsContext.Provider value={{ products, setProducts }}>
      {children}
    </productsContext.Provider>
  );
};
