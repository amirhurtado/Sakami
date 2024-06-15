import "./arrowsBanner.css";

import { PrevImg, NextImg } from "../../functions/ChangeImg";
import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";

export const Arrows = ({setImg}) => {
  return (
    <div className="arrows">
      <CiSquareChevLeft className="icon" onClick={() => PrevImg(setImg)} />
      <CiSquareChevRight className="icon" onClick={() => NextImg(setImg)} />
    </div>
  );
};
