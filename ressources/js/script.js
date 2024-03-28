document.addEventListener('DOMContentLoaded', function() {
    // Eléments du site
    const titre = document.getElementById('titre');
    const profil = document.getElementById('profil');
    const projets = document.getElementById('projets');
    const experiences = document.getElementById('experiences');
    const formation = document.getElementById('formation');

    // Actions sur le site
    titre.addEventListener('click', function() {
        window.open('/portfolio/index.html','_self');
    });
    profil.addEventListener('click', function() {
        window.open('/portfolio/pages/profil.html','_self');
    });
    projets.addEventListener('click', function() {
        window.open('/portfolio/pages/projets.html','_self');
    });
    experiences.addEventListener('click', function() {
        window.open('/portfolio/pages/experiences.html','_self');
    });
    formation.addEventListener('click', function() {
        window.open('/portfolio/pages/formation.html','_self');
    });
});