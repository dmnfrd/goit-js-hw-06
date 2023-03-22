/*Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.*/

const categoriesNumber = document.querySelector('#categories');
const categories = categoriesNumber.querySelectorAll('li.item');
console.log(`Number of categories: ${categories.length}`);

/*Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).*/

categories.forEach((category) => {
const categoryName = category.querySelector('h2');
console.log(categoryName.innerText); 
const categoryElements = category.querySelectorAll('li');
console.log(`Elements: ${categoryElements.length}`);
});


