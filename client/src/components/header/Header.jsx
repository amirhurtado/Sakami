import "./header.css";

import { useEffect, useState } from "react";

import { useOptions, useCart } from "../../context";

import { HandleScroll } from "../../functions/HandleScroll";

import { Search, MainOptions, OtherOptions } from "../";

import { NavLink } from "react-router-dom";

export const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { cart } = useCart();
  const {
    searchActive,
    setSearchActive,
    dropDownMenuActive,
    setDropDownMenuActive,
  } = useOptions();

  useEffect(() => {
    window.addEventListener("scroll", () => HandleScroll(setHasScrolled));
    return () => {
      window.removeEventListener("scroll", () => HandleScroll(setHasScrolled));
    };
  }, [setHasScrolled]);

  return (
    <header className="header">
      {searchActive && <Search setSearchActive={setSearchActive} />}

      <div className={searchActive ? "noShow" : "logoContainer"}>
        <NavLink to="/">
          <img
            src={`/src/imgs/logo/${
              hasScrolled ? "logo" : "logoCompleto"
            }-blanco.png`}
            alt="logo"
            className="logoImg"
          />
        </NavLink>
        <h2
          className={
            hasScrolled ? "title titleUbi animatedToLeft" : "title titleUbi"
          }
        >
          Osaki
        </h2>
      </div>

      <div className={searchActive ? "noShowOnPc" : ""}>
        <MainOptions
          dropDownMenuActive={dropDownMenuActive}
          setDropDownMenuActive={setDropDownMenuActive}
        />
      </div>

      <div className={searchActive ? "noShow" : ""}>
        <OtherOptions
          setSearchActive={setSearchActive}
          dropDownMenuActive={dropDownMenuActive}
          setDropDownMenuActive={setDropDownMenuActive}
          cart={cart}
        />
      </div>
    </header>
  );
};
