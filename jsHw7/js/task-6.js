'use strict';

// Задание 6

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.


//     Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//     Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.querySelector('#validation-input');
// не понимаю как использовать стиль для .valid и .invalid
const inputLengthValidate = () =>{
    if(input.placeholder.length > input.data-length){
        return input.style.borderColor = '#f44336';
    }
}

input.addEventListener('blur', inputLengthValidate);