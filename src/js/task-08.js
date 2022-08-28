let form = document.querySelector('.login-form');

form.addEventListener('submit', submitForm);

// console.log(form.elements);

function submitForm(event) {
    event.preventDefault();

    let email = form.elements.email.value;
    let password = form.elements.password.value;
    let dataForm = {email, password};
  
    if(email === '' || password === '') {
     return  alert('All fields should be filled.');
    } else {
        console.log(dataForm);
        event.currentTarget.reset();
    }
}
