const categoriesEl = document.getElementById('#categories');
const itemEl = document.querySelectorAll('.item')
const category = document.querySelectorAll('h2')



console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach(function(element) {
console.log(`Category ${element.firstElementChild.textContent}`, 
`Elements ${element.lastElementChild.children.length}`);
})





