const textInput = document.querySelector('#name-input');
console.dir(textInput);

const textOutput = document.querySelector('#name-output');
// console.log(textOutput);

const handlerInput = (event) => {
    
    textOutput.textContent = event.currentTarget.value;

    if(textOutput.textContent === "") {
        textOutput.textContent ="Anonymous";
    }
};

textInput.addEventListener('input', handlerInput);
