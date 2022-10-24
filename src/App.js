// eslint-disable-next-line import/no-cycle
import { useState, useMemo } from "react";
import { AppRoutes } from "./routes";
import {
    ThemeContext,
    themes,
    PlayerContext,
    playersOptions,
} from "./count-context";

function App() {
    const [currentTheme, setCurrentTheme] = useState(themes.dark);
    const [currentPlayerStatus, setCurrentPlayerStatus] = useState(
        playersOptions.stopOptions
    );

    const toggleTheme = () => {
        if (currentTheme === themes.dark) {
            setCurrentTheme(themes.light);
            return;
        }

        setCurrentTheme(themes.dark);
    };

    const togglePlayer = () => {
        if (
            currentPlayerStatus === playersOptions.stopOptions ||
            currentPlayerStatus === playersOptions.playAgainOptions
        ) {
            setCurrentPlayerStatus(playersOptions.playOptions);
            return;
        }

        if (currentPlayerStatus === playersOptions.playOptions) {
            setCurrentPlayerStatus(playersOptions.playAgainOptions);
        }
    };

    const themeContextProviderValue = useMemo(
        () => ({ theme: currentTheme, toggleTheme }),
        [{ theme: currentTheme, toggleTheme }]
    );
    const playerContextProviderValue = useMemo(
        () => ({ playersOption: currentPlayerStatus, togglePlayer }),
        [{ playersOption: currentPlayerStatus, togglePlayer }]
    );
    return (
        <ThemeContext.Provider value={themeContextProviderValue}>
            <PlayerContext.Provider value={playerContextProviderValue}>
                <AppRoutes />;
            </PlayerContext.Provider>
        </ThemeContext.Provider>
    );
}

export default App;
