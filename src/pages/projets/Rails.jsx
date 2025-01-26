function Rails() {
    return (
        <div className="font-poppins py-12 bg-white-smoke min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-dark-purple mb-6">
                    Les Aventuriers du Rail
                </h1>
                <p className="text-lg text-slate-gray mb-4">
                    Ce projet avait pour objectif de développer les fonctionnalités et l'interface graphique d'un jeu de
                    société célèbre : Les Aventuriers du Rail.
                </p>
                <p className="text-lg text-slate-gray mb-6">
                    Divisé en trois phases distinctes, nous devions coopérer par binôme afin d'obtenir un résultat
                    concret.
                </p>
                <h2 className="text-2xl font-semibold text-dark-purple mb-4">
                    Les trois phases successives
                </h2>
                <ul className="list-disc list-inside text-slate-gray mb-6 space-y-2">
                    <li>Phase 1 : Développement de la mécanique du jeu en Java.</li>
                    <li>Phase 2 : Mise en œuvre des algorithmes de graphes afin de définir des stratégies de jeu pour
                        les joueurs.
                    </li>
                    <li>Phase 3 : Implémentation d'une interface graphique sous JavaFX (suite logique de la phase 1).
                    </li>
                </ul>
                <h2 className="text-2xl font-semibold text-dark-purple mb-4">
                    Explication du jeu développé
                </h2>
                <p className="text-lg text-slate-gray mb-4">
                    Les Aventuriers du Rail est un jeu de société où les joueurs s'affrontent pour construire des lignes de train reliant différentes villes sur une carte.
                    Chaque joueur reçoit des cartes de wagons de différentes couleurs et doit les utiliser pour compléter des itinéraires spécifiques entre des villes, tout en essayant de bloquer les autres joueurs.
                </p>
                <p className="text-lg text-slate-gray mb-4">
                    Le but du jeu est de marquer un maximum de points, en réalisant des routes longues, en complétant des objectifs secrets et en connectant des villes.
                    Plus les itinéraires sont longs, plus ils rapportent de points. Mais il faut aussi faire attention aux stratégies des autres joueurs pour ne pas se faire devancer.
                </p>
                <div className="mb-6">
                    <img
                        src=".././images/interface-jeu-rails.png"
                        alt="[IMAGE INTERFACE DU JEU]"
                        className="rounded-lg w-full h-auto object-contain"
                    />
                </div>
                <h2 className="text-2xl font-semibold text-dark-purple mb-4">
                    Défis techniques rencontrés
                </h2>
                <p className="text-lg text-slate-gray mb-6">
                    Ce projet s'est déroulé à la fin de ma première année de BUT Informatique. Ainsi, je débutais avec
                    le langage de programmation Java que je venais de découvrir en début d'année.
                    Pourtant, j'avais les bases algorithmiques, acquises au Lycée en Numériques et Sciences
                    Informatiques (NSI). Il a fallu alors assimiler rapidement la syntaxe de Java pour développer
                    correctement
                    les fonctionnalités du jeu.
                </p>
                <h2 className="text-2xl font-semibold text-dark-purple mb-4">
                    Ce que ce projet m’a apporté
                </h2>
                <p className="text-lg text-slate-gray mb-4">
                    Ce projet m'a permis de m'améliorer en développement d'applications et en logique algorithmique.
                    A travers les trois phases de ce projets, j'ai pu m'approprier le langage de programmation Java, afin de répondre aux exigences du client.
                </p>
                <p className="text-lg text-slate-gray">
                    De plus, j'ai vraiment appris à collaborer avec une personne dans un projet de développement Informatique.
                </p>
            </div>
        </div>
    );
}

export default Rails;