'use strict';

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//     Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//     Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//     Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const decrementBtn = document.querySelector('#decrement');
const incrementBtn = document.querySelector('#increment');
const value = document.querySelector('#value');
let counterValue = 0;

const decrement = () => {
    counterValue  -= 1;
    value.textContent = counterValue;
};
const increment = ()=>{
    counterValue  += 1;
    value.textContent = counterValue;
}
decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

