import React, { useContext } from "react";

export const themes = {
    light: {
        color: "#000",
        stroke: "#000",
        strokeIcon: "#b1b1b1",
        colorPale: "#B1B1B1",
        backgroundProgressBar: "#d9d9d9",
        background: "#fff",
        backgroundBurgerButton: "#000",
        backgroundLeftBar: "#F6F5F3",
        borderBottom: "1px solid #D9D9D9",
        backgroundColorPlayer: "#fff",
        backgroundTrackTitleImage: "#F6F4F4",
        strokeTrackTitleImage: "#B1B1B1",
        backgroundImageThemeSwitcher: "url('img/icon/change-theme-light.svg')",
        logoURL: "img/logo-black.png",
        filterButtonAuthor: "filter__button-author_light",
        filterButtonYear: "filter__button-year_light",
        filterButtonGenre: "filter__button-genre_light",
        playerBtnPrevNextSvg: "player__btn-prev-next-svg_light",
        playerBtnPlaySvg: "player__btn-play-svg_light",
        playerBtnSvg: "player__btn-svg_light",
        playerBtnLikeSvg: "player__btn-like-svg_light",
    },
    dark: {
        color: "#fff",
        stroke: "#fff",
        strokeIcon: "#fff",
        colorPale: "#4E4E4E",
        backgroundProgressBar: "#2e2e2e",
        background: "#181818",
        backgroundBurgerButton: "#D3D3D3",
        backgroundLeftBar: "#1C1C1C",
        borderBottom: "1px solid #4e4e4e",
        backgroundColorPlayer: "#1C1C1C",
        backgroundTrackTitleImage: "#313131",
        strokeTrackTitleImage: "#4e4e4e",
        backgroundImageThemeSwitcher: "url('img/icon/change-theme-dark.svg')",
        logoURL: "img/logo.png",
        filterButtonAuthor: "filter__button-author_dark",
        filterButtonYear: "filter__button-year_dark",
        filterButtonGenre: "filter__button-genre_dark",
        playerBtnPrevNextSvg: "player__btn-prev-next-svg_dark",
        playerBtnPlaySvg: "player__btn-play-svg_dark",
        playerBtnSvg: "player__btn-svg_dark",
        playerBtnLikeSvg: "player__btn-like-svg_dark",
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

export const playersOptions = {
    playOptions: {
        playerStatus: "visible",
        statusChange: "status-change",
    },
    stopOptions: {
        playerStatus: "hidden",
        statusChange: "status-change#",
    },
    playAgainOptions: {
        playerStatus: "visible",
        statusChange: "status-change#",
    },
};

export const PlayerContext = React.createContext({
    playersOption: playersOptions.stopOptions,
    togglePlayer: () => {},
});

export const usePlayerContext = () => {
    const playersOption = useContext(PlayerContext);

    if (!playersOption) return playersOption.stopOptions;

    return playersOption;
};
