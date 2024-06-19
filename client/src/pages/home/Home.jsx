import "./home.css";
import { useEffect, useState } from "react";

import { useOptions } from "../../context/Options.context";
import { useProducts } from "../../context/Products.context";

import { GetProducts } from "../../functions/GetProducts";
import { HandleScroll } from "../../functions/HandleScroll";

import { Header, Banner, MenuDishes, MainBody, Footer } from "../../components";
import { DropDownMenu } from "../../components/dropDownMenu/DropDownMenu";


export const Home = () => {
  const { dropDownMenuActive } = useOptions();
  const { products, setProducts } = useProducts();
  const [hasScrolled, setHasScrolled] = useState(false);


  useEffect(() => {
    window.addEventListener("scroll", () => HandleScroll(setHasScrolled));
    return () => {
      window.removeEventListener("scroll", () => HandleScroll(setHasScrolled));
    };
  }, [setHasScrolled]);

  useEffect(() => {
    const fetchProducts = async () => {
      const callProducts = await GetProducts();
      setProducts(callProducts);
    };
    fetchProducts();
  }, [setProducts]);

  return (
    <div className={dropDownMenuActive ? "home noScroll" : "home"}>
      <Header hasScrolled={hasScrolled}/>
      <Banner />
      <MenuDishes products={products} />
      <MainBody products={products} /> 
      <Footer /> 
      {dropDownMenuActive && <DropDownMenu />}
    </div>
  );
};
