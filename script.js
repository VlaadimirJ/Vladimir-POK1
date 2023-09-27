const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slideWidth = carousel.clientWidth;
let currentIndex = 0;

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
});

nextButton.addEventListener('click', () => {
    const numSlides = carousel.children.length;
    if (currentIndex < numSlides - 1) {
        currentIndex++;
        carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
});


document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche la soumission du formulaire par défaut

    // Récupérer le terme de recherche saisi par l'utilisateur
    const searchTerm = document.getElementById('search-input').value;

    // Effectuer une action de recherche (par exemple, AJAX) ici avec searchTerm
    // Afficher les résultats ou rediriger vers une page de résultats
    alert('Vous avez recherché : ' + searchTerm);
});