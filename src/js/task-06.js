const textInput = document.querySelector('#validation-input');
// console.dir(textInput);
// console.log(textInput.getAttribute('data-length'));


const validatorInput = (event) => {

if (event.currentTarget.value.length == textInput.getAttribute('data-length')) {
  
    textInput.classList.add('valid') 

        if(textInput.classList.contains('invalid')) {
           textInput.classList.remove('invalid')
    }
}

else {
    if(textInput.classList.contains('valid')) {
      textInput.classList.remove('valid');   
    }

    textInput.classList.add('invalid')};

} 

textInput.addEventListener('blur', validatorInput);
// console.log(textInput.classList);