import './dishesCategorys.css'

import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";

export const MenuDishes = ({products}) => {

    return(
        <div className="menuDishes">
            <CiSquareChevLeft className="arrow"/>
            <div className="categorys">
               {Object.keys(products).map((category, index) => (
                <h2 key={index} className='text'>{category}</h2>
               ))}
            </div>
            <CiSquareChevRight className="arrow"/>
        </div>
    )
}