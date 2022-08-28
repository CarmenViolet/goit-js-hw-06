let counterValue = 0;

const decrement = document.querySelector('button[data-action="decrement"]')
const increment = document.querySelector('button[data-action="increment"]')
let value = document.querySelector('#value');



decrement.addEventListener('click', dec);

function dec() {
   counterValue -= 1;
   value.innerHTML = counterValue;
  console.log(counterValue);
}

increment.addEventListener('click', inc);

function inc() {
   counterValue += 1;
    value.innerHTML = counterValue;
  console.log(counterValue);
}