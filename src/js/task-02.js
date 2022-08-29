
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ulList = document.getElementById('ingredients')
  
    const ingredientsEl = ingredients.forEach(el => {
      let liItem = document.createElement('li');
      liItem.classList.add("item");
      liItem.textContent = el;
      ulList.insertAdjacentElement('afterbegin', liItem)
      
      return ulList;
  });

console.log(ulList);

 
// let item = ingredients.reduce((acc, liItem) => acc += liItem, '').join(' ');

