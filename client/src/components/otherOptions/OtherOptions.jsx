import "./otherOptions.css";

import { NavLink } from "react-router-dom";

import { CiSearch, CiShoppingCart, CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

export const OtherOptions = ({
  setSearchActive,
  dropDownMenuActive,
  setDropDownMenuActive,
  cart,
}) => {
  return (
    <div className="otherOpc">
      <h3 className="text">Ingreso</h3>
      <div className="icons">
        <CiSearch
          className="icon"
          onClick={() => setSearchActive((prev) => !prev)}
        />
        <NavLink to="/carrito" className="cartContainer">
          <CiShoppingCart className="icon" />
          {cart.length > 0 && (
            <span className="cartCounter text">{cart.length}</span>
          )}
        </NavLink>

        {dropDownMenuActive ? (
          <TfiClose
            key={dropDownMenuActive}
            className="icon animationClose"
            onClick={() => setDropDownMenuActive((prev) => !prev)}
          />
        ) : (
          <CiMenuBurger
            key={dropDownMenuActive}
            className="icon menuIcon animationMenu"
            onClick={() => setDropDownMenuActive((prev) => !prev)}
          />
        )}
      </div>
    </div>
  );
};
