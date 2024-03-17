document.addEventListener('DOMContentLoaded', function() {
    // Eléments du site
    const titre = document.getElementById('titre');
    const profil = document.getElementById('profil');
    const projets = document.getElementById('projets');
    const experiences = document.getElementById('experiences');
    const formation = document.getElementById('formation');

    // Actions sur le site
    titre.addEventListener('click', function() {
        window.open('index.html', '_blank');
    });
    profil.addEventListener('click', function() {
        window.open('./pages/profil.html', '_blank');
    });
    projets.addEventListener('click', function() {
        window.open('./pages/index.html', '_blank');
    });
    experiences.addEventListener('click', function() {
        window.open('./pages/index.html', '_blank');
    });
    formation.addEventListener('click', function() {
        window.open('./pages/index.html', '_blank');
    });
});