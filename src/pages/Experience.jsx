import React from "react";
import {FaEye} from "react-icons/fa";

function Experiences() {
    return (
        <div className="font-poppins">
            {/* Section Experience */}
            <section className="py-12 bg-white-smoke">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-dark-purple">Mes Expériences Professionnelles</h2>
                    <div className="mt-6 flex flex-col space-y-8">
                        <div className="timeline-item flex flex-col items-center">
                            <div className="date bg-burnt-orange text-white p-2 rounded-full">Juillet 2023 - Juillet
                                2024
                            </div>
                            <div className="description mt-2 text-slate-gray">
                                <h3 className="font-semibold text-dark-purple">Assistant d'Exploitation</h3>
                                <p>Avignon Tourisme, Avignon (84)</p>
                                <p>Accueil et orientation des visiteurs dans le Palais des Papes d'Avignon.</p>
                                <p>Saisons Estivales de 2023 à 2024 (juillet) et Saison Hivernale de 2023 (vacances de
                                    Noël).</p>
                            </div>
                        </div>
                        <div className="timeline-item flex flex-col items-center">
                            <div className="date bg-burnt-orange text-white p-2 rounded-full">Avril 2024 - Juin 2024</div>
                            <div className="description mt-2 text-slate-gray">
                                <h3 className="font-semibold text-dark-purple">Stagiaire en Développement Informatique</h3>
                                <p>GCSMS ISI, Grabels (34)</p>
                                <p>Refactoring et développement de code VBA dans des classeurs Excel.</p>
                                <p>Stage de fin de deuxième année du BUT Informatique.</p>
                            </div>
                        </div>
                        <div className="timeline-item flex flex-col items-center">
                            <div className="date bg-burnt-orange text-white p-2 rounded-full">Octobre 2024 - Aujourd'hui</div>
                            <div className="description mt-2 text-slate-gray">
                                <h3 className="font-semibold text-dark-purple">Alternant en Informatique</h3>
                                <p>OPenIG, Montpellier (34)</p>
                                <p>Configuration et l'administration d'un serveur d'authentification unique basé sur
                                    LDAP dans un environnement Linux.</p>
                                <p>Alternance de troisième année du BUT Informatique.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-9 mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-dark-purple">Mes Engagements Bénévoles</h2>
                    <div className="mt-6 flex flex-col space-y-8">
                        <div className="timeline-item flex flex-col items-center">
                            <div className="date bg-burnt-orange text-white p-2 rounded-full">Mars 2023 - Avril 2024</div>
                            <div className="description mt-2 text-slate-gray">
                                <h3 className="font-semibold text-dark-purple">Vice-Président</h3>
                                <p>BDE Informatique, IUT Montpellier-Sète (34)</p>
                                <p>Implication dans la vie étudiante du département Informatique de l'IUT de
                                    Montpellier.</p>
                                <p>En parallèle avec le BUT Informatique.</p>
                            </div>
                        </div>
                        <div className="timeline-item flex flex-col items-center">
                            <div className="date bg-burnt-orange text-white p-2 rounded-full">Août 2024 - Aujourd'hui</div>
                            <div className="description mt-2 text-slate-gray">
                                <h3 className="font-semibold text-dark-purple">Community Manager</h3>
                                <p>HOPES, à distance</p>
                                <p>Développement de l'image de l'association sur les réseaux sociaux, création de
                                    contenu et élaboration d'une stratégie de communication.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <a
                        href="./documents/CV-CONSTANTIN-Leo.pdf"
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

export default Experiences;