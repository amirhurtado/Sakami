import "./header.css";

import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";
import { MainOptions } from "../mainOptions/MainOptions";

export const Header = () => {
  return (
    <div className="header">
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
          <IoSearchOutline className="icon" />
          <IoCartOutline className="icon" />
          <RiMenuFill className="icon" />
        </div>
      </div>
    </div>
  );
};
