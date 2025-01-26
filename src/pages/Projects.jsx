import React from "react";
import {Link} from "react-router-dom";

function Projects() {
    return (
        <div className="font-poppins">
            {/* Section Projets */}
            <section className="py-12 bg-white-smoke">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-dark-purple mb-8 text-center">
                        Mes Projets
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Link
                            to="/projets/rails"
                            className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
                        >
                            <img
                                src="./images/plateau-jeu-rails.png"
                                alt="[IMAGE APERCU JEU RAILS]"
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-dark-purple group-hover:text-burnt-orange transition duration-300">
                                    Les Aventuriers du Rail
                                </h3>
                                <p className="text-slate-gray mt-2">
                                    Développement du célèbre jeu de société
                                </p>
                            </div>
                        </Link>
                        <Link
                            to="/projets/encheres"
                            className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
                        >
                            <img
                                src="./images/interface-encherisseur.png"
                                alt="[IMAGE APERCU APPLICATION ENCHERES]"
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-dark-purple group-hover:text-burnt-orange transition duration-300">
                                    Application sécurisée d'enchères à plis fermés
                                </h3>
                                <p className="text-slate-gray mt-2">
                                    Développement et sécurisation d'une application d'enchères
                                </p>
                            </div>
                        </Link>
                        <Link
                            to="/projets/escapegame"
                            className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
                        >
                            <img
                                src="./images/affiche-escapegame.jpg"
                                alt="[IMAGE APERCU ESCAPEGAME]"
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-dark-purple group-hover:text-burnt-orange transition duration-300">
                                    Escape Game
                                </h3>
                                <p className="text-slate-gray mt-2">
                                    Conception et communication d'un Escape Game
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects;