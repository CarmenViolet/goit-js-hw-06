function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let bodyEl = document.querySelector('body')
let buttonEl = document.querySelector('.change-color')
let spanEl = document.querySelector('.color')

buttonEl.addEventListener('click', event => {
  let changeColor = getRandomHexColor();
  bodyEl.style.backgroundColor = changeColor;
  spanEl.textContent = changeColor;
})