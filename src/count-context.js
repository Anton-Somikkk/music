import React, { useContext } from "react";

export const themes = {
    light: {
        color: "#000",
        stroke: "#000",
        colorPale: "#B1B1B1",
        background: "#fff",
        backgroundBurgerButton: "#000",
        backgroundLeftBar: "#F6F5F3",
        borderBottom: "1px solid #D9D9D9",
        backgroundColorPlayer: "#fff",
        backgroundTrackTitleImage: "#F6F4F4",
        strokeTrackTitleImage: "#B1B1B1",
        playerButtons: "#B1B1B1",
        backgroundImageThemeSwitcher: "url('img/icon/change-theme-light.svg')",
        logoURL: "img/logo-black.png",
        filterButtonAuthor: "filter__button-author__light",
        filterButtonYear: "filter__button-year__light",
        filterButtonGenre: "filter__button-genre__light",
    },
    dark: {
        color: "#fff",
        stroke: "#fff",
        colorPale: "#4E4E4E",
        background: "#181818",
        backgroundBurgerButton: "#D3D3D3",
        backgroundLeftBar: "#1C1C1C",
        borderBottom: "1px solid #4e4e4e",
        backgroundColorPlayer: "#1C1C1C",
        backgroundTrackTitleImage: "#313131",
        strokeTrackTitleImage: "#4e4e4e",
        playerButtons: "#4d9d9d9",
        backgroundImageThemeSwitcher: "url('img/icon/change-theme-dark.svg')",
        logoURL: "img/logo.png",
        filterButtonAuthor: "filter__button-author__dark",
        filterButtonYear: "filter__button-year__dark",
        filterButtonGenre: "filter__button-genre__dark",
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
