const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const btn = document.getElementById("search-btn");
const inp = document.getElementById("user-inp");

const result = document.getElementById("result");

const bakchodi = () => {
  let input = inp.value;
  let finalUrl = url + input;

  fetch(finalUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.meals[0]);
      let myMeal = data.meals[0];

      let count = 1;
      let ingredients = [];
      for (let i in myMeal) {
        let ingredient = "";
        let measure = "";
        if (i.startsWith("strIngredient") && myMeal[i]) {
          ingredient = myMeal[i];
          measure = myMeal["strMeasure" + count];
          count++;
          ingredients.push(`${measure} ${ingredient}`);
        }
      }

      result.innerHTML = `
        <img src="${myMeal.strMealThumb}">
        <div class="details">
            <h2>${myMeal.strMeal}</h2>
            <h4>${myMeal.strArea}</h4>
  
            </div>   
            <div id="ingredient-con"></div>
  
            <div id="recipe">
                <button id="hide-recipe">X</button>
                <pre id="instructions">${myMeal.strInstructions}</pre>
             </div>
             <button id="show-recipe">View recipe</button>
                `;

      let parent = document.createElement("ul");
      let ingredientCon = document.getElementById("ingredient-con");
      let recipe = document.getElementById("recipe");
      let hideRecipe = document.getElementById("hide-recipe");
      let showRecipe = document.getElementById("show-recipe");

      ingredients.forEach((i) => {
        let child = document.createElement("li");
        child.innerText = i;
        parent.appendChild(child);
        ingredientCon.appendChild(parent);

        showRecipe.addEventListener("click", () => {
          recipe.style.display = "block";
        });
        hideRecipe.addEventListener("click", () => {
          recipe.style.display = "none";
        });
      });
    });
};

btn.addEventListener("click", bakchodi);
