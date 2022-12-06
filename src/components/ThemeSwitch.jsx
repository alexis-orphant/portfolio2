import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeSwitch = () => {
    const [theme, settheme] = useState("light");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleSwitch = () => {
        settheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className="">
            <h3 className="text-center font-roboto font-semibold text-xl">{theme === "dark" ? "Tema claro" : "Tema oscuro"}</h3>
            {theme === "dark" ? (
                <FaSun
                    onClick={handleSwitch}
                    size={32}
                    className="text-yellow-400 cursor-pointer mx-auto"
                />
            ) : (
                <FaMoon
                    onClick={handleSwitch}
                    size={32}
                    className="text-black mx-auto"
                />
            )}
        </div>
    );
};

export default ThemeSwitch;
