import "./header.css";

import { CiSearch, CiShoppingCart, CiMenuBurger } from "react-icons/ci";
import { MainOptions } from "../mainOptions/MainOptions";

export const Header = () => {
  return (
    <header className="header">
      <div className="logoContainer">
        <img
          src="src/imgs/logo/logoCompleto-blanco.png"
          alt="logo"
          className="logoImg"
        />
        <h2 className="title titleUbi">Osaki</h2>
      </div>

      <MainOptions />

      <div className="otherOpc">
        <h3 className="text">Ingreso</h3>
        <div className="icons">
          <CiSearch className="icon" />
          <CiShoppingCart className="icon" />
          <CiMenuBurger className="icon menuIcon" />
        </div>
      </div>
    </header>
  );
};
