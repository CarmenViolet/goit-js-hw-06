const categoriesEl = document.getElementById('#categories');
const itemEl = document.querySelectorAll('.item')

console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach(function(element) {
    const category = document.querySelectorAll('li h2')
    const numberEl = document.querySelectorAll('li.item li')

console.log(`Category ${element.category.textContent}`, 
`Elements ${element.numberEl.length}`);

})






