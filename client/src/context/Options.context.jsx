import { createContext, useContext, useState } from "react";

export const OptionsContext = createContext();

export const useOptions = () => {
    const context = useContext(OptionsContext);

    if (!context) {
        throw new Error("useOptions must be used within a OptionsProvider");
    }

    return context;
}

export const OptionsProvider = ({ children }) => {
    const [searchActive, setSearchActive] = useState(false);
    const [dropDownMenuActive, setDropDownMenuActive] = useState(false);

    return (
        <OptionsContext.Provider value={{searchActive, setSearchActive, dropDownMenuActive, setDropDownMenuActive  }}>
            {children}
        </OptionsContext.Provider>
    )
}

