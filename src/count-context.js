import React, { useContext } from "react";

export const themes = {
    light: {
        color: "#000",
        colorPale: "#B1B1B1",
        background: "#fff",
        backgroundBurgerButton: "#000",
        backgroundLeftBar: "#F6F5F3 ",
        backgroundImageThemeSwitcher: "url('img/icon/change-theme-light.svg')",
    },
    dark: {
        color: "#fff",
        colorPale: "#4E4E4E",
        background: "#181818",
        backgroundBurgerButton: "#D3D3D3",
        backgroundLeftBar: "#1C1C1C",
        backgroundImageThemeSwitcher: "url('img/icon/change-theme-dark.svg')",
    },
};

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
});

export const useThemeContext = () => {
    const theme = useContext(ThemeContext);

    if (!theme) return theme.dark;

    return theme;
};
