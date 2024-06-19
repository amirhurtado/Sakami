import "./otherOptions.css";

import { CiSearch, CiShoppingCart, CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

export const OtherOptions = ({
  setSearchActive,
  dropDownMenuActive,
  setDropDownMenuActive,
}) => {
  return (
    <div className="otherOpc">
      <h3 className="text">Ingreso</h3>
      <div className="icons">
        <CiSearch
          className="icon"
          onClick={() => setSearchActive((prev) => !prev)}
        />
        <CiShoppingCart className="icon" />

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
