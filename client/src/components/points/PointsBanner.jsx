import './pointsBanner.css'

import { MdOutlineCircle, MdCircle } from "react-icons/md";

export const Points = ({img}) => {
    return (
        <div className="points">
            {img === 0 ? <MdCircle className="icon" /> : <MdOutlineCircle className="icon" />}
            {img === 1 ? <MdCircle className="icon" /> : <MdOutlineCircle className="icon" />}
            {img === 2 ? <MdCircle className="icon" /> : <MdOutlineCircle className="icon" />}
            {img === 3 ? <MdCircle className="icon" /> : <MdOutlineCircle className="icon" />}
            {img === 4 ? <MdCircle className="icon" /> : <MdOutlineCircle className="icon" />}
        </div>
        
    )
}