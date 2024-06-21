import "./banner.css";

import { useState, useEffect } from "react";

import { Arrows, Points, IconBackText } from "../";

import { ChangeImgAuto } from "../../functions/ChangeImg";


export const Banner = () => {
  const [img, setImg] = useState(0);

  useEffect(() => {
    const clear = ChangeImgAuto(setImg);
    return () => clear();
  }, [img]);

  return (
    <div
      className="banner"
      key={img}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/src/imgs/banners/banner-${img}.jpg)`,
      }}
    >
      <IconBackText color="W"  text="Inicio" />
      <div className="mainInfo-arrows">
        <div className="mainInfo">
          <h1 className="title">Menú Osaki</h1>
          <h3 className="text">
            Este es el menú <span>disponible</span> que tiene para agregar
            platos a su pedido.
          </h3>
        </div>
        <Arrows setImg={setImg} />
        <Points img={img} />
      </div>
    </div>
  );
};
