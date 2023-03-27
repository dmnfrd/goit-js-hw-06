const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

/*Напиши скрипт, який для кожного елемента масиву ingredients:
Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul#ingredients.*/


const ingredientsList = document.querySelector('#ingredients');

for (let ingredient of ingredients) {
  let newElLi = document.createElement('li');
  newElLi.textContent = ingredient;
  newElLi.className = 'item';


ingredientsList.appendChild(newElLi);
}