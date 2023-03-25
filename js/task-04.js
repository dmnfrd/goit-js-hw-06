/*Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.*/

let counterValue = 0;
const valueSpan = document.getElementById('value');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

decrementButton.addEventListener('click', () => {
  counterValue--;
  valueSpan.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
  counterValue++;
  valueSpan.textContent = counterValue;
});