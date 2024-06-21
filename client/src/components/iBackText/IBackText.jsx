import "./iBackText.css";

import { TfiArrowLeft } from "react-icons/tfi";

export const IconBackText = ({ color, text }) => {
  return (
    <div className="iBackText">
      <TfiArrowLeft className={color === "W" ? "icon W" : "icon B"} />
      <h3 className={color === "W" ? "text W" : "text B"} >{text}</h3>
    </div>
  );
};
