import "./homePage.css";
import { useEffect } from "react";

import { useOptions, useProducts } from "../../context";

import { GetProducts } from "../../functions/GetProducts";

import { Header, Banner, MenuDishes, MainBody, Footer, DropDownMenu } from "../../components";

export const HomePage = () => {
  const { dropDownMenuActive } = useOptions();
  const { products, setProducts } = useProducts();

  useEffect(() => {
    const fetchProducts = async () => {
      const callProducts = await GetProducts();
      setProducts(callProducts);
    };
    fetchProducts();
  }, [setProducts]);

  return (
    <div className="home">
      <Header />
      <Banner />
      <MenuDishes products={products} />
      <MainBody products={products} />
      <Footer />
      {dropDownMenuActive && <DropDownMenu />}
    </div>
  );
};
