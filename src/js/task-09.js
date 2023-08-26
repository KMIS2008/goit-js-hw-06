function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChange = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const body = document.querySelector('.widget');

console.log(buttonChange);
console.dir(spanColor);
console.dir(body);

const handlerChangeColor = (event) => {

body.style.backgroundColor = getRandomHexColor()
spanColor.textContent = body.style.backgroundColor;
}


buttonChange.addEventListener('click', handlerChangeColor);