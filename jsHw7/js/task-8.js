'use strict';

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

//     Имеет случайный rgb цвет фона
//     Размеры самого первого div - 30px на 30px
//     Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px

// Создай функцию destroyBoxes(), которая очищает div#boxes.




// ((()))я не могу через инпут, у меня не работает submit((()))

const renderBtn = document.querySelector('#render');
const destroyBtn = document.querySelector('#destroy');
const boxesContainer = document.querySelector('#boxes');

const createBoxes = () =>{
    let amount = Number(prompt('кол-во', 10));
    for (let index = 0; index < amount; index++) {
        boxesContainer.insertAdjacentHTML('beforeend','<div></div>')
        boxesContainer.lastElementChild.style.width = `${30 + 10* index}px`
        boxesContainer.lastElementChild.style.height = `${30 + 10* index}px`
        let randomGreen = Math.floor(Math.random() * (255 - 1)) + 1;
        let randomRed = Math.floor(Math.random() * (255 - 1)) + 1;
        let randomBlue = Math.floor(Math.random() * (255 - 1)) + 1;
        boxesContainer.lastElementChild.style.backgroundColor = `rgb(${randomRed},${randomGreen},${randomBlue})`;
    }
}
const deleteBoxes = () => {
    [...boxesContainer.children].map(child => child.remove());
}
renderBtn.addEventListener('click',createBoxes);
destroyBtn.addEventListener('click',deleteBoxes);


