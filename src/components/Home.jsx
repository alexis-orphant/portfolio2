import React from "react";
import foto from "../assets/foto.jpg";

const Home = () => {
    return (
        <section className="w-screen h-screen pt-8 bg-white lg:flex lg:justify-around lg:items-center dark:text-white dark:bg-[#000015] overflow-x-hidden">
            <main className="ml-48 md:ml-64">
                <p className="font-raleway text-lg lg:text-xl font-semibold">Hola, soy</p>
                <h1 className="font-raleway italic font-semibold text-2xl lg:text-6xl py-2">
                    Alexis Orphant
                </h1>
                <h3 className="font-roboto font-semibold italic text-xl  lg:text-3xl text-rose-700 border-white dark:border-black after:bg-white dark:after:bg-[#000015]">
                    Desarrollador Front-End
                </h3>
                <p className="max-w-[500px] mt-4 font-roboto text-xs sm:text-sm lg:text-lg">
                    Estoy en busca de mi primer experiencia laboral en el área
                    IT como Desarrollador Front-End.{" "}
                </p>
                <p className="max-w-[500px] font-roboto text-xs sm:text-sm lg:text-lg">
                    Tengo experiencia en ventas, atención al cliente y como
                    entrenador de basquet.
                </p>
                <p className="max-w-[500px] font-roboto text-xs sm:text-sm lg:text-lg">
                    Se trabajar en equipo, soy responsable, respetuoso,
                    proactivo, me adapto a los cambios y tengo buenas relaciones
                    interpersonales
                </p>
                <div className="py-4 lg:mt-6">
                    <button className="font-roboto text-lg lg:text-2xl bg-neutral-200 p-2 rounded-xl shadow-xl shadow-black hover:shadow-2xl hover:shadow-black hover:bg-black hover:text-white hover:scale-125 dark:bg-slate-900 dark:hover:bg-white dark:hover:text-black dark:shadow-white/25 dark:hover:shadow-white duration-200">
                        Ver CV
                    </button>
                </div>
            </main>
            <figure className="mx-auto w-44 lg:w-64 xl:w-80">
                <img src={foto} alt="Alexis Orphant" className="rounded-full ml-16 md:ml-0" />
            </figure>
        </section>
    );
};

export default Home;
