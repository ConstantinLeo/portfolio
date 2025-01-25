import {FaEye} from "react-icons/fa";

function Formation() {
    return (
        <div className="font-poppins">
            {/* Section Formation */}
            <section className="py-12 bg-white-smoke">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-dark-purple">Ma formation</h2>
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
                {/* Section compétences */}
                <div className="container mt-9 mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-dark-purple">Mes compétences</h2>
                    <div className="mt-6 flex flex-col lg:flex-row gap-8">
                        {/* Savoir-être */}
                        <div className="lg:w-1/2 bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-burnt-orange text-center">Savoir-être</h3>
                            <div className="flex flex-wrap justify-center gap-3 mt-4">
                                <span className="bg-dark-purple hover:bg-burnt-orange text-white px-4 py-2 rounded-full text-sm transition-transform duration-300 hover:scale-110">Adaptabilité</span>
                                <span className="bg-dark-purple hover:bg-burnt-orange text-white px-4 py-2 rounded-full text-sm transition-transform duration-300 hover:scale-110">Communication efficace</span>
                                <span className="bg-dark-purple hover:bg-burnt-orange text-white px-4 py-2 rounded-full text-sm transition-transform duration-300 hover:scale-110">Esprit d'équipe</span>
                                <span className="bg-dark-purple hover:bg-burnt-orange text-white px-4 py-2 rounded-full text-sm transition-transform duration-300 hover:scale-110">Autonomie</span>
                                <span className="bg-dark-purple hover:bg-burnt-orange text-white px-4 py-2 rounded-full text-sm transition-transform duration-300 hover:scale-110">Rigueur</span>
                            </div>
                        </div>
                        {/* Savoir-faire */}
                        <div className="lg:w-1/2 bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-burnt-orange text-center">Savoir-faire</h3>
                            <div className="mt-4 grid grid-cols-2 gap-4">
                                {/* Développement Frontend */}
                                <div>
                                    <h4 className="text-lg font-semibold text-dark-purple">Développement Front-End</h4>
                                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                                        <span className="bg-dark-purple hover:bg-burnt-orange text-white px-3 py-1 rounded-full text-sm transition-transform duration-300 hover:scale-110">HTML</span>
                                        <span className="bg-dark-purple hover:bg-burnt-orange text-white px-3 py-1 rounded-full text-sm transition-transform duration-300 hover:scale-110">CSS</span>
                                        <span className="bg-dark-purple hover:bg-burnt-orange text-white px-3 py-1 rounded-full text-sm transition-transform duration-300 hover:scale-110">JavaScript</span>
                                        <span className="bg-dark-purple hover:bg-burnt-orange text-white px-3 py-1 rounded-full text-sm transition-transform duration-300 hover:scale-110">React</span>
                                        <span className="bg-dark-purple hover:bg-burnt-orange text-white px-3 py-1 rounded-full text-sm transition-transform duration-300 hover:scale-110">Tailwind CSS</span>
                                        <span className="bg-dark-purple hover:bg-burnt-orange text-white px-3 py-1 rounded-full text-sm transition-transform duration-300 hover:scale-110">Vite</span>
                                    </div>
                                </div>
                                {/* Développement Backend */}
                                <div>
                                    <h4 className="text-lg font-semibold text-dark-purple">Développement Back-End</h4>
                                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                                        <span className="bg-dark-purple hover:bg-burnt-orange text-white px-3 py-1 rounded-full text-sm transition-transform duration-300 hover:scale-110">Java</span>
                                        <span className="bg-dark-purple hover:bg-burnt-orange text-white px-3 py-1 rounded-full text-sm transition-transform duration-300 hover:scale-110">PHP</span>
                                        <span className="bg-dark-purple hover:bg-burnt-orange text-white px-3 py-1 rounded-full text-sm transition-transform duration-300 hover:scale-110">PostgreSQL</span>
                                        <span className="bg-dark-purple hover:bg-burnt-orange text-white px-3 py-1 rounded-full text-sm transition-transform duration-300 hover:scale-110">Docker</span>
                                        <span className="bg-dark-purple hover:bg-burnt-orange text-white px-3 py-1 rounded-full text-sm transition-transform duration-300 hover:scale-110">Git</span>
                                        <span className="bg-dark-purple hover:bg-burnt-orange text-white px-3 py-1 rounded-full text-sm transition-transform duration-300 hover:scale-110">LDAP</span>
                                    </div>
                                </div>
                                {/* Systèmes & Réseaux */}
                                <div>
                                    <h4 className="text-lg font-semibold text-dark-purple">Systèmes & Réseaux</h4>
                                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                                        <span className="bg-dark-purple hover:bg-burnt-orange text-white px-3 py-1 rounded-full text-sm transition-transform duration-300 hover:scale-110">Linux</span>
                                        <span className="bg-dark-purple hover:bg-burnt-orange text-white px-3 py-1 rounded-full text-sm transition-transform duration-300 hover:scale-110">HyperV</span>
                                        <span className="bg-dark-purple hover:bg-burnt-orange text-white px-3 py-1 rounded-full text-sm transition-transform duration-300 hover:scale-110">GNS3</span>
                                        <span className="bg-dark-purple hover:bg-burnt-orange text-white px-3 py-1 rounded-full text-sm transition-transform duration-300 hover:scale-110">Wireshark</span>
                                        <span className="bg-dark-purple hover:bg-burnt-orange text-white px-3 py-1 rounded-full text-sm transition-transform duration-300 hover:scale-110">Bash</span>
                                        <span className="bg-dark-purple hover:bg-burnt-orange text-white px-3 py-1 rounded-full text-sm transition-transform duration-300 hover:scale-110">SSH</span>
                                    </div>
                                </div>
                                {/* Méthodologies */}
                                <div>
                                    <h4 className="text-lg font-semibold text-dark-purple">Méthodologies</h4>
                                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                                        <span className="bg-dark-purple hover:bg-burnt-orange text-white px-3 py-1 rounded-full text-sm transition-transform duration-300 hover:scale-110">UML</span>
                                        <span className="bg-dark-purple hover:bg-burnt-orange text-white px-3 py-1 rounded-full text-sm transition-transform duration-300 hover:scale-110">Méthodes agiles</span>
                                        <span className="bg-dark-purple hover:bg-burnt-orange text-white px-3 py-1 rounded-full text-sm transition-transform duration-300 hover:scale-110">Principes SOLID</span>
                                    </div>
                                </div>
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

export default Formation;