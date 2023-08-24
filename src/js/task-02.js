const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

console.log(list);



const creatIngredients = ingredients.map( ingredient => {
  const eat = document.createElement("li");
  eat.textContent = ingredient;
  eat.classList.add("item");

return eat;

})

list.append(...creatIngredients);