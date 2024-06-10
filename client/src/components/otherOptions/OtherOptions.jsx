import "./otherOptions.css";

import { CiSearch, CiShoppingCart, CiMenuBurger } from "react-icons/ci";

export const OtherOptions = ({setSearchActive}) => {
  return (
    <div className="otherOpc">
      <h3 className="text">Ingreso</h3>
      <div className="icons">
        <CiSearch
          className="icon"
          onClick={() => setSearchActive((prev) => !prev)}
        />
        <CiShoppingCart className="icon" />
        <CiMenuBurger className="icon menuIcon" />
      </div>
    </div>
  );
};
