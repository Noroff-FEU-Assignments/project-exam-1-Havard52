const recipeContainer = document.querySelector(".recipePostContainer");
const baseUrl = "http://localhost/mealPreppers/wordpress/wp-json/wp/v2/wprm_recipe";

async function getRecipes (url){
    try {
    const response = await fetch (url);
    const recipes = await response.json();
    recipes.forEach(function createHtml (recipe){
        recipeContainer.innerHTML += `
        <a href="specificrecipe.html?id=${recipe.id}" class="recipeContainer">       
        <div>
          <img src="${recipe.recipe.image_url}" alt="${recipe.recipe.name}">
        </div>
        <div class="recipeInfoContainer">
          <h2>${recipe.recipe.name}</h2>
          <div class="ratings">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
            ${recipe.recipe.summary} 
            <div>   
              ${recipe.recipe.notes}
            </div>
        </div>
      </a>`
    })
}


catch (error){
    console.error
    ("Error fetching products:", error);
}};

getRecipes(baseUrl);

