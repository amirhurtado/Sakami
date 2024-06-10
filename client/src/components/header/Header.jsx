import "./header.css";

import { useSearch } from "../../context/Search.context";

import { Search } from "../search/Search";
import { MainOptions } from "../mainOptions/MainOptions";
import { OtherOptions } from "../otherOptions/OtherOptions";

export const Header = () => {
  const { searchActive, setSearchActive } = useSearch();

  return (
    <header className="header">

      {searchActive && (<Search setSearchActive={setSearchActive}/>)}

      <div className={searchActive ? "noShow" : "logoContainer"}>
        <img
          src="src/imgs/logo/logoCompleto-blanco.png"
          alt="logo"
          className="logoImg"
        />
        <h2 className="title titleUbi">Osaki</h2>
      </div>

      <div className={searchActive ? "noShowOnPc" : ""}>
       <MainOptions />
      </div>
     

      <div className={searchActive ? "noShow" : ""}>
        <OtherOptions setSearchActive={setSearchActive}/>
      </div>
    </header>
  );
};
