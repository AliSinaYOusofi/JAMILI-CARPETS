"use client";

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

// Define the shape of the context
type AppContextType = {
    theme: boolean;
    setTheme:  Dispatch<SetStateAction<boolean>>
};

// Create the context with an initial value
export const appContext = createContext<AppContextType | undefined>(undefined);

type NextContextProviderProps = {
    children: ReactNode;
};

const NextContextProvider = ({ children }: NextContextProviderProps) => {
    const [theme, setTheme] = useState<boolean>(true); // dark theme

    return (
        <appContext.Provider value={{ theme, setTheme }}>
            {children}
        </appContext.Provider>
    );
};

// Custom hook to use the context
export const useNextContext = () => {
    const context = useContext(appContext);
    if (context === undefined) {
        throw new Error("useNextContext must be used within a NextContextProvider");
    }
    return context;
};

export default NextContextProvider;
