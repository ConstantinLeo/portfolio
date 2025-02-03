import React from "react";
import {FaRunning, FaMusic, FaPlane, FaShieldAlt} from "react-icons/fa";

function Home() {
    return (
        <div className="font-poppins">
            {/* Section Présentation */}
            <section className="py-12 bg-white-smoke text-dark-purple text-center">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <img src="./images/Photo-CONSTANTIN-Leo.png" alt="Ma Photo" className="rounded-full h-40 w-40 mb-4 md:mb-0"/>
                        <div className="md:w-2/3">
                            <h1 className="text-3xl font-bold">Salut ! Je me présente, Léo CONSTANTIN</h1>
                            <p className="mt-4 text-lg">
                                Intéressé par l'Informatique depuis petit, j'ai toujours été curieux de découvrir et d'apprendre sans cesse dans ce domaine.
                                Je me suis alors dirigé naturellement vers un BUT Informatique à Montpellier, pour faire de ma passion un métier.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Personnalité */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
                    <div className="text-center lg:text-left lg:w-2/3">
                        <h2 className="text-2xl font-bold text-dark-purple">Ma personnalité</h2>
                        <p className="text-slate-gray mt-4 text-lg"> Avec un profil extraverti, je suis de nature
                            sociable et énergique, toujours en quête de nouvelles rencontres et d'événements marquants pour
                            me développer personnellement. Mon empathie et ma capacité à comprendre les besoins des autres
                            me poussent à créer des liens forts.</p>
                        <p className="text-slate-gray mt-4 text-lg">Mon côté intuitif me permet d'anticiper les
                            situations et de m'adapter rapidement aux imprévus afin de prendre les meilleures décisions. J'exprime mes idées avec assurance et préfère
                            souvent prendre des décisions basées sur mes valeurs, cherchant à rester fidèle à mes convictions.</p>
                        <a
                            href="https://www.16personalities.com/fr/la-personnalite-enfj"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-burnt-orange text-white mt-4 py-2 px-6 rounded-full hover:bg-dark-purple transition duration-300"
                        >
                            En savoir plus...
                        </a>

                    </div>
                    <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
                        <img
                            src="./images/personnalite.png"
                            alt="Image illustrant la personnalité"
                            className="max-w-56 h-auto rounded-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Section Objectifs */}
            <section className="py-12 bg-white-smoke">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-dark-purple">Ma vision pour la suite</h2>
                    <p className="mt-4 text-lg text-slate-gray">Mon objectif est de rejoindre l'armée française pour m'engager pleinement dans des missions humanitaires et de service public. Contribuer à des causes qui me tiennent à cœur, comme la sécurité et l'aide humanitaire, est pour moi une priorité. L'armée représente un moyen concret d’agir pour le bien-être des autres, tout en me développant personnellement en termes de dépassement de soi et d'entraide.</p>
                    <p className="mt-4 text-lg text-slate-gray">Si je me suis initialement orienté vers l'informatique, c’était par curiosité et intérết envers l'évolution du numérique et des nouvelles technologies. Cependant, ma volonté d’apporter un impact direct sur le terrain et d’être au service des autres me conduit peu à peu à choisir la voie militaire, où je pourrai allier engagement personnel et causes humanitaires.</p>
                </div>
            </section>

            {/* Section Centres d'intérêts */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-dark-purple">Mes Centres d'Intérêts</h2>
                    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="card relative">
                        <FaRunning size={48} className="mx-auto text-burnt-orange"/>
                            <div className="overlay absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                                <p>Course à pied (Semi-Marathonien)</p>
                            </div>
                        </div>
                        <div className="card relative">
                            <FaMusic size={48} className="mx-auto text-burnt-orange"/>
                            <div className="overlay absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                                <p>Danse latine (Jive, Samba, Rumba, Paso Doble, Cha Cha)</p>
                            </div>
                        </div>
                        <div className="card relative">
                            <FaPlane size={48} className="mx-auto text-burnt-orange"/>
                            <div className="overlay absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                                <p>Tourisme & Voyage</p>
                            </div>
                        </div>
                        <div className="card relative">
                            <FaShieldAlt size={48} className="mx-auto text-burnt-orange"/>
                            <div className="overlay absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                                <p>Armée Française</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;