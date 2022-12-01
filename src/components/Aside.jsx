import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
    FaHome,
    FaRegFolder,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";
import { BsFillTelephoneFill, BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdSchool } from "react-icons/io";

const Aside = () => {
    return (
        <aside className="text-black h-screen w-32 md:w-52 bg-slate-100 absolute  dark:text-neutral-300 dark:bg-slate-800">
            <Link to="/">
                <h2 className="text-center font-cursive text-2xl font-bold py-4">
                    A.O
                </h2>
            </Link>
            <ul className="pt-16">
                <li>
                    <NavLink
                        to="/"
                        className="flex md:justify-start items-center pl-2 md:pl-3 md:py-2"
                    >
                        <FaHome size={30} />
                        <h4 className="pl-2 font-roboto text-sm md:text-xl font-semibold">
                            Inicio
                        </h4>
                    </NavLink>
                </li>
                <li className="py-2">
                    <NavLink
                        to="/about"
                        className="flex md:justify-start items-center pl-2 md:pl-3 md:py-2"
                    >
                        <IoMdSchool size={30} />
                        <h4 className="pl-2 font-roboto text-sm md:text-xl font-semibold">
                            Edcucación
                        </h4>
                    </NavLink>
                </li>
                <li className="py-2">
                    <NavLink
                        to="/skills"
                        className="flex md:justify-start items-center pl-2 md:pl-3 md:py-2"
                    >
                        <BsFillPersonLinesFill size={30} />
                        <h4 className="pl-2 font-roboto text-sm md:text-xl font-semibold">
                            Habilidades
                        </h4>
                    </NavLink>
                </li>
                <li className="py-2">
                    <NavLink
                        to="/proyects"
                        className="flex md:justify-start items-center pl-2 md:pl-3 md:py-2"
                    >
                        <FaRegFolder size={30} />
                        <h4 className="pl-2 font-roboto text-sm md:text-xl font-semibold">
                            Proyectos
                        </h4>
                    </NavLink>
                </li>
                <li className="py-2">
                    <NavLink
                        to="/contact"
                        className="flex md:justify-start items-center pl-2 md:pl-3 md:py-2"
                    >
                        <BsFillTelephoneFill size={30} />
                        <h4 className="pl-2 font-roboto text-sm md:text-xl font-semibold">
                            Contacto
                        </h4>
                    </NavLink>
                </li>
            </ul>

            <ul className="absolute w-full bottom-0">
                <li className="flex justify-between items-center px-3 py-2 bg-blue-700">
                    <a
                        className="flex justify-between items-center w-full text-white font-roboto text-sm md:text-xl"
                        href="https://www.linkedin.com/in/alexis-orphant-247877234/"
                        target="_blank"
                    >
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className="flex justify-between items-center px-3 py-2 bg-slate-900">
                    <a
                        className="flex justify-between items-center w-full text-white font-roboto text-sm md:text-xl"
                        href="https://github.com/alexis-orphant"
                        target="_blank"
                    >
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
                <li className="flex justify-between items-center px-3 py-2 bg-red-700">
                    <a
                        className="flex justify-between items-center w-full text-white font-roboto text-sm md:text-xl"
                        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=alecne99@gmail.com"
                        target="_blank"
                    >
                        E-Mail <HiOutlineMail size={30} />
                    </a>
                </li>
            </ul>
        </aside>
    );
};

export default Aside;
