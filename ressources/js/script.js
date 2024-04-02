/**
 * Cette constante permet de basculer d'un état de développeur à un état produit
 * @type {boolean}
 */
const dev = false;
let urlDev = ""; // variable à ne pas toucher

/**
 * Cette partie s'exécute lorsque tout le site a terminé de charger
 */
document.addEventListener('DOMContentLoaded', function() {
    // Partie développeur (url changeante selon le mode)
    if (dev) {
        urlDev = "/";
    } else {
        urlDev = "/portfolio/"
    }

    // Eléments du site
    const titre = document.getElementById('titre');

    // Actions sur le site
    titre.addEventListener('click', function() {
        window.open(urlDev + 'index.html','_self');
    });
});

/**
 * Cette fonction ouvre la page qui a été cliqué sur le site
 * @param elementClique
 */
function navigationCurseur(elementClique) {
    const nomPage = elementClique.id;
    const url = urlDev + "pages/"+ nomPage + ".html";
    window.open(url,'_self');
}