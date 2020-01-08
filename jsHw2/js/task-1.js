'use strict';

//закинул все в функции

const homework = function () {
    let userInput;
    const numbers = [];
    // создание массива
    do {

        userInput = prompt('enter number');
        numbers.push(Number(userInput));

        
        //что-бы работало пустое ок
        if(userInput === ''){
            userInput = null;
        }
        /////

    } while (userInput !== null );
    numbers.pop(); //из-за DO WHILE добавляется еще один элемент в конце(0)


    //  подсчет суммы
    let total = 0;

    for (let k = 0; k < numbers.length; k++) {
        total += numbers[k];


        if (Number(total) === NaN) {
            total = 'NaN';
        }
    }


    alert(`summ = ${total}`);



//////////////////////
    const choise = confirm('перезапуск?');
    if (choise === true) {
    homework();
/////////////////
    }




}


