import React from "react";

const About = () => {
    return (
        <section className="w-screen h-screen bg-white dark:text-white dark:bg-[#000015] overflow-x-hidden">
            <main className="ml-48 md:ml-64">
                <h2 className="font-roboto text-2xl lg:text-4xl italic py-4">
                    Educación / Cursos
                </h2>
                <ul className="py-4">
                    <li className="grid md:grid-cols-2 items-center border-l-2 lg:border-l-4 border-pink-600 text-center">
                        <div className="text-lg lg:text-2xl font-roboto font-semibold lg:py-2">
                            <p>Bachiller en Ciencias Sociales</p>
                        </div>
                        <div className="max-w-[300px]">
                            <p className="text-sm lg:text-lg font-roboto">
                                Escuela Secundaria "Nuestra Señora de la
                                Merced". Finalizado en 2016
                            </p>
                        </div>
                    </li>

                    <li className="my-6 grid md:grid-cols-2 items-center border-l-2 lg:border-l-4 border-pink-600 text-center">
                        <div className="text-lg lg:text-2xl font-roboto font-semibold lg:py-2">
                            <p>Curso de Desarrollo web</p>
                        </div>
                        <div className="max-w-[300px]">
                            <p className="text-sm lg:text-lg font-roboto">
                                CoderHouse. Mar. 2022 - May. 2022. (HTML 5, CSS
                                3, SASS, Git, GitHub, Bootstrap)
                            </p>
                        </div>
                    </li>

                    <li className="my-6 grid md:grid-cols-2 items-center border-l-2 lg:border-l-4 border-pink-600 text-center">
                        <div className="text-lg lg:text-2xl font-roboto font-semibold lg:py-2">
                            <p>Curso de JavaScript</p>
                        </div>
                        <div className="max-w-[300px]">
                            <p className="text-sm lg:text-lg font-roboto">
                                CoderHouse. May. 2022 - Jul. 2022
                            </p>
                        </div>
                    </li>

                    <li className="my-6 grid md:grid-cols-2 items-center border-l-2 lg:border-l-4 border-pink-600 text-center">
                        <div className="text-lg lg:text-2xl font-roboto font-semibold lg:py-2">
                            <p>Curso de JavaScript</p>
                        </div>
                        <div className="max-w-[300px]">
                            <p className="text-sm lg:text-lg font-roboto">
                                OpentBootcamp. Ago. 2022 - Sept. 2022
                            </p>
                        </div>
                    </li>

                    <li className="my-6 grid md:grid-cols-2 items-center border-l-2 lg:border-l-4 border-pink-600 text-center">
                        <div className="text-lg lg:text-2xl font-roboto font-semibold lg:py-2">
                            <p>Inglés</p>
                        </div>
                        <div className="max-w-[300px]">
                            <p className="text-sm lg:text-lg font-roboto">
                                Escuela de inglés. Oct. 2022 - Actualmente
                                estudiando
                            </p>
                        </div>
                    </li>

                    <li className="my-6 grid md:grid-cols-2 items-center border-l-2 lg:border-l-4 border-pink-600 text-center">
                        <div className="text-lg lg:text-2xl font-roboto font-semibold lg:py-2">
                            <p>Curso de React JS</p>
                        </div>
                        <div className="max-w-[300px]">
                            <p className="text-sm lg:text-lg font-roboto">
                                CoderHouse. Oct. 2022 - Nov. 2022
                            </p>
                        </div>
                    </li>
                </ul>
            </main>
        </section>
    );
};

export default About;
