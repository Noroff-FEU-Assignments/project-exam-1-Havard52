const recipeContainer = document.querySelector(".recipePostContainer");
const morePostsButton = document.querySelector("#morePostsButton");
const spinner = document.querySelector (".waitSpinner");
const baseUrl = "http://localhost/mealPreppers/wordpress/wp-json/wp/v2/wprm_recipe";

let index = 0;
let recipes;

async function getRecipes (url){
    try {
    const response = await fetch (url);
    recipes = await response.json();
    makePostsVisible (recipes);
    morePostsButton.addEventListener("click", showMorePosts );
    }
catch (error){
    console.error
    ("Error fetching posts:", error);
}};


function makePostsVisible (recipes){
for (let i =index; i< Math.min(index + 5, recipes.length); i++)
{
  spinner.style.display = "none";
  
  const recipe = recipes[i];
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
}};

function showMorePosts (){
  index = Math.min(index + 5, recipes.length);
  makePostsVisible(recipes);
};

getRecipes(baseUrl);

