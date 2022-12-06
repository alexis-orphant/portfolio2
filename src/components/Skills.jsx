import React from "react";
import {
    SiFirebase,
    SiJavascript,
    SiTailwindcss,
    SiVite,
} from "react-icons/si";
import { FaCss3Alt, FaGithub, FaHtml5, FaReact } from "react-icons/fa"
import {DiGit} from "react-icons/di"


const Skills = () => {
    return (
        <section className="w-screen h-screen bg-white dark:text-white dark:bg-[#000015] overflow-x-hidden">
            <main className="ml-48 md:ml-64 py-4">
                <h2 className="font-roboto italic text-2xl lg:text-4xl pt-12 lg:pt-4">
                    Habilidades Técnicas
                </h2>
                <ul className="items-center grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mt-6 lg:mt-10">
                    <li className="pt-4">
                        <FaReact size={80} className="text-[#61DBFB] mx-auto" />
                        <h3 className="font-roboto text-xl text-center">
                            REACT JS
                        </h3>
                    </li>
                    <li className="pt-4">
                        <img
                            src="https://vitejs.dev/logo-with-shadow.png"
                            alt="vite js logo"
                            className="w-20 mx-auto"
                        />
                        <h3 className="font-roboto text-xl text-center">
                            Vite
                        </h3>
                    </li>
                    <li className="pt-4">
                        <SiJavascript
                            size={80}
                            className="text-yellow-400 mx-auto"
                        />
                        <h3 className="font-roboto text-xl text-center">
                            JavaScript
                        </h3>
                    </li>
                    <li className="pt-4">
                        <FaHtml5 size={80} className="text-[#e34c26] mx-auto" />
                        <h3 className="font-roboto text-xl text-center">
                            HTML 5
                        </h3>
                    </li>
                    <li className="pt-4">
                        <FaCss3Alt
                            size={80}
                            className="text-[#2965f1] mx-auto"
                        />
                        <h3 className="font-roboto text-xl text-center">
                            CSS 3
                        </h3>
                    </li>
                    <li className="pt-4">
                        <SiTailwindcss
                            size={80}
                            className="text-[#38bdf8] mx-auto"
                        />
                        <h3 className="font-roboto text-xl text-center">
                            Tailwind CSS
                        </h3>
                    </li>
                    <li className="pt-4">
                        <SiFirebase
                            size={80}
                            className="text-[#FFA611] mx-auto"
                        />
                        <h3 className="font-roboto text-xl text-center">
                            Firebase
                        </h3>
                    </li>
                    <li className="pt-4">
                        <FaGithub
                            size={80}
                            className="text-black dark:text-white mx-auto"
                        />
                        <h3 className="font-roboto text-xl text-center">
                            GitHub
                        </h3>
                    </li>
                    <li className="pt-4">
                        <DiGit size={80} className="text-[#f34f29] mx-auto" />
                        <h3 className="font-roboto text-xl text-center">Git</h3>
                    </li>
                </ul>
            </main>
        </section>
    );
};

export default Skills;
