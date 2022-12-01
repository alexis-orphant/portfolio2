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
        <div className="flex justify-end pr-5 pt-5 absolute top-0 right-0 ">
            {theme === "dark" ? (
                <FaSun
                    onClick={handleSwitch}
                    size={32}
                    className="text-yellow-400 cursor-pointer"
                />
            ) : (
                <FaMoon
                    onClick={handleSwitch}
                    size={32}
                    className="text-black"
                />
            )}
        </div>
    );
};

export default ThemeSwitch;
