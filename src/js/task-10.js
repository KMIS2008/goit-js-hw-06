function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createCollection = document.querySelector('[data-create]');
const destroyCollection = document.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes');
const inputNumber = document.querySelector('input');

console.log(createCollection);
console.log(destroyCollection);
console.log(boxesDiv);
console.dir(inputNumber);

function createBoxes(amount) {

console.log(inputNumber.value);

const collection = [];
let size = 0;

for(let i = 0; i < amount; i++) {

size += 10;

const boxesCollection = document.createElement('div');

boxesCollection.style.height = `${size + 30}px`;
boxesCollection.style.width = `${size + 30}px`;
boxesCollection.style.backgroundColor = getRandomHexColor();

collection.push(boxesCollection);
}
return collection;
}
  
function destroyBoxes() {
  boxesDiv.innerHTML = '';
}

const handlerCreateCollection = (event) => {
  let collectionDiv = createBoxes(inputNumber.value);
  boxesDiv.append(...collectionDiv);
}


createCollection.addEventListener('click', handlerCreateCollection);

const handlerDestroyCollection = (event) => {
  destroyBoxes();
}

destroyCollection.addEventListener('click', handlerDestroyCollection);