"use strict";

// Задание 5

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
let nameInput = document.querySelector('#name-input');

const nameOutput = document.querySelector("#name-output");
const nameOutputFunc = () => {
    nameInput = document.querySelector('#name-input');
    return nameOutput.textContent = nameInput.placeholder;
};
// !!! не работает ивент submit ни на сам nameInput ни на кнопку
nameInput.addEventListener("submit", nameOutputFunc);
