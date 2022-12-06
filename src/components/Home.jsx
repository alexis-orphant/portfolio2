import React from "react";
import foto from "../assets/foto.jpg";

const Home = () => {
    return (
        <section className="w-screen h-screen pt-8 bg-white lg:flex lg:justify-around lg:items-center dark:text-white dark:bg-[#000015] overflow-x-hidden">
            <main className="ml-40 md:ml-64">
                <p className="font-raleway text-lg lg:text-xl font-semibold">
                    Hola, soy
                </p>
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
                    <button className="fonto-roboto text-xl font-semibold rounded-lg border-2 border-[#000015] dark:border-white hover:bg-slate-900 hover:text-white dark:hover:bg-slate-600 dark:hover:text-black hover:rounded-xl p-3 mx-auto flex items-center duration-200">
                        Ver CV
                    </button>
                </div>
            </main>
            <figure className="mx-auto w-44 lg:w-64 xl:w-80">
                <img
                    src={foto}
                    alt="Alexis Orphant"
                    className="rounded-full ml-16 md:ml-0"
                />
            </figure>
        </section>
    );
};

export default Home;
