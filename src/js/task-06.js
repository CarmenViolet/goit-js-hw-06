let inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', inputChecking);

function inputChecking(event) {
    if(inputEl.value.length === Number(inputEl.dataset.length)) {
        if(inputEl.classList.contains('invalid')) {
            inputEl.classList.remove('invalid')
        }
        return inputEl.classList.add('valid')
        
    } else if(inputEl.value.length > Number(inputEl.dataset.length) || inputEl.value.length < Number(inputEl.dataset.length) ) {
        if(inputEl.classList.contains('valid')) {
            inputEl.classList.remove('valid')
        }
        return inputEl.classList.add('invalid')
    }
}