import { ProductsProvider } from "../../context/Products.context";
import { OptionsProvider } from "../../context/Options.context";
import { Home } from "../../pages/home/Home";
import "./app.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <ProductsProvider>
      <OptionsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </OptionsProvider>
    </ProductsProvider>
  );
}
