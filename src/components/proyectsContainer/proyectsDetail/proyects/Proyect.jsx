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
                        setModalData(p);
                    }}
                    className="fonto-roboto text-xl font-semibold rounded-lg border-2 border-[#000015] dark:border-white hover:bg-slate-900 hover:text-white dark:hover:bg-slate-600 dark:hover:text-black hover:rounded-xl p-3 mx-auto flex items-center duration-200"
                >
                    Ver Más
                </button>
            </div>
        </div>
    );
};

export default Proyect;
