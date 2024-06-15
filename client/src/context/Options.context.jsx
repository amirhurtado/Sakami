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
    const [drowDownMenuActive, setDrowDownMenuActive] = useState(false);

    return (
        <OptionsContext.Provider value={{searchActive, setSearchActive, drowDownMenuActive, setDrowDownMenuActive  }}>
            {children}
        </OptionsContext.Provider>
    )
}

