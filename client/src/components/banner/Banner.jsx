import "./banner.css";

import { useState, useEffect } from "react";

import { TfiArrowLeft } from "react-icons/tfi";

import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";
import { ChangeImgAuto, PrevImg, NextImg } from "../../functions/ChangeImg";


export const Banner = () => {

  const [img, setImg] = useState(0);

  useEffect(() => {
    const clear = ChangeImgAuto(setImg);
    return () => clear();
  }, [img])



  return (
    <div className="banner" key={img} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/src/imgs/banners/banner-${img}.jpg)`,}}>
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
          <CiSquareChevLeft className="icon" onClick={() => PrevImg(setImg)}/>
          <CiSquareChevRight className="icon" onClick={() => NextImg(setImg)}/>
        </div>
      </div>
    </div>
  );
};
