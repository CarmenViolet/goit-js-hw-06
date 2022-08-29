let inputEl = document.querySelector('#font-size-control');
let textEl = document.querySelector('#text');

inputEl.addEventListener('input', textRangeChecking);

function textRangeChecking(event) {
    textEl.style.fontSize = `${inputEl.value}px`
}


