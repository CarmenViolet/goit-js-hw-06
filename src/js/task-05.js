let nameInput = document.querySelector('#name-input');
let nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', textInput);

function textInput(event) {
    nameOutput.textContent = event.currentTarget.value;
}