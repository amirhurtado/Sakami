import { ProductsProvider, OptionsProvider, CartProvider } from "../../context";

import { HomePage, CartPage, ProductPage } from "../../pages"

import "./app.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";


export function App() {
  return (
    <ProductsProvider>
      <CartProvider>
      <OptionsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/carrito" element={<CartPage />} />
            <Route path="/:categoryName/:productName" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
      </OptionsProvider>
      </CartProvider>
    </ProductsProvider>
  );
}
