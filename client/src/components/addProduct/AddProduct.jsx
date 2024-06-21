import './AddProduct.css'

import { useCart } from "../../context";

import { HandleCart } from "../../functions/HandleCart";

export const AddProduct = ({category, product}) => {

    const {setCart } = useCart();

    return (
        <h2 className="addButton text" onClick={() => HandleCart(category, product, setCart)}>Agregar</h2>
    )
}