const recipeContainer = document.querySelector(".arrayOfPosts");
const previousButton = document.querySelector("#previousButton");
const nextButton = document.querySelector("#nextButton");
const baseUrl = "http://localhost/mealPreppers/wordpress/wp-json/wp/v2/wprm_recipe";

let counter = 0;
let recipes; 


async function getRecipes(url) {
    try {
        const response = await fetch(url);
        recipes = await response.json(); 
        makeRecipesVisible(recipes);

        previousButton.addEventListener("click", showPreviousRecipes);
        nextButton.addEventListener("click", showNextRecipes);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

function makeRecipesVisible(recipes) {
    recipeContainer.innerHTML = "";

    for (let i = counter; i < counter + 3; i++) {
        const recipe = recipes[i];
        recipeContainer.innerHTML += `
            <a href="specificrecipe.html?id=${recipe.id}" class="postContainer">        
                <img src="${recipe.recipe.image_url}" alt="${recipe.recipe.name}">
                <h2>${recipe.recipe.name}</h2>
                <div class="ratings">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <div>
                    ${recipe.recipe.notes}
                </div>
            </a>
        `;}}

function showPreviousRecipes() {
    counter = (counter - 3 + recipes.length) % recipes.length;
    makeRecipesVisible(recipes);
};

function showNextRecipes() {
    counter = (counter + 3) % recipes.length;
    makeRecipesVisible(recipes);
}

getRecipes(baseUrl);
