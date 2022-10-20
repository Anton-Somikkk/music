// eslint-disable-next-line import/no-cycle
import { useState, useMemo } from "react";
import { AppRoutes } from "./routes";
import { ThemeContext, themes } from "./count-context";

function App() {
    const [currentTheme, setCurrentTheme] = useState(themes.dark);

    const toggleTheme = () => {
        if (currentTheme === themes.dark) {
            setCurrentTheme(themes.light);
            return;
        }

        setCurrentTheme(themes.dark);
    };

    const themeContextProviderValue = useMemo(
        () => ({ theme: currentTheme, toggleTheme }),
        [{ theme: currentTheme, toggleTheme }]
    );
    return (
        <ThemeContext.Provider value={themeContextProviderValue}>
            <AppRoutes />;
        </ThemeContext.Provider>
    );
}

export default App;
