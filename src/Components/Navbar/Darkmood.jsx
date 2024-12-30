import React from 'react'
import LightButton from '../../assets/light-mode-button.png';
import DarkButton from '../../assets/dark-mode-button.png';

const Darkmood = () => {
    const [theme, setTheme] = React.useState(() => {
        const storedTheme = localStorage.getItem("theme");
        return storedTheme ? storedTheme : "light"; // Default to 'light' if nothing is set
    });

    const element = document.documentElement;

    React.useEffect(() => {
        // Update localStorage and apply the theme to the document
        localStorage.setItem("theme", theme);

        if (theme === "dark") {
            element.classList.add("dark");
            element.classList.remove("light");
        } else {
            element.classList.add("light");
            element.classList.remove("dark");
        }
    }, [theme]); // Runs whenever the theme changes

    return (
        <div className="relative">
            {/* Light Mode Button */}
            {theme === 'light' && (
                <img
                    onClick={() => setTheme('dark')}
                    src={LightButton}
                    alt="Light Mode Button"
                    className="w-12 h-12 cursor-pointer absolute top-0 right-0 z-10 transition-opacity duration-300"
                />
            )}

            {/* Dark Mode Button */}
            {theme === 'dark' && (
                <img
                    onClick={() => setTheme('light')}
                    src={DarkButton}
                    alt="Dark Mode Button"
                    className="w-12 h-12 cursor-pointer absolute top-0 right-0 z-10 transition-opacity duration-300"
                />
            )}
        </div>
    );
};

export default Darkmood;
