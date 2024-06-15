import "./header.css";

import { useOptions } from "../../context/Options.context";

import { Search, MainOptions, OtherOptions } from "../";

export const Header = ({ hasScrolled }) => {
  const { searchActive, setSearchActive } = useOptions();

  return (
    <header className="header">
      {searchActive && <Search setSearchActive={setSearchActive} />}

      <div className={searchActive ? "noShow" : "logoContainer"}>
        <img
          src={`src/imgs/logo/${
            hasScrolled ? "logo" : "logoCompleto"
          }-blanco.png`}
          alt="logo"
          className="logoImg"
        />
        <h2
          className={
            hasScrolled ? "title titleUbi animatedToLeft" : "title titleUbi"
          }
        >
          Osaki
        </h2>
      </div>

      <div className={searchActive ? "noShowOnPc" : ""}>
        <MainOptions />
      </div>

      <div className={searchActive ? "noShow" : ""}>
        <OtherOptions setSearchActive={setSearchActive} />
      </div>
    </header>
  );
};
