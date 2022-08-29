let form = document.querySelector('.login-form');

form.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();

    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const dataForm = {email, password};
  
    if(email === '' || password === '') {
     return  alert('All fields should be filled.');
    } else {
        console.log(dataForm);
        form.reset();
    }
}
