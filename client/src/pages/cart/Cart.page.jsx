import "./cartPage.css";

import { useOptions, useCart } from "../../context";

import { Header, IconBackText, DropDownMenu } from "../../components";

import { CiPillsBottle1 } from "react-icons/ci";
import { HiPlus, HiMinus } from "react-icons/hi2";

export const CartPage = () => {
  const { dropDownMenuActive } = useOptions();
  const { cart } = useCart();

  return (
    <div className="cart">
      <Header />
      <div className="containerCart">
        <IconBackText color="B" text="Volver" />
        <h1 className="title">Su carrito</h1>

        {cart.length === 0 ? (
          <h2 className="text">No hay productos en el carrito</h2>
        ) : (
          <div className="products">
            {cart.map(([category, product]) => (
              <div className="product">
                <div className="imgInfoContainer">
                  <img
                    src={`src/imgs/platos/${category}/${product.title}.jpg`}
                    alt="plato"
                    className="img"
                  />
                  <div className="infoContainer">
                    <div className="info">
                      <h2 className="textBold">{product.title}</h2>
                      <h2 className="text">{product.description}</h2>
                    </div>
                    <h2 className="text price">${product.price}</h2>
                  </div>
                </div>

                <div className="amunt-Delete">
                  <div className="amount">
                    <HiMinus className="icon" />
                    <h2 className="text">1</h2>
                    <HiPlus className="icon" />
                  </div>
                  <CiPillsBottle1 className="iconDelete" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {dropDownMenuActive && <DropDownMenu />}
    </div>
  );
};
