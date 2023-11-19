const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const breadcrumbs =document.querySelector(".breadcrumbs");
const recipeInfo = document.querySelector(".recipeInfo");
const bodyBlur = document.querySelector("body");
const id = params.get("id");

const baseUrl = "https://rainyvavik.no/mealpreppers/wp-json/wp/v2/wprm_recipe/" + id;
const proxy = "https://noroffcors.onrender.com/";
const corsFix = proxy + baseUrl;

async function getRecipes (url){
    try {
    const response = await fetch (url);
    const recipe = await response.json();
    console.log(recipe);
    createHtml(recipe);
    breadcrumbsUrl (recipe);
    createImageModule(recipe);

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
<img src="${recipe.recipe.image_url}" alt="picture of ${recipe.recipe.name}" id="recipeImage" class="imageModuleAppear">
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

  const recipeImage = document.getElementById("recipeImage");

  recipeImage.addEventListener("click", function(){
    recipeImage.classList.toggle("imageModule");
  });

  document.body.addEventListener("click", function(imageModuledisappear) {
    if (!recipeImage.contains(imageModuledisappear.target)) {
        recipeImage.classList.remove("imageModule");   
    }
});

}

function breadcrumbsUrl (recipe) {
    breadcrumbs.innerHTML += `
    <a href="index.html">Home > </a>
    <a href="recipes.html">Recipes ></a>
    <a href="specificrecipe.html?id=${recipe.id}">${recipe.recipe.name}</a>
    `;
}

getRecipes(corsFix);

