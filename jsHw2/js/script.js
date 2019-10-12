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


// доп задание



const moreEx = function () {
    const loginArr = ['admin', 'user1', 'user2', 'user3'];
    const passwordArr = ['admin', '111qwe', '123123', 'r4nd0mp4zzw0rd'];

    // индекс loginArr[x] соответствует индексу passwordArr[x]

    let login = prompt('enter ur login');
    let password;

    if (loginArr.indexOf(login) !== -1) {
        let n = 3;
        ////////////
        do {
            password = prompt('enter password');

            if (password === passwordArr[loginArr.indexOf(login)]) {
                alert('welcome');
                break;
            } else if (password === null) {
                alert('cancel');
                break;
            } else {
                alert(`incorrect password, u have ${n} retries`);
            }
            n--;
        } while (n >= 0);
        ///////////////////

    } else if (login === null) {
        alert('cancel');
    } else {
        alert('incorrect user');

    }





//////////////////////
    const choise = confirm('перезапуск?');
    if (choise === true) {
    moreEx();
    }
/////////////////
}




const choise = confirm('ок - дз ; отмена - доп задания');
if (choise === true) {
    homework();
} else {
    moreEx();
}