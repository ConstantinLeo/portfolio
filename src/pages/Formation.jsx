import React from "react";
import {FaEye} from "react-icons/fa";

function Formation() {
    return (
        <div className="font-poppins">
            {/* Section Formation */}
            <section className="py-12 bg-white-smoke">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-dark-purple">Ma Formation</h2>
                    <div className="mt-6 flex flex-col space-y-8">
                        <div className="timeline-item flex flex-col items-center">
                            <div className="date bg-burnt-orange text-white p-2 rounded-full">2019 - 2022</div>
                            <div className="description mt-2 text-slate-gray">
                                <h3 className="font-semibold text-dark-purple">Baccalauréat Général</h3>
                                <p>Lycée Jean Vilar, Villeneuve-lès-Avignon</p>
                                <p>Spécialités Mathématiques & Numériques et Sciences Informatiques</p>
                                <p>Options Mathématiques Expertes & Italien</p>
                                <p>Mention Bien</p>
                            </div>
                        </div>
                        <div className="timeline-item flex flex-col items-center">
                            <div className="date bg-burnt-orange text-white p-2 rounded-full">2022 - Aujourd'hui</div>
                            <div className="description mt-2 text-slate-gray">
                                <h3 className="font-semibold text-dark-purple">BUT Informatique - Troisième année</h3>
                                <p>IUT Montpellier-Sète, Université de Montpellier</p>
                                <p>Parcours Développement d'Applications Communicantes et Sécurisées (DACS)</p>
                                <p>Option Sport en Badminton (SUAPS)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <a
                        href="../../public/documents/CV-CONSTANTIN-Leo.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-burnt-orange text-white py-2 px-6 rounded-full hover:bg-dark-purple transition duration-300"
                    >
                        <FaEye className="mr-2" size={18}/>
                        Voir mon CV
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Formation;