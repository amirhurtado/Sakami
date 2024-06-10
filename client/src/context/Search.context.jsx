import { createContext, useContext, useState } from "react";

export const searchContext = createContext();

export const useSearch = () => {
    const context = useContext(searchContext);

    if (!context) {
        throw new Error("useSearch must be used within a SearchProvider");
    }

    return context;
}

export const SearchProvider = ({ children }) => {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <searchContext.Provider value={{searchActive, setSearchActive  }}>
            {children}
        </searchContext.Provider>
    )
}

