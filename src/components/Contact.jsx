import React from "react";

const Contact = () => {
    return (
        <section className="w-screen h-screen bg-white dark:text-white dark:bg-[#000015] overflow-x-hidden">
            <form
                method="POST"
                action="https://getform.io/f/6e98881b-7459-4ceb-b0b7-4dbd06ba310b"
                className="flex flex-col max-w-[200px] md:max-w-[350px] lg:max-w-[550px] mx-auto pl-2"
            >
                <div className="pb-8">
                    <h2 className="font-roboto text-2xl lg:text-4xl italic py-4">
                        Contacto
                    </h2>
                    <p className="">
                        // Envia el formulario de abajo o contactame por{" "}
                        <span className="font-bold hover:text-blue-500 cursor-pointer">
                            <a
                                href="https://www.linkedin.com/in/alexis-orphant-247877234/"
                                target="_blank"
                            >
                                Linkedin
                            </a>
                        </span>{" "}
                        o por{" "}
                        <span className="font-bold hover:text-blue-500 cursor-pointer">
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=alecne99@gmail.com"
                                target="_blank"
                            >
                                Email
                            </a>
                        </span>
                    </p>
                </div>
                <input
                    className="my-2 p-2 bg-[#000015] dark:bg-slate-700 text-white rounded-t-lg"
                    type="text"
                    placeholder="Nombre"
                    name="name"
                />
                <input
                    className="p-2 bg-[#000015] dark:bg-slate-700 text-white"
                    type="email"
                    placeholder="Email"
                    name="email"
                />
                <textarea
                    className="bg-[#000015] my-2 p-2 dark:bg-slate-700 text-white rounded-b-lg"
                    placeholder="Mensaje"
                    name="message"
                    rows="10"
                ></textarea>
                <button className="fonto-roboto text-xl font-semibold rounded-lg border-2 border-[#000015] dark:border-white hover:bg-slate-900 hover:text-white dark:hover:bg-slate-600 dark:hover:text-black hover:rounded-xl p-3 mx-auto flex items-center duration-200">
                    Enviar
                </button>
            </form>
        </section>
    );
};

export default Contact;
