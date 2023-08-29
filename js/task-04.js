
const value = document.querySelector('#value');

// console.log(value);
let counterValue = 0;

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
console.log(btnDecrement);

const handlerClicDecrement = () => {
 counterValue -=1;
  value.textContent = counterValue;

};

const handlerClicIncrement= () => {
     counterValue +=1;
     value.textContent = counterValue;
   };

btnDecrement.addEventListener("click", handlerClicDecrement) 
btnIncrement.addEventListener('click', handlerClicIncrement) 

