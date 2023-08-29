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

document.body.style.backgroundColor = getRandomHexColor()

  spanColor.textContent = getRandomHexColor()
}


buttonChange.addEventListener('click', handlerChangeColor);







// document.body.style.backgroundColor = getRandomHexColor()
// spanColor.textContent = document.body.style.backgroundColor; /// rgb значення