const textInput = document.querySelector('#validation-input');
console.dir(textInput);
console.log(textInput.getAttribute('data-length'));

// textInput.classList.add("validation-input");

const validatorInput = (event) => {

if (event.currentTarget.value.length === textInput.getAttribute('data-length')) {
   textInput.classList.add(validation-input.valid ); 
}

else {textInput.classList.add(validation-input.invalid)};

} 

textInput.addEventListener('blur', validatorInput);