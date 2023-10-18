document.addEventListener("DOMContentLoaded", function() {

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

const recetteList = document.getElementById("instructions-list");

let burgerRecipe;
recettes.forEach(recette => {
    if (recette.name === "Hamburger") {
        burgerRecipe = recette;
    }
});

if (burgerRecipe) {
    burgerRecipe.steps.forEach(etape => {
        const listItem = document.createElement("li");
        const recipeTitle = document.createElement("p");
        recipeTitle.textContent = etape
        listItem.appendChild(recipeTitle);
        recetteList.appendChild(listItem);
    });
}

const ingredientList = document.getElementById("ingredient-list");

if (burgerRecipe) {
    burgerRecipe.ingredients.forEach(etape => {
        const listElement = document.createElement("li");
        const ingredientElement = document.createElement("p");
        ingredientElement.textContent = etape
        listElement.appendChild(ingredientElement);
        ingredientList.appendChild(listElement);
    });
}


});