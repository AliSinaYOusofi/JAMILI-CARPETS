// themeStyles.ts

export const getThemeStyles = (theme: boolean) => {
    return {
        backgroundColor: theme ? "bg-gray-100" : "bg-gray-900",
        textColor: theme ? "text-black" : "text-white",
        hoverOnNavItemsMobile: theme
            ? "hover:text-gray-800 hover:bg-gray-300 transition duration-300 ease-in-out"
            : "hover:text-gray-200 hover:bg-gray-300 transition duration-300 ease-in-out"
        ,
        iconHover: "hover:-translate-y-1 transform transition duration-300 ease-in-out"
    };    
};
  