document.addEventListener("DOMContentLoaded", function() {
//recipe list 

const recettes = [
    {
        "name": "Nouilles instantanées",
        "image": "images/nouilles.png",
        "lien":"recette_test.html",
        "ingredients": [
            "1 oeuf",
            "1 paquet de nouilles instantanées"
        ],
        "steps": [
            "Suivre les instructions sur le paquet",
            "Une fois les nouilles cuites et les servir dans l'assiette SANS le bouillon",
            "Tout en laissant le bouillon sur le feu, y rajouter l'oeuf et laisser 1 minute",
            "Rajouter le bouillon aux pâtes. Bon appétit !"
        ]
    },
    {
        "name": "Hamburger",
        "image": "images/burger.JPG",
        "lien":"recette_burger.html",
        "ingredients": [
            "1 steak",
            "1 pain burger",
            "2 tranches de fromage",
            "1 tomate",
            "1 salade",
            "Sauces au choix"
        ],
        "steps": [
            "Mettre les pains au four à 200°C pendant 2 min",
            "Faire saisir le steak à feu vif pendant 1 min de chaque côté",
            "Baisser le feu et continuer de faire cuire pendant 2 min",
            "Rajouter le fromage par dessus le steak, et laisser cuire pendant encore 1 min",
            "On peut maintenant faire le burger ! Ne pas oublier la salade, tomates et sauces"
        ]
    }
  ]
  

const recetteList = document.getElementById("recette-list");

// Parcourir les recettes et afficher les éléments pour chaque recette.
recettes.forEach(recette => {
    const listItem = document.createElement("li");
    const recipeLink = document.createElement("a");
    const recipeImage = document.createElement("img");
    recipeImage.classList.add("recipe-image");
    const recipeTitle = document.createElement("h3");

    // Définir l'attribut "href" du lien pour diriger vers la page de la recette.
    recipeLink.href = recette.lien; 

    // Définir l'image de la recette et le titre.
    recipeImage.src = recette.image;
    recipeImage.alt = recette.name;
    recipeTitle.textContent = recette.name;

    // Ajouter l'image et le titre à l'élément <a>.
    recipeLink.appendChild(recipeImage);
    recipeLink.appendChild(recipeTitle);

    // Ajouter le lien à l'élément de liste <li>.
    listItem.appendChild(recipeLink);

    // Ajouter l'élément de liste <li> à la liste <ul>.
    recetteList.appendChild(listItem);
});


});