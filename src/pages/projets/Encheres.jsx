function Encheres() {
    return (
        <div className="font-poppins py-12 bg-white-smoke min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-dark-purple mb-6">
                    Application sécurisée d'enchères à plis fermés
                </h1>
                <p className="text-lg text-slate-gray mb-4">
                    Ce projet avait pour objectif de réaliser une application fonctionnelle et sécurisée, pour un
                    système d'enchères à plis fermés.
                </p>
                <p className="text-lg text-slate-gray mb-6">
                    Par groupe de quatres étudiants, nous avons utilisé les méthodes agiles dans cette Situation
                    d'Apprentissage et d'Evaluation (SAE), qui s'est étalée sur toute la deuxième année du BUT
                    Informatique,
                </p>
                <h2 className="text-2xl font-semibold text-dark-purple mb-4">
                    Explication des besoins du client
                </h2>
                <p className="text-lg text-slate-gray mb-4">
                    Dès le début du projet, nous avons été mis en situation à partir d'un besoin spécifique du client,
                    qui veut créer une application sécurisée de type client-serveur pour des enchères électroniques à
                    plis fermés.
                </p>
                <p className="text-lg text-slate-gray mb-4">
                    Le client a choisi d'utiliser un modèle particulier d'enchères, appelé "enchères au second prix" ou
                    "enchères de Vickrey".
                    Dans ce système, c’est la personne qui fait la meilleure offre qui gagne l’enchère, mais elle ne
                    paie pas son propre prix.
                    Elle paie seulement le deuxième prix le plus élevé pour obtenir l’objet.
                </p>
                <p className="text-lg text-slate-gray mb-6">
                    L’enjeu du projet a été donc de développer une application Java qui gère ce type d’enchères tout en
                    assurant la sécurité des transactions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <img
                        src=".././images/interface-encherisseur.png"
                        alt="[IMAGE INTERFACE ENCHERISSEUR]"
                        className="rounded-lg w-full h-auto object-contain"
                    />
                    <img
                        src=".././images/interface-vendeur.png"
                        alt="[IMAGE INTERFACE VENDEUR]"
                        className="rounded-lg w-full h-auto object-contain"
                    />
                    <img
                        src=".././images/interface-age.png"
                        alt="[IMAGE INTERFACE AUTORITE DE GESTION]"
                        className="rounded-lg w-full h-auto object-contain"
                    />
                </div>
                <h2 className="text-2xl font-semibold text-dark-purple mb-4">
                    Défis relevés
                </h2>
                <p className="text-lg text-slate-gray mb-6">
                    Etant donné qu'il s'agissait de ma première situation d'apprentissage suivie avec les méthodes agiles, j'ai été confronté à la pression que cela pouvait engendrer.
                    Ainsi, ce projet a mis en lumière une gestion de projet structurée qui nécessite une organisation méticuleuse.
                </p>
                <h2 className="text-2xl font-semibold text-dark-purple mb-4">
                    Ce que ce projet m’a apporté
                </h2>
                <p className="text-lg text-slate-gray mb-4">
                    Ce projet m'a permis d'évoluer dans une équipe informatique composée d'un Scrum Master et d'un
                    Product Owner (PO).
                    J'ai compris l'intérêt d'effectuer des réunions, pour notamment suivre correctement l'avancée du
                    projet.
                </p>
                <p className="text-lg text-slate-gray mb-4">
                    En parallèle, j'ai appris à utiliser certains outils, comme Wireshark, permettant d'analyser les trames réseaux pour s'assurer d'une bonne sécurité au niveau de l'application.
                </p>
            </div>
        </div>
);
}

export default Encheres;