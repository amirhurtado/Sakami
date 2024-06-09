import "./banner.css";

import { TfiArrowLeft } from "react-icons/tfi";

import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";


export const Banner = () => {
  return (
    <div className="banner">
      <div className="back">
        <TfiArrowLeft className="icon" />
        <h3 className="text">Inicio</h3>
      </div>
      <div className="mainInfo-arrows">
        <div className="mainInfo">
          <h1 className="title">Menú Osaki</h1>
          <h3 className="text">
            Este es el menú <span>disponible</span> que tiene para agregar
            platos a su pedido.
          </h3>
        </div>
        <div className="arrows">
          <CiSquareChevLeft className="icon" />
          <CiSquareChevRight className="icon" />
        </div>
      </div>
    </div>
  );
};
