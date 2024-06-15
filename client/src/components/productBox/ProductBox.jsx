import "./productBox.css";

import { CiHeart } from "react-icons/ci";

export const ProductBox = ({ category, product }) => {
  return (
    <div className="productBox">
      <CiHeart className="heart" />

      <img
        src={`src/imgs/platos/${category}/${product.title}.jpg`}
        alt={product.title}
        className="imgDish"
      />
      <div className="info">
        <div className="titleANDdescription">
            <h2 className="textBold">{product.title}</h2>
        <h2 className="text">{product.description}</h2>
        </div>
        
        <h2 className="textBold price">${product.price}</h2>
      </div>
      <h2 className="add text">Agregar</h2>
    </div>
  );
};
