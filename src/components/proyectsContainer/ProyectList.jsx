import React from "react";
import Proyect from "./proyectsDetail/proyects/Proyect";

const ProyectList = ({ data, modal, setModal, setModalData }) => {
    return (
        <main className="ml-48 md:ml-64 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4 px-8">
            {data.map((p) => {
                return (
                    <Proyect
                        p={p}
                        key={p.id}
                        modal={modal}
                        setModal={setModal}
                        setModalData={setModalData}
                    />
                );
            })}
        </main>
    );
};

export default ProyectList;
