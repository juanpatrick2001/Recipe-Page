const createRecipe = (recipe) => {
  nameRecipe.innerHTML = recipe.name;
  desc.innerHTML = recipe.description;
  pic.setAttribute("src", "../" + recipe.pic);
  time.innerHTML = recipe.time + " menit";

  ingredients.innerHTML = "";
  steps.innerHTML = "";

  for (let count = 0; count < recipe.ingredients.length; count++) {
    ingredients.innerHTML += `<input type="checkbox" id="ingredient${count}" class="check__item" name="ingredient${count}" />
      <label for="ingredient${count}">${recipe.ingredients[count]}</label><br />
    `;
  }
  for (let count = 0; count < recipe.steps.length; count++) {
    steps.innerHTML += `<li>
        ${recipe.steps[count]}
    </li>`;
  }
};

const getItemById = (id) => {
  for (let count = 0; count < data.length; count++) {
    if (id === data[count].id) {
      return data[count];
    }
  }
  return [];
};

const params = new URL(document.location).searchParams;
const id = params.get("id");

const nameRecipe = document.getElementById("name");
const desc = document.getElementById("description");
const pic = document.getElementById("pic");
const time = document.getElementById("time");
const ingredients = document.getElementById("content__ingredients");
const steps = document.getElementById("content__instructions");

const recipe = getItemById(id);
recipe.length === 0 ? alert("Not Found Recipe by ID") : createRecipe(recipe);
