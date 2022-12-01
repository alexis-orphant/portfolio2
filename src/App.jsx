import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Aside from "./components/Aside";
import Contact from "./components/Contact";
import Home from "./components/Home";
import ProyectsContainer from "./components/proyectsContainer/ProyectsContainer";
import Skills from "./components/Skills";
import ThemeSwitch from "./components/ThemeSwitch";

function App() {
    return (
        <BrowserRouter>
            <ThemeSwitch />

            <Aside />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/skills" element={<Skills />} />

                <Route path="/proyects" element={<ProyectsContainer />} />

                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
