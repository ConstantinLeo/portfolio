import React from "react";

function Projects() {
    return (
        <div className="font-poppins">
            {/* Section Projets */}
            <section className="py-12 bg-white-smoke">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-dark-purple">Mes Projets</h2>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div
                            className="project-card relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-dark-purple font-semibold">Les Aventuriers du Rail</h3>
                            <p className="text-slate-gray mt-2">[EN COURS DE REDACTION...]</p>
                            <div
                                className="overlay absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <p className="p-4">[BIENTOT DISPONIBLE]</p>
                            </div>
                        </div>
                        <div
                            className="project-card relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-dark-purple font-semibold">Application sécurisée d’enchères à plis fermés</h3>
                            <p className="text-slate-gray mt-2">[EN COURS DE REDACTION...]</p>
                            <div
                                className="overlay absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <p className="p-4">[BIENTOT DISPONIBLE]</p>
                            </div>
                        </div>
                        <div
                            className="project-card relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-dark-purple font-semibold">Escape Game</h3>
                            <p className="text-slate-gray mt-2">[EN COURS DE REDACTION...]</p>
                            <div
                                className="overlay absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <p className="p-4">[BIENTOT DISPONIBLE]</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects;