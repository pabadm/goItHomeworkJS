'use strict';

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.


//не понимаю как сделать это динамично(какой должен быть ивент)
const fontSizeControl = document.querySelector('#font-size-control');

const text = document.querySelector('#text');

const fontSizeControlFocus = () =>{
    let fontSizeControl2 = document.querySelector('#font-size-control');
    text.style.fontSize = fontSizeControl2.value ;
    console.log(fontSizeControl2.value);
}
fontSizeControl.addEventListener('blur',fontSizeControlFocus);


console.log(fontSizeControl.value);