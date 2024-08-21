// themeStyles.ts

export const getThemeStyles = (theme: boolean) => {
    return {
      backgroundColor: theme ? "bg-gray-100" : "bg-gray-900",
      textColor: theme ? "text-black" : "text-white",
    };
  };
  