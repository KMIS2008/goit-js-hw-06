const form = document.querySelector('.login-form');

// console.dir(form);
// console.log(form);

const handlerFormSubmit = (event) => {
    event.preventDefault();

    const {
          elements: { email, password }
        } = event.currentTarget;


    if (email.value === '' || password.value === '') {
        return alert('All fields must be filled') 
    }

    else {
     console.log(`Email: ${email.value}, Password: ${password.value}`);
     event.currentTarget.reset();

    }
}



form.addEventListener('submit', handlerFormSubmit)
