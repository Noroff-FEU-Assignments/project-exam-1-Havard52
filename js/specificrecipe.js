const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");


const recipeInfo = document.querySelector(".recipeInfo");
const baseUrl = "http://localhost/mealPreppers/wordpress/wp-json/wp/v2/wprm_recipe/" + id;

async function getRecipes (url){
    try {
    const response = await fetch (url);
    const recipe = await response.json();
    console.log(recipe);
    createHtml(recipe);

}catch (error){
    console.error
    ("Error fetching products:", error);
}}

function createHtml (recipe){
    recipeInfo.innerHTML += `

<div>
    <H1>${recipe.recipe.name}</H1>
</div>
<div class="ratings">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
</div>
<div>
    <img src="${recipe.recipe.image_url}" alt="${recipe.recipe.name}">
</div>
<div class="recipeInfoContainers">
    <div class="macros">
    <i class="fa-solid fa-fire fa-3x"></i>
        ${recipe.recipe.notes}
    </div>
    <div class="macros">
    <i class="fa-solid fa-clock fa-3x"></i>
        <p class="timeAndCost"> ${recipe.recipe.total_time} min</p>
    </div>
    <div class="macros">
    <i class="fa-solid fa-dollar-sign fa-3x"></i>
        <p class="timeAndCost"> ${recipe.recipe.cost}</p>
    </div>
</div>
<div class="ingrediensContainer">
    <h2>Ingredienser</h2>
        ${recipe.recipe.ingredients_flat.map (unit => 
       `<div class= "ingredienser">
        <p>${unit.amount}</p> 
        <p>${unit.unit}</p>
        <p>${unit.name}</p>
        </div>
        `) .join('') }  
</div>
<div class="approachSection">
    <h1>Fremgangsmetodikk</h1>
    <div class="underlineApproach"></div>
    ${recipe.recipe.instructions_flat.map (instruction => `<p>${instruction.text}</p>`) .join('') }
  </div>`;
}
getRecipes(baseUrl);
