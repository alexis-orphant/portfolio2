import React, { useEffect, useState } from "react";
import ProyectModal from "./proyectsDetail/ProyectModal";
import ProyectList from "./ProyectList";
import data from "../../data/data.json"


const ProyectsContainer = () => {
    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState([])
    


    return (
        <>
            <section className="w-screen h-screen bg-white dark:text-white dark:bg-[#000015]">
                <h2 className="ml-48 md:ml-64 text-4xl italic font-roboto py-2">
                    Proyectos
                </h2>
                <ProyectList
                    data={data}
                    modal={modal}
                    setModal={setModal}
                    setModalData={setModalData}
                />
                {modal === true ? (
                    <ProyectModal modalData={modalData} setModal={setModal} />
                ) : (
                    ""
                )}
            </section>
        </>
    );
};

export default ProyectsContainer;
