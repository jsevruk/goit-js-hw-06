// Счетчик состоит из спана и кнопок, которые, при клике,
// должны увеличивать и уменьшать его значение на единицу.

//     Создай переменную counterValue в которой
//     будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
//     Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

decrementBtn.addEventListener('click', decrementBtnClick);
incrementBtn.addEventListener('click', incrementBtnClick);

function decrementBtnClick() {
  return (value.textContent = counterValue -= 1);
}

function incrementBtnClick() {
  return (value.textContent = counterValue += 1);
}
