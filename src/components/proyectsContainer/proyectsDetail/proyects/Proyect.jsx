import React from "react";

const Proyect = ({ p, modal, setModal, setModalData }) => {
    const {
        imagen,
        id,
        titulo,
        teconologias,
        descripcion,
        repositorio,
        deploy,
    } = p;
    return (
        <div className="bg-slate-300 dark:bg-slate-700 font-roboto p-2 rounded-xl">
            <img src={imagen} alt={titulo} />
            <h3 className="text-center font-roboto text-2xl py-2">{titulo}</h3>
            <div className="text-center">
                <button
                    onClick={() => {
                        modal === false ? setModal(true) : setModal(false);
                        setModalData(p)
                    }}
                    className="text-xl bg-slate-700 text-white rounded-lg dark:bg-slate-400 dark:text-black p-2 hover:bg-zinc-700 dark:hover:bg-zinc-300
                                hover:rounded-xl duration-200 hover:shadow-xl hover:shadow-black"
                >
                    Ver Más
                </button>
            </div>
        </div>
    );
};

export default Proyect;
