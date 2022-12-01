import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const ProyectModal = ({ setModal, modalData }) => {
    const {
        imagen,
        id,
        titulo,
        tecnologias,
        descripcion,
        repositorio,
        deploy,
    } = modalData;
    console.log(tecnologias);
    return (
        <div
            onClick={() => setModal(false)}
            className="absolute w-screen h-screen top-0 left-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-[1.5px] flex justify-center items-center dark:bg-[rgba(255,255,255,0.3)]"
        >
            <div className="h-auto max-w-[500px] bg-white mx-auto p-2 rounded-xl dark:text-white dark:bg-[#000015] shadow-[0_8px_40px_7px] shadow-black">
                <div className="flex justify-between p-2">
                    <h3 className="font-roboto text-2xl">{titulo}</h3>
                    <AiOutlineClose
                        className="hover:text-red-600 duration-200"
                        size={30}
                        onClick={() => setModal(false)}
                    />
                </div>
                <img src={imagen} alt="" className="mx-auto" />
                <h3 className="font-roboto text-xl">Tecnologias:</h3>
                <div className="flex justify-around">
                    {tecnologias.map((tec) => {
                        return <p key={tec} className="font-roboto italic text-lg" >{tec}</p>;
                    })}
                </div>
                <div></div>
                <h3 className="font-roboto text-xl">descripcion</h3>
                <p className="font-roboto italic text-lg">{descripcion}</p>
                <div className="text-center flex justify-around py-4">
                    <a
                        href={deploy} target="_blank"
                        className="text-xl bg-slate-700 text-white dark:bg-slate-400 dark:text-black p-2 hover:bg-green-600 dark:hover:bg-green-600 
                                hover:rounded-lg duration-200 "
                    >
                        Deploy
                    </a>
                    <a
                        href={repositorio} target="_blank"
                        className="text-xl bg-slate-700 text-white dark:bg-slate-400 dark:text-black p-2 hover:bg-green-600 dark:hover:bg-green-600 
                                hover:rounded-lg duration-200 "
                    >
                        Repositorio
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProyectModal;
