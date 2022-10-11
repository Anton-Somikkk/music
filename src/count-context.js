import React, { useContext } from "react";

export const themes = {
    light: {
        color: "#000",
        stroke: "#000",
        colorPale: "#B1B1B1",
        background: "#F5F5F5",
        backgroundBurgerButton: "#000",
        backgroundLeftBar: "#F6F5F3",
        borderBottom: "1px solid #D9D9D9",
        borderButtonFilter: "1px solid #000",
        colorButtonFilter: "#000",
        backgroundColorPlayer: "#F5F5F5",
        backgroundTrackTitleImage: "#F6F4F4",
        strokeTrackTitleImage: "#B1B1B1",
        backgroundImageThemeSwitcher: "url('img/icon/change-theme-light.svg')",
        logoURL: "img/logo-black.png",
    },
    dark: {
        color: "#fff",
        stroke: "#fff",
        colorPale: "#4E4E4E",
        background: "#181818",
        backgroundBurgerButton: "#D3D3D3",
        backgroundLeftBar: "#1C1C1C",
        borderBottom: "1px solid #4e4e4e",
        borderButtonFilter: "1px solid #fff",
        colorButtonFilter: "#fff",
        backgroundColorPlayer: "#1C1C1C",
        backgroundTrackTitleImage: "#313131",
        strokeTrackTitleImage: "#4e4e4e",
        backgroundImageThemeSwitcher: "url('img/icon/change-theme-dark.svg')",
        logoURL: "img/logo.png",
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
