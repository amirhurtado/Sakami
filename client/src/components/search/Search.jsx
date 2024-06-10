import "./search.css";

import { CiSearch } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

export const Search = ({ setSearchActive }) => {
  return (
    <div className="search">
      <div className="stuffed"></div>
      <div className="inputContainer">
        <input
          type="text"
          className="input"
          placeholder="¿Qué estás buscando?"
        />
        <CiSearch className="icon" />
      </div>

      <TfiClose
        className="iconClose"
        onClick={() => setSearchActive((prev) => !prev)}
      />
    </div>
  );
};
