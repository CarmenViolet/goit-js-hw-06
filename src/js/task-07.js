let inputEl = document.querySelector('#font-size-control');
let textEl = document.querySelector('#text');
// console.dir(inputEl);
// console.dir(textEl);

inputEl.addEventListener('input', textRangeChecking);


function textRangeChecking(event) {
    textEl.style.fontSize = `${inputEl.value}px`
}


