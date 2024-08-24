// themeStyles.ts

import { useNextContext } from "@/Context/appContext";

export const getThemeStyles = () => {

    const {theme} = useNextContext()
    
    return {
        
        textColor: theme ? "text-black" : "text-white",
        hoverOnNavItemsMobile: theme
            ? "hover:text-gray-800 hover:bg-gray-300 transition duration-300 ease-in-out"
            : "hover:text-gray-200 hover:bg-gray-300 transition duration-300 ease-in-out"
        ,
        iconHover: "hover:-translate-y-1 transform transition duration-300 ease-in-out"
    };    
};
  