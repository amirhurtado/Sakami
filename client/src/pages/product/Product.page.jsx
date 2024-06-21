import "./productPage.css";

import { useParams } from "react-router-dom";

import { useProducts } from "../../context";

import { Header, IconBackText, AddProduct } from "../../components";

import { CiHeart } from "react-icons/ci";

export const ProductPage = () => {
  const { categoryName, productName } = useParams();
  const { products } = useProducts();

  const productFound = products[categoryName].find(
    (product) => product.title === productName
  );

  return (
    <div className="productPage">
      <Header />
      <div className="productPageContainer">
        <IconBackText text="Volver" />
        <div className="productContainer">
          <div className="img-heart">
            <img
              src={`/src/imgs/platos/${categoryName}/${productName}.jpg`}
              alt={productFound.title}
              className="img"
            />
            <CiHeart className="heart" />
          </div>

          <div className="productInfo">
            <h2 className="title">{productFound.title}</h2>
            <h2 className="text">{productFound.description}</h2>
            <h2 className="textBold">${productFound.price}</h2>
            <AddProduct category={categoryName} product={productFound} />
          </div>
        </div>
      </div>
    </div>
  );
};
