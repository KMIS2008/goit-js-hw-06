const inputRange = document.querySelector('#font-size-control');
const inputSpan = document.querySelector('#text');

console.dir(inputRange);
console.log(inputSpan);

const handlerRange = (event) => {
inputSpan.style.fontSize = `${event.currentTarget.value}px`; 
}

inputRange.addEventListener('input', handlerRange);